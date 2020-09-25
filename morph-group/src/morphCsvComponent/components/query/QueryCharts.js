import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import {Row, Col, Typography, Statistic, Divider, Space, Button} from 'antd';
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
export default function QueryChart(props){
    let foreignKeys = 0;
    let primaryKeys = 0;
    let subtitutions = 0;
    let dataTypes = [];
    let totalSources = totalElements[props.dataset].sources;
    let totalColumns = totalElements[props.dataset].columns;
    let selectedColumns = 0;
    let selectedSources = props.csvw.tables.length;
    props.csvw.tables.map((table) => {
        if(Object.keys(table.tableSchema).includes("primaryKey") && table.tableSchema.primaryKey.length != 0){
            primaryKeys++;
        }
        selectedColumns += table.filteredRowTitles.length;
        foreignKeys += Object.keys(table.tableSchema).includes("foreignKeys") ? table.tableSchema.foreignKeys.length:0;
        if(Object.keys(table).includes('columns')){
            table.columns.map((col) => {
                if(Object.keys(col).includes('datatype'))
                    dataTypes.push(col.datatype)
            })
        }
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
                <Statistic title={<Title level={4} type="">Substitutions</Title>} value={subtitutions} />
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
    </>
    )
}