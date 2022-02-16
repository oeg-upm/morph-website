import React from 'react'
import {Row, Col, Divider, Typography} from 'antd' 

const {Text} = Typography;
export default function Footer(props){
    return(
        <>
        <Divider></Divider>
        <Row justify="space-between" className="py-2" align="bottom">
        <Col>
        <a target="_blank" rel="noopener noreferrer" href="https://oeg.fi.upm.es/">
            <img style={{height:100}} className="p-1 img-fluid" src="https://raw.githubusercontent.com/oeg-upm/websiteFooterLogos/master/images/oeg.jpg" alt=""/>
        </a>
        </Col>
        <Col>
        <a target="_blank" rel="noopener noreferrer" href="http://fi.upm.es/">
            <img style={{height:100}} className="p-1 img-fluid" src="https://raw.githubusercontent.com/oeg-upm/websiteFooterLogos/master/images/fiLogo.png" alt=""/>
        </a>
        </Col>
        <Col>
        <a target="_blank" rel="noopener noreferrer" href="https://www.upm.es/">
            <img style={{height:100}} className="p-1 img-fluid" src="https://raw.githubusercontent.com/oeg-upm/websiteFooterLogos/master/images/upm.png" alt=""/>
        </a>
        </Col>
        </Row>
        <Row justify="center p-3">
            <Col>
                <Text>Powered by <a href="https://oeg.fi.upm.es/">Ontology Engineering Group</a>. Source code freely available on <a href="https://github.com/oeg-upm/morph-website">GitHub</a></Text>            
            </Col>
        </Row>
        </>
    )
}
