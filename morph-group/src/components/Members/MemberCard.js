import React from 'react'
import {TwitterOutlined, LinkedinFilled, GithubOutlined, MailOutlined} from '@ant-design/icons'
import {FaAward} from 'react-icons/fa'
import {RiArticleLine} from 'react-icons/ri'
import {BsGear} from 'react-icons/bs'
import {Row, Col, Avatar, Typography, List, Divider} from 'antd'
import {getMemberInfo} from '../../requests/virtuoso'
import ToolList from '../Tools/ToolList'
const {Text, Title, Paragraph} = Typography
export default class Member extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:{},
            context:{},
            socialMedia:false
        }
    }
    async componentDidMount(){
        await this.getMember()
    }
    async componentDidUpdate(){
        if(Object.keys(this.state.data).length === 0){
            await this.getMember()
        }
    }
    async getMember(){
        const response = await getMemberInfo(this.props.code)
        const socialMedia = await !(!Object.keys(response.data).includes('linkedin') && 
        !Object.keys(response.data).includes('github') &&
        !Object.keys(response.data).includes('twitter') &&
        !Object.keys(response.data).includes('email') );
        await this.setState({data:response.data, context:response.context, socialMedia:socialMedia})
    }
    render(){
        return(
            this.props.size === "small"?(
                this.small()
            ):(this.page())
        )

        }
    social = () => {
        return (
            <>
                {Object.keys(this.state.data).includes('twitter') ? (
                <Col className="text-center">
                    <a property={this.state.context.twitter} target="_blank" href={"https://twitter.com/" + this.state.data.twitter}>
                    <TwitterOutlined />
                    </a>
                </Col>
                ):''}
                {Object.keys(this.state.data).includes('linkedin') ? (
                <Col className="text-center">
                    <a property={this.state.context.linkedin} target="_blank" href={this.state.data.linkedin}>
                    <LinkedinFilled />
                    </a>
                </Col>
                ):''}
                {Object.keys(this.state.data).includes('github') ? (
                <Col className="text-center">
                    <a target="_blank" property={this.state.context.github} href={"https://github.com/" + this.state.data.github}>
                    <GithubOutlined />
                    </a>
                </Col>
                ):''}
            </>
    )}    
    page = () => {
        return(
            <>
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
                                    <Row align="center" gutter={[8]}>
                                        <Col>
                                            <Text strong>Social:</Text>                                         
                                        </Col>
                                    {this.social()}
                                    </Row>
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
            </>
        )
    }
    small = () => {
        return(
            <>
            <Row justify="center">
                <Col>
                <a property={this.state.context.image} href={"/member/" + this.state.data.name}>
                    <Avatar className="hoverEffect" size={150} src={this.state.data.image}></Avatar>
                </a>
                </Col>
            </Row>
            <Row justify="center">
                <Col className="text-center">
                    <a property={this.state.context.name} href={"/member/" + this.state.data.name}>
                        {this.state.data.name}
                    </a>
                </Col>
            </Row>        
            <Row justify="center" className="mt-1">
                    <Col className="">
                        <span property={this.state.context.jobTitle}>
                        <Text>
                            {this.state.data.jobTitle}
                        </Text>
                        </span>
                    </Col>
            </Row>        
            <Row justify="center" gutter={[8,8]}>
                    {
                        this.social()
                    }
                    {Object.keys(this.state.data).includes('email') ? (
                    <Col className="text-center">
                        <a target="_blank" property={this.state.context.email} href={"mailto:" + this.state.data.email}>
                        <MailOutlined />
                        </a>
                    </Col>                 
                    ):''}
                    {this.state.socialMedia === false ? (
                        <Col>
                        <MailOutlined style={{opacity:0}} />
                        </Col>
                    ):''}  
            </Row>        
            </>
        )
    }
}
