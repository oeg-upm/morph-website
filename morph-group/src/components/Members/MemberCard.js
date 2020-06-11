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
        const response = await getMemberInfo(this.props.code).catch((err) => console.log(err))
        const socialMedia = await !(!Object.keys(response.data.person).includes("indentifier") &&
        !Object.keys(response.data.person).includes('email') );
        await this.setState({data:response.data, context:response.context, socialMedia:socialMedia})
    }
    render(){
        console.log(this.props.code)
        console.log(this.state.data)
        return(
            Object.keys(this.state.data).length !== 0 ?(
            <>
            {this.props.size === "small"?(
                this.small()
            ):(this.page())}
            </>
        ):'')

        }
    social = () => {
        return (
            <>
                {Object.keys(this.state.data.person).includes('identifier') ? (
                    this.state.data.person.identifier.map((identifier) => {
                        return(
                        (identifier.includes("twitter.com"))?(
                                <Col className="text-center">
                                <a property={this.state.context.url} target="_blank" rel="noopener noreferrer" href={identifier}>
                                <TwitterOutlined />
                                </a>
                                </Col>
                         ):(identifier.includes("github.com"))?(
                                <Col className="text-center">
                                <a target="_blank" rel="noopener noreferrer" property={this.state.context.url} href={identifier}>
                                <GithubOutlined />
                                </a>
                                </Col>
                            ):(
                                <Col className="text-center">
                                <a property={this.state.context.url} target="_blank" rel="noopener noreferrer" href={identifier}>
                                <LinkedinFilled />
                                </a>
                                </Col>                                
                            )
                        )})):''}
            </>
    )}    
    page = () => {
        console.log(this.state.data)
        return(
            <>
            <div resource={this.state.data.person.id} typeof={this.state.context.Person}>
                <Row align="middle" gutter={[16,16]}>
                    <Col xs={24} md={12}>
                        <List
                            header={<Text strong>{this.state.data.person.name}</Text>}
                        >
                            <List.Item>
                                <Text strong>Role: </Text> <span property={this.state.context.jobTitle}>{this.state.data.person.jobTitle}</span>
                            </List.Item>

                            {Object.keys(this.state.data.person).includes('email') ?(
                            <List.Item>
                                <Text strong>Email: <span> </span>                               
                                    <a property={this.state.context.url} href={"mailto:" + this.state.data.person.email}>
                                        <span  property={this.state.context.email} >
                                            {this.state.data.person.email}
                                        </span>
                                    </a>
                                </Text> 
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
                                <Text strong> Publications: </Text> <span>{Object.keys(this.state.data).includes('relatedTo') && Object.keys(this.state.data.relatedTo).includes('Article')?this.state.data.relatedTo.Article.length:0} <RiArticleLine/></span>
                            </List.Item>
                            <List.Item>
                                <Text strong> Awards: </Text> <span>{Object.keys(this.state.data).includes('relatedTo') && Object.keys(this.state.data.relatedTo).includes('award')?this.state.data.relatedTo.award.length:0} <FaAward/></span>
                            </List.Item>
                            <List.Item>
                                <Text strong> Tools: </Text> <span>{Object.keys(this.state.data).includes('relatedTo') && Object.keys(this.state.data.relatedTo).includes('SoftwareSourceCode')?this.state.data.relatedTo.SoftwareSourceCode.length:0} <BsGear/></span>
                            </List.Item>                                                        

                        </List>
                    </Col>
                    <Col xs={24} md={12}>
                    <Row gutter={[16,16]}>
                    <Col>
                        <Avatar shape="square" property={this.state.context.image} src={this.state.data.person.image} size={200}/>
                    </Col>
                </Row>
                <Row>
                <Col>
                        <span property={this.state.context.name}>
                            <Title level={2}>
                                {this.state.data.person.name}
                            </Title>
                        </span>
                        <span property={this.state.context.description}>
                            <Paragraph className="text-justify">
                                {this.state.data.person.description}
                            </Paragraph>
                        </span>
                    </Col>                    
                    </Row>                    
                    </Col>                    
                </Row>
                <Divider/>
                {
                    Object.keys(this.state.data).includes('relatedTo') && Object.keys(this.state.data.relatedTo).includes('award')?(
                        <div>
                        <List 
                        header={<Title level={3}>Awards:</Title>}
                        dataSource={this.state.data.relatedTo.award}
                        renderItem={(item) => (
                            <List.Item>
                                <span property={this.state.context.award}>
                                    {item.name}
                                </span>
                            </List.Item>
                        )}
                        />
                        <Divider></Divider>            
                        </div>
                    ):''           
                }                
                </div>
                {Object.keys(this.state.data).includes('relatedTo')?(
                <div>
                {
                    Object.keys(this.state.data.relatedTo).includes('Article')?(
                        <>
                        <List 
                        header={<Title level={3}>Publications:</Title>}
                        dataSource={this.state.data.relatedTo.Article}
                        renderItem={(item) => (
                            <List.Item>
                            <div resource={item.id} typeof={this.state.context.Article}>
                            <a property={this.state.context.url} href={"/article/" + item.code}>
                                <span property={this.state.context.name}>
                                {item.name}
                                </span>
                            </a>
                            </div>
                            </List.Item>
                        )}
                        />
                        <Divider></Divider>            
                        </>
                    ):''
                }
                {
                    Object.keys(this.state.data.relatedTo).includes('SoftwareSourceCode')?(
                        <div>
                        <Title level={3}>Tools:</Title>
                        <ToolList
                        tools={this.state.data.relatedTo.SoftwareSourceCode}/>
                        </div>
                    ):''
                }
            </div>
            
                ):''}

            </>
        )
    }
    small = () => {
        return(
            <div resource={this.state.data.person.id} typeof={this.state.context.Person}>
            <Row justify="center">
                <Col>
                <a href={"/member/" + this.state.data.person.code}>
                    <Avatar
                    className="hoverEffect"
                    size={150}
                    src={this.state.data.person.image}
                    property={this.state.context.image}
                    ></Avatar>
                </a>
                </Col>
            </Row>
            <Row justify="center">
                <Col className="text-center">
                    <a href={"/member/" + this.state.data.person.code} typeof={this.state.context.Person} resource={this.state.data.person.id}>
                        <span property={this.state.context.name}>
                        {this.state.data.person.name}
                        </span>
                    </a>
                </Col>
            </Row>
            {Object.keys(this.state.data.person).includes('email') ? (
                <Row justify="center" className="">
                    <Col className="text-center">
                        <a target="_blank" rel="noopener noreferrer" href={"mailto:" + this.state.data.person.email} typeof={this.state.context.Person} resource={this.state.data.person.id}>
                            <span property={this.state.context.email} >
                                {this.state.data.person.email}
                            </span>
                        </a>
                    </Col> 
                </Row>        
            ):''}                    
            <Row justify="center" className="mt-1">
                    <Col className="">
                        <Text>
                        <span property={this.state.context.jobTitle}>
                            {this.state.data.person.jobTitle}
                        </span>
                        </Text>
                    </Col>
            </Row>
            <Row justify="center" gutter={[8,8]}>
                    {
                        this.social()
                    }
                
                    {this.state.socialMedia === false ? (
                        <Col>
                        <MailOutlined style={{opacity:0}} />
                        </Col>
                    ):''}  
            </Row>        
            </div>
        )
    }
}
