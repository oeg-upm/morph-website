import React from 'react'
import {Row, Col, Typography,Table, Divider, Button, Spin, Tabs} from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {CloudDownloadOutlined} from '@ant-design/icons'
import axios from 'axios'
import LayoutSider from '../components/general/Layout'
import QueryChart from '../components/query/QueryCharts'
import {data} from '../data/data'
import Layout from '../../components/Layout'


const {TabPane} = Tabs;
const {Title, Paragraph, Text} = Typography;




function fetchData(url){
  return new Promise((resolve, reject) => {
    console.log(url)
    axios.get(url).then((response) => {
      resolve(response.data);
    }).catch((err) => reject( url + ': ' + err))
  })
}

export default class Query extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dataset:'',
      queryIdx:'',
      query:'',
      dir:'',
      csvs:[],
      csvw:null,
      strCsvw:'',
      sparqlresult:{},
      yarrrml:null,
      schema:null
    }
  }

  render(){
    const antIcon = <LoadingOutlined style={{ fontSize: 72 }} spin />;
    return(
      <Layout>
      <LayoutSider dataset={this.state.dataset}>
      {this.state.csvw !== null && this.state.yarrrml !== null && this.state.schema !== null ?(this.page()):(
        <Row justify="center">
          <Col span={3}>
          <Spin indicator={antIcon} />
          </Col>
        </Row>
      )}
      </LayoutSider>
      </Layout>

    )
  }
  page(){
    return(
      <>
        <Row style={{marginBottom:32}}>
          <Col  xs={24}>
          <Title level={2}>{this.state.dataset.toUpperCase() + " - Query" + this.state.queryIdx}</Title>
          </Col>
        </Row>
          <Row gutter={32} justify="center" align="top">
              <Col span={22}>
                <Title level={3}>SPARQL Query</Title>
                <div style={{marginTop:32}}>
                <SyntaxHighlighter language="ttl" style={docco}>
                  {this.state.query}
                  </SyntaxHighlighter>
                </div>
              </Col>
          </Row>
          <Row justify="center">
            <Col span={22}>
                <QueryChart csvw={this.state.csvw} dataset={this.state.dataset}></QueryChart>
              </Col>
          </Row>
          <Divider/>
          {
            Object.keys(this.state.sparqlresult.data).length !== 0 ? (
              <>
                <Title level={3}>SPARQL Result</Title>
                <Table bordered dataSource={this.state.sparqlresult.data} columns={this.state.sparqlresult.columns} />
              </>
            ):null
          }
          <Row gutter={16}>
            <Col>
            <Title level={3}>Morph-CSV Output</Title>              
            </Col>
            <Col>
                {/* <Button type="primary">Download <CloudDownloadOutlined size={100} /> </Button> */}
            </Col>
          </Row>
          <Tabs>
            <TabPane tab="SQL Schema" key="1">
                <SyntaxHighlighter language="sql" style={docco}>
                {this.state.schema.replace(/;/gi, ';\n')}
                </SyntaxHighlighter>
            </TabPane>             
            <TabPane tab="Simplified YARRRML Mapping" key="3">
                <Row>
                  <Col span={12}>
                  <Text>
                    <Text strong>YARRRML</Text> is a human readable text-based representation for declarative Linked Data generation rules.
                    It is a subset of YAML, a widely used data serialization language designed to be human-friendly.
                    It can already be used to represent R2RML and RML rules. You can learn more <a href="https://rml.io/yarrrml/">here</a>.
                  </Text>
                  </Col>
                </Row>
                <Row style={{marginTop:8, marginBottom:32}}>
                  <Col>
                  </Col>
                </Row>
                <SyntaxHighlighter language="yaml" style={docco}>
                {this.state.yarrrml}
                </SyntaxHighlighter>
            </TabPane>
            <TabPane tab="Simplified CSVW" key="4">
            <Row style={{marginTop:8, marginBottom:32}}>
                  <Col span={12}>
                  </Col>
            </Row>
                <SyntaxHighlighter language="json" style={docco}>
                {this.state.strCsvw.toString()}
                </SyntaxHighlighter>
            </TabPane>
          </Tabs>
          <Divider></Divider>
          {
            this.state.csvs.length !== 0 ? (
              <>
              <Title level={4}>
              Processed CSVs
            </Title>
            <Tabs>
              {this.state.csvs.map((csv) => {
                return(
                  <TabPane key={csv.title} tab={csv.title}>
                    <Table bordered dataSource={csv.data} columns={csv.columns}></Table>
                  </TabPane>
                )
              })}
  
            </Tabs>              
            </>
            ):null
          }
      </>
   )    
  }

  async getData(){
    const dataset = this.props.match.params.dataset;
    const queryIdx = this.props.match.params.query;
    this.setState({queryIdx:queryIdx, dataset:dataset})
    const queryDir = data[dataset]['url'] + 'query' + queryIdx;
    const dir =  queryDir + '/query' + queryIdx + '.';
      const csvw = await fetchData(dir + 'csvw.min.json') .catch((err) => console.log(err))
      const strCsvw = JSON.stringify(csvw,null,"  ");
      const yarrrml = await fetchData(dir + 'mapping.yaml').catch((err) => console.log(err))
      const schema = await fetchData(dir + 'schema.sql').catch((err) => console.log(err))
      const query = await fetchData(dir + 'rq').catch((err) => console.log(err))
      let sparqlresult = {}
      let sparqlResultData = await fetchData(queryDir + '/sparqlresult.processed.json').catch((err) => console.log(err))
      sparqlresult.data = sparqlResultData !== undefined ? sparqlResultData.data:{};
      sparqlresult.columns = sparqlResultData !== undefined ? this.getColumnNames(Object.keys(sparqlresult.data[0])):[]
      const csvUrls = csvw['tables'].map(table =>  queryDir + '/results/' + table.url.split("/").pop().replace('.csv', '.json'))
      console.log("CSV URLS: ")
      console.log(csvUrls)
      await this.getCsvs(csvUrls)
      console.log("CSV:")
      console.log(this.state.csvs)
      this.setState({dataset:dataset, csvw:csvw,strCsvw:strCsvw, yarrrml:yarrrml,schema:schema, query:query, sparqlresult:sparqlresult})

  } 
  async getCsvs(csvUrls){
    let CSVs = [];
    for(let i in csvUrls){
      let url = csvUrls[i]
      const title = url.split("/").pop().replace('.json', '.csv')
      console.log(url)
      let {data} = await fetchData(url);
    console.log(data[0])
    let columnNames = Object.keys(data[0]);
    let columns = []
    columnNames.map((name) => {
      let aux =       {
        title: name,
        dataIndex: name,
        ellipsis:true,
        key: name,
      }
      columns.push(aux)
    });
      CSVs.push({title:title,data:data, columns:columns});
    }
    console.log("SEGUNDO")
    this.setState({csvs:CSVs})
    console.log(this.state.csvs)
  }
  getColumnNames(data){
    let columns = []
    data.map((name) => {
      let aux =       {
        title: name,
        dataIndex: name,
        ellipsis:true,
        key: name,
      }
      columns.push(aux)
    });
    return columns
  }
  async componentDidMount(){
    await this.getData();  
  }
  // async componentDidUpdate(){
  //   if(this.state.idx != this.props.match.params.query || this.state.idx != this.props.match.params.dataset){
  //     await this.getData()
  //   }
  // }
} 