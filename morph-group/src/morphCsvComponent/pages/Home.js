import React from 'react'
import LayoutSider from '../components/general/Layout'
import {Row,Col,Divider, Typography} from 'antd'
import EvaluationCharts from '../components/home/EvaluationCharts'
import {evaluation} from '../data/data'
import Layout from '../../components/Layout'

const {Title, Paragraph} = Typography

export default function Home(props){
    console.log(evaluation)
    return(
        <Layout>
        <LayoutSider>
           <Row gutter={16} justify="center" align="top">
                <Col span={22}>
                    <Title>Morph-CSV</Title>
                    <Paragraph style={{textAlign:'justify'}}>
                        Morph-CSV is an open source tool for querying tabular data sources using SPARQL. 
                        It exploits the information from the query, RML+FnO mappings and CSVW metadata to enhance the performance and completeness of traditional OBDA systems (SPARQL-to-SQL translators). 
                        At this moment it can be embedded on top of any R2RML-compliant system at it has been tested over different benchmarks such as BSBM, Madrid-GTFS-Bench but also over real-use
                        cases such as querying the original data sources of the Bio2RDF project using different SPARQL-to-SQL engines such as Morph-RDB or Ontop.                        
                    </Paragraph>
                </Col>
            </Row>
            <Row justify="center">
            <Col span={22}>
                    <img className="img-fluid" src="https://morph.oeg.fi.upm.es/img/morph-csv.png" alt=""/>
                </Col>
            </Row>
            <Divider />                 

            <Row justify="center">
                <Col span={22}>
                    <Title level={2}>
                        Evaluation
                    </Title>
                    <Paragraph style={{textAlign:'justify'}}>
                    Ontology-Based Data Access (OBDA) has traditionally focused on providing a unified view of heterogeneous datasets (e.g., relational database, CSV, JSON), either by materializing integrated data into RDF or by performing on-the-fly integration via SPARQL-to-SQL query translation. In the specific case of tabular datasets comprised of several CSV or Excel files, query translation approaches have been applied taking as input a lightweight schema with table and column names, and considering each source as a single table that can be loaded into a relational database system (RDB). This naïve approach does not consider implicit constraints in this type of data, e.g., referential integrity among data sources, datatypes, or data integrity; We propose Morph-CSV, a framework that enforces constraints and can be used together with any SPARQL-to-SQL OBDA engine. Morph-CSV resorts to both a Constraints component and a set of operators that apply each type of constraint to the input with the aim of enhancing query completeness and performance. We evaluate Morph-CSV against a set of real-world open tabular datasets in the domain of the public transport; Morph-CSV is compared with existing approaches in terms of query result completeness and performance                        
                    </Paragraph>
                </Col>
            </Row>
            {/* GTFS */}
            <Row style={{marginTop:16}}>
                <Col>
                    <Title level={3}>GTFS-BECNH-MADRID</Title>
                </Col>
            </Row>
            <Row >
                <Col>
                    <Title level={4}>Execution Time</Title>
                </Col>
            </Row>            
            <Row gutter={[16,16]}>
            {
                Object.keys(evaluation.gtfs.sizes).map((size) => {
                    return(
                        <Col xs={24} md={12}>
                            <EvaluationCharts size={size} labels={evaluation.gtfs.mrdblabels} naive={evaluation.gtfs.sizes[size].execution.mrdb.naive} morphcsv={evaluation.gtfs.sizes[size].execution.mrdb.morphcsv}></EvaluationCharts>
                        </Col>
                    )
                })
            }
            </Row>  
            <Divider></Divider>            
            {/* BSBM */}
            <Row style={{marginTop:16}}>
                <Col>
                    <Title level={3}>BERLIN SPARQL BECNHMARK</Title>
                </Col>
            </Row>
            <Row >
                <Col>
                    <Title level={4}>Execution Time</Title>
                </Col>
            </Row>            
            <Row gutter={[16,16]}>
            {
                Object.keys(evaluation.bsbm.sizes).map((size) => {
                    return(
                        <Col xs={24} md={12}>
                            <EvaluationCharts size={size} labels={evaluation.bsbm.mrdblabels} naive={evaluation.bsbm.sizes[size].execution.mrdb.naive} morphcsv={evaluation.bsbm.sizes[size].execution.mrdb.morphcsv}></EvaluationCharts>
                        </Col>
                    )
                })
            }
            </Row>  
                                
        </LayoutSider>
        </Layout>
    )
}
