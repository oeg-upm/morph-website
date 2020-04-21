import React from 'react'
import {Row, Col, Typography} from 'antd'
import Layout from '../components/Layout'
import {getMemberInfo} from '../requests/virtuoso'

const {Title} = Typography
const {Text} = Typography
const {Paragraph} = Typography


export default class Member extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:{},
            context:{}
        }
    }
    componentDidMount(){
        const {member} = this.props.match.params
        getMemberInfo(member).then((response) => {
            this.setState({data:response.data, context:response.context})
        })
    }
    render(){
        return(
            <Layout>
                <Row>
                    <Col span={12}>
                        <span property={this.state.context.image}>
                            <img src={this.state.data.image} alt="" className="img-fluid"/>
                        </span>
                    </Col>
                    <Col span={12}>
                        <span property={this.state.context.name}>
                            <Title level={2}>
                                {this.state.data.name}
                            </Title>
                        </span>
                        <span property={this.state.context.description}>
                            <Paragraph className="text-justify">
                                {this.state.data.description}
                            </Paragraph>
                        </span>
                    </Col>
                </Row>
            </Layout>
        )
    }
}