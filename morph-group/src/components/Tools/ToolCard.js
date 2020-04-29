import React from 'react'
import {Card, Button, Row, Col, Typography} from 'antd'
import {ShareAltOutlined, GithubOutlined} from '@ant-design/icons'
import {getTool} from '../../requests/virtuoso'

const {Meta} = Card
const {Title, Text, Paragraph} = Typography
export default class ToolCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:{},
            context:{}
        }
    }
    async getData(){
        const response = await getTool(this.props.data.code)
        console.log(response.data)
        this.setState({data:response.data, context:response.context})
    }
    async componentDidMount(){
        if(Object.keys(this.state.data).length === 0)
            await this.getData()
    }
    async componentDidUpdate(){
        if(Object.keys(this.state.data).length === 0)
            await this.getData()
        else
            console.log(this.state.data)
    }
    render(){
            return(
                this.minCard()

            )
        }

    minCard = () => {
        return(
            <Card actions={[
                <a href={this.state.data.codeRepository} property={this.state.context.codeRepository}>
                     <GithubOutlined/>
                 </a>,
                 <a href="#">
                     Read More
                 </a>
             ]}>
                 <Row>
                     <Col>
                         <img className="img-fluid" property={this.state.context.image} src={this.state.data.image} alt="" />
                     </Col>
                 </Row>
                 <Row>
                     <Col>
                         <Title level={3}>
                             <span property={this.state.context.name}>
                                 {this.state.data.name}
                             </span>
                         </Title>                
                     </Col>
                 </Row>
                 <Row>
                     <Col>
                     <span property={this.state.context.about}>
                         <Paragraph>
                             {this.state.data.about}
                         </Paragraph>
                     </span>
                     </Col>
                 </Row>
             </Card>            
        )
    }
       
    }

    
