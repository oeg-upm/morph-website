import React from 'react'
import {Row, Col, Typography, Avatar, List, Divider} from 'antd'
import Layout from '../components/Layout'
import {getMemberInfo} from '../requests/virtuoso'
import ToolList from '../components/Tools/ToolList'
import {TwitterOutlined, LinkedinFilled, GithubOutlined, MailOutlined} from '@ant-design/icons'
import {FaAward} from 'react-icons/fa'
import {RiArticleLine} from 'react-icons/ri'
import {BsGear} from 'react-icons/bs'
const {Title} = Typography
const {Text} = Typography
const {Paragraph} = Typography


export default class Member extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:{},
            context:{},
            socialMedia: false
        }
    }
    async componentDidMount(){
        const {member} = await this.props.match.params
        getMemberInfo(member).then(async (response) => {
            console.log(response.data[0])
            const socialMedia = await !(!Object.keys(response.data).includes('linkedin') &&
            !Object.keys(response.data).includes('github') &&
            !Object.keys(response.data).includes('twitter'))
            this.setState({data:response.data[0], context:response.context, socialMedia:socialMedia})
        })
    }
    social = () => {
        return (
        <Row gutter={[16]}>
                {Object.keys(this.state.data).includes('twitter') ? (
                <Col >
                    <a property={this.state.context.twitter} target="_blank" href={"https://twitter.com/" + this.state.data.twitter}>
                    <TwitterOutlined />
                    </a>
                </Col>
                ):''}
                {Object.keys(this.state.data).includes('linkedin') ? (
                <Col >
                    <a property={this.state.context.linkedin} target="_blank" href={this.state.data.linkedin}>
                    <LinkedinFilled />
                    </a>
                </Col>
                ):''}
                {Object.keys(this.state.data).includes('github') ? (
                <Col>
                    <a target="_blank" property={this.state.context.github} href={"https://github.com/" + this.state.data.github}>
                    <GithubOutlined />
                    </a>
                </Col>
                ):''}  
        </Row>
    )}
    render(){
        return(
            <Layout>
                <Row align="middle" gutter={[16,16]}>
                    <Col xs={24} md={12}>
                        <List
                            header={<Text strong>{this.state.data.name}</Text>}
                        >
                            <List.Item>
                                <Text strong>Role: </Text> {this.state.data.jobTitle}
                            </List.Item>
                            {Object.keys(this.state.data).includes('email') ?(
                            <List.Item>
                                <Text strong>Email: </Text> <a property={this.state.context.email} href={"mailto:" + this.state.data.email}>{this.state.data.email}</a>
                            </List.Item>
                            ):''
                            }
                            {this.state.socialMedia !== false?(
                                <List.Item>
                                    <Text strong>Social: {this.social()}</Text> 
                                </List.Item>
                            ):''
                            }
                            <List.Item>
                                <Text strong> Articles: </Text> <span>{Object.keys(this.state.data).includes('hasWrite')?this.state.data.hasWrite.Article.length:0} <RiArticleLine/></span>
                            </List.Item>
                            <List.Item>
                                <Text strong> Awards: </Text> <span>{Object.keys(this.state.data).includes('hasWon')?this.state.data.hasWon.award.length:0} <FaAward/></span>
                            </List.Item>
                            <List.Item>
                                <Text strong> Tools: </Text> <span>{Object.keys(this.state.data).includes('hasDevelop')?this.state.data.hasDevelop.SoftwareSourceCode.length:0} <BsGear/></span>
                            </List.Item>                                                        

                        </List>
                    </Col>
                    <Col xs={24} md={12}>
                    <Row gutter={[16,16]}>
                    <Col>
                        <span property={this.state.context.image}>
                            <Avatar shape="square" src={this.state.data.image} size={200}/>
                        </span>
                    </Col>
                </Row>
                <Row>
                <Col>
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
                    </Col>                    
                </Row>
                <Divider/>
                {
                    Object.keys(this.state.data).includes('hasWrite')?(
                        <Title level={3}>Has write:</Title>
                    ):''
                }
                                {
                    Object.keys(this.state.data).includes('hasWon')?(
                        <Title level={3}>Has won:</Title>
                    ):''
                }
                {
                    Object.keys(this.state.data).includes('hasDevelop')?(
                        <>
                        <Title level={3}>Has develop:</Title>
                        <ToolList context={this.state.context}
                        data={this.state.data.hasDevelop.SoftwareSourceCode}/>
                        </>
                    ):''
                }
            </Layout>
        )
    }
}