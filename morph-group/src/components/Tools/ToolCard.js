import React from 'react'
import {Card, Button, Row, Col, Typography} from 'antd'
import {ShareAltOutlined, GithubOutlined} from '@ant-design/icons'
import {getTool} from '../../requests/virtuoso'

const {Meta} = Card
const {Title, Text, Paragraph} = Typography
const minCard = (data, context) => {
    return(
        <Card actions={[
           <a href={data.codeRepository} property={context.codeRepository}>
                <GithubOutlined/>
            </a>,
            <a href="#">
                Read More
            </a>
        ]}>
            <Row>
                <Col>
                    <img className="img-fluid" property={context.image} src={data.image} alt="" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Title level={3}>
                        <span property={context.name}>
                            {data.name}
                        </span>
                    </Title>                
                </Col>
            </Row>
            <Row>
                <Col>
                <span property={context.about}>
                    <Paragraph>
                        {data.about}
                    </Paragraph>
                </span>
                </Col>
            </Row>
        </Card>
    )
}
export default class ToolCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:{},
            context:{}
        }
    }
    async componentDidMount(){
        const data = await getTool(this.props.data.code)
        this.setState({data:data, context:this.props.context})
    }
    render(){
        switch(this.props.size){
            default:
                return minCard(this.state.data, this.state.context)       
        }
    }

    
} 