import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import {Row, Col, Typography, Statistic, Divider, Table, Button} from 'antd';
import {queryMetrics} from '../../data/data'
const {Title} = Typography;
const totalElements = {
    gtfs:{
        columns:74,
        sources:10
    },
    bio2rdf:{
        sources:12,
        columns:164
    },
    bsbm:{
        sources:10,
        columns:78
    }
}
const executiontimesColumns = [
    {
        title:'Selection',
        dataIndex:'selection',
        key:'selection',
        render: val => (val === 0?'-':val)
    },
    {
        title:'Normalization',
        dataIndex:'normalization',
        key:'normalization',
        render: val => (val === 0?'-':val)
    },
    {
        title:'Data Preparation',
        dataIndex:'dataPreparation',
        key:'dataPreparation',
        render: val => (val === 0?'-':val)
    },
    {
        title:'Schema Creation and Load',
        dataIndex:'schemaCreationLoad',
        key:'schemaCreationLoad',
        render: val => (val === 0?'-':val)
    },
    {
        title:'Mapping Translation',
        dataIndex:'mappingTranslation',
        key:'mappingTranslation',
        render: val => (val === 0?'-':val)
    },
    {
        title:'Total',
        dataIndex:'total',
        key:'total',
        render: val => (val === 0?'-':val)
    }, 
    {
        title:'Size',
        dataIndex:'size',
        key:'size',
        render: val => (val === 0?'-':val)
    }   
]
export default function QueryChart(props){
    let foreignKeys = 0;
    let primaryKeys = 0;
    let substitutions = queryMetrics[props.dataset][props.query].substitution;
    let dataTypes = queryMetrics[props.dataset][props.query].datatype;
    let totalSources = totalElements[props.dataset].sources;
    let totalColumns = totalElements[props.dataset].columns;
    let selectedColumns = 0;
    let executionTimes = Object.keys(queryMetrics[props.dataset][props.query]).includes('executiontimes') ? queryMetrics[props.dataset][props.query]["executiontimes"]:[];
    let selectedSources = props.csvw.tables.length;
    props.csvw.tables.map((table) => {
        if(Object.keys(table.tableSchema).includes("primaryKey") && table.tableSchema.primaryKey.length != 0){
            primaryKeys++;
        }
        selectedColumns += table.filteredRowTitles.length;
        let fkArray = Object.keys(table.tableSchema).includes("foreignKeys") ? table.tableSchema.foreignKeys:[]
        fkArray = Object.keys(table.tableSchema).includes("foreignKey") ?[...fkArray,...table.tableSchema.foreignKey]:fkArray
        foreignKeys += fkArray.length
    });
    let data = [
        {
            labels: [
                'Total Columns',
                'Selected Columns',
          ],
            datasets: [{
                data: [totalColumns, selectedColumns],
                backgroundColor: [
                '#0163c0',
                '#ffc100',
                
                ],
                hoverBackgroundColor: [
                '#0163c0',
                '#ffc100',
                
                ]
            }]
        },
        {
            labels: [
                'Sources',
                'Selected Sources',
          ],
            datasets: [{
                data: [totalSources, selectedSources],
                backgroundColor: [
                '#0163c0',
                '#ffc100',
                
                ],
                hoverBackgroundColor: [
                '#0163c0',
                '#ffc100',
                
                ]
            }]        
        }
    ]    
    return(
        <>
        <Row  gutter={32} style={{}}>
            <Col>
            <Title level={3}>Applied Constraints</Title>
            </Col>
        </Row>

        <div style={{textAlign:'center', marginTop:32}}>
        <Row  gutter={32} justify="center" style={{}}>
                <Col>
                <Statistic title={<Title level={4} type="">Primary Keys</Title>} value={primaryKeys === 1 && selectedSources === 1 ? 0:primaryKeys} />
                </Col>
                <Col>
                <Statistic title={<Title level={4} type="">Foreign Keys</Title>} value={foreignKeys} />
                </Col>
                <Col>
                <Statistic title={<Title level={4} type="">Substitutions</Title>} value={substitutions} />
                </Col>
                <Col>
                <Statistic title={<Title level={4} type="">Datatypes</Title>} value={dataTypes} />
                </Col>            
            </Row>
            <Row style={{marginTop:16}}>
                <Col span={24}>
                <Divider/>
                </Col>
            </Row>
            <Row  justify="center" style={{marginTop:16}}>
                <Col>
                <Doughnut data={data[1]}/>
                <Title level={4} type="">Selected Sources</Title>
                </Col>                  
                <Col>
                <Pie data={data[0]}/>
                <Title level={4} type="">Selected Columns</Title>
                </Col>              
            </Row>
        </div>
        {executionTimes.length > 0 ?(
            <Table columns={executiontimesColumns} dataSource={queryMetrics[props.dataset][props.query].executiontimes} />
        ):null}
    </>
    )
}