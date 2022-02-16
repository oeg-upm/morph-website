import React from 'react'
import {Card, Button, Row, Col, Typography, Avatar, Divider, List} from 'antd'
import {ShareAltOutlined, GithubOutlined} from '@ant-design/icons'
import MemberList from '../Members/MemberList'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import {getTool} from '../../requests/virtuoso'

const {Meta} = Card
const {Title, Text, Paragraph} = Typography

const initials = (name) => {
    let words = name.toString().split(' ')
    let result = ""
    words.map((val) => {
        result += val[0]
    })
    return result
} 
export default class ToolCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:{},
            context:{},
            abstract:""
        }
    }
    async getData(){
        const response = await getTool(this.props.code).catch(err => console.log(err))
        if(Object.keys(response).length !== 0 ){
         this.setState({data:response.data, context:response.context})
            // if(Object.keys(response.data).includes('abstract')){
            //     const abstract = await axios.get(this.state.data.abstract).catch((err) => console.log(err))
            //     // console.log("Abstract")
            //     // console.log(abstract.data)
            //     const rawEndpoint = this.state.data.abstract.replace('README.md','')
            //     const readme = abstract.data.replace(/src\=\"\.\//g, 'src="' + rawEndpoint)
            //     this.setState({abstract:readme})
            // }
        }
        }

    async componentDidMount(){
        if(Object.keys(this.state.data).length === 0)
            await this.getData()
    }
  /*  async componentDidUpdate(){
        if(Object.keys(this.state.data).length === 0)
            await this.getData()
    }*/
    render(){
            return(
                this.props.size === "small"?(
                    this.minCard()):(
                        this.page()
                    )

            )
        }
       
    page =() => {
        console.log(this.state.data)
        return(
    <div resource={this.state.data.id} typeof={this.state.context.SoftwareSourceCode}>
        <Row>
            <Col>
                <Title level={2}>
                    <span property={this.state.context.name}>
                        {this.state.data.name}
                    </span>
                </Title>
            </Col>
        </Row>
        <Title level={4}>
            Useful Links:
        </Title>
        <Row gutter={[16,16]} align="middle">
            <Col>
            <Button href={this.state.data.codeRepository} property={this.state.context.codeRepository}>
                Github Repository <GithubOutlined/>

            </Button>
            </Col>
            {Object.keys(this.state.data).includes('zenodoDoi')?(
                <Col>
                    <a href={"https://doi.org/" + this.state.data.zenodoDoi}>
                        <img src={"https://zenodo.org/badge/DOI/" + this.state.data.zenodoDoi + ".svg"} alt={this.state.data.zenodoDoi}/>
                    </a>
                </Col>
            ):null}
        </Row>
        <Row justify="center">
            <Col xs={24} md={16}>
                <img className="img-fluid" property={this.state.context.image} src={this.state.data.image} alt="" />
            </Col>
        </Row>
        <Divider></Divider>
        {Object.keys(this.state.data).includes('abstract') ?(
            <>
            <Title level={3}>
                Description:
            </Title>
            <Paragraph className="text-justify"  property={this.state.context.abstract}>
                {this.state.data.abstract}
            </Paragraph>
            </>
        ):''}
        <Divider></Divider>
        { Object.keys(this.state.data).includes('author')?(
            <>
            <Row>
                <Col>
                    <Title level={3}>Developers:</Title>
                </Col>
            </Row>
            <MemberList size="xsmall" list={this.state.data.author.Person}></MemberList>
            <Divider></Divider>
            </>
            ):''}        
        {
                    Object.keys(this.state.data).includes('exampleOfWork')?(
                        <>
                        <List 
                        header={<Title level={3}>Publications:</Title>}
                        dataSource={this.state.data.exampleOfWork.Article}
                        renderItem={(item) => (
                            <List.Item>
                            <a property={this.state.context.exampleOfWork} href={"/article/" + item.code}>
                                <span property={this.state.context.name}>
                                    {item.name}
                                </span>
                            </a>
                            </List.Item>
                        )}
                        />
                        {Object.keys(this.state.data).includes('award')?<Divider></Divider>:''}
                        </>
                    ):''
                }
                {
                    Object.keys(this.state.data).includes('award')?(
                        <>
                        <List 
                        header={<Title level={3}>Awards:</Title>}
                        dataSource={this.state.data.award.award}
                        renderItem={(item) => (
                            <List.Item>
                            <a target="_blank"  rel="noopener noreferrer"  property={this.state.context.award} href={item.url}>
                               {item.name}
                            </a>
                            </List.Item>
                        )}
                        />
                        </>
                    ):''           
                }                
        </div>
        )
    }
    minCard = () => {
        return(
            <Card
            type="inner"
            resource={this.state.data.id}
            typeof={this.state.context.SoftwareSourceCode}
            className="shadow toolCard"
            actions={[
                <a href={this.state.data.codeRepository} target="_blank" rel="noopener noreferrer" property={this.state.context.codeRepository}>
                     <GithubOutlined/>
                 </a>,
                 <a href={"/tool/" + this.state.data.code}>
                     Learn More
                 </a>
             ]}>
                 <Row>
                     <Col span={24} className="text-center">
                         <img className="img-fluid toolCardImage" property={this.state.context.image} src={this.state.data.image} alt="" />
                     </Col>
                 </Row>
                 <Row>
                     <Col>
                         <Title level={3}  property={this.state.context.name}>
                                 {this.state.data.name}
                         </Title>                
                     </Col>
                 </Row>
                 <Row>
                     <Col>
                         <Paragraph  property={this.state.context.about}>
                                {this.state.data.about}
                         </Paragraph>
                     </Col>
                 </Row>
             </Card>            
        )
    }
       
    }

    
