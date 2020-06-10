import React from 'react'
import {Card, Row, Col, Typography, Avatar, Tooltip, Divider, Button} from 'antd'
import { getArticle } from '../../requests/virtuoso';
import {FiExternalLink} from 'react-icons/fi'
import {FaAnchor} from 'react-icons/fa'
import ToolList from '../Tools/ToolList'
const {Title} = Typography
const {Text} = Typography
const {Paragraph} = Typography
const {Meta} = Card

const createId = (text) => {
    return text.toString().replace(/([ ])+/g, '_')
}
const initials = (name) => {
    let words = name.toString().split(' ')
    let result = ""
    words.map((val) => {
        result += val[0]
    })
    return result
}
export default class ArticleCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data:{},
            context:{}
        }
    }
    
    async getArticleData(){
        const response = await getArticle(this.props.code);
        let data = await response.data
        if(Object.keys(data).includes('author')){
            const sortedAuthors = await new Array(data.author.position.length)
            await data.author.position.map((pos, idx) => {
                sortedAuthors[pos -1] = data.author.Person[idx]
            })
            data.author.Person = sortedAuthors
        }
        this.setState({data:data, context:response.context})

    }
    async componentDidMount(){
        if(Object.keys(this.state.data).length === 0){
            await this.getArticleData()
        }    
    }
    async componentDidUpdate(){
        if(Object.keys(this.state.data).length === 0){
            await this.getArticleData()
        }
    }
    render(){
        return(
            Object.keys(this.state.data).length !== 0?(
                this.props.size === "large" ?(
                    this.large()
                ):this.props.size === "small" ?(
                    this.small()
                ):(
                    this.page()
                )
            ):''

        )
    }
    small = () => {
        return(
            <Col xs={24} md={12} lg={8}>
            <h1>Small Card</h1>
            </Col>
        )
    }
    page = () => {
        return(
        <span                     
        source={this.state.data.id}
        typeof={this.state.context.Article}>

            <Row gutter={[8,8]} align="top">
                <Col>
                <span property={this.state.context·name}>
                    <Title level={2}>
                        {this.state.data.name}
                    </Title>
                </span>
                </Col>
            </Row>
            <Row align="top" gutter={[8,8]}>
                <Col>
                <Text level={4} strong>
                    Published at: 
                </Text>
                </Col>
                <Col>
                <Text level={4}>
                <a property={this.state.context.Event} href={this.state.data.Event}>{this.state.data.eventName}</a>

                </Text>
                </Col>
            </Row>
            <Row className="py-2">
                <Col>
                    <Button type="primary" href={this.state.data.url}>Read the paper</Button>
                </Col>
            </Row>     
            <Divider></Divider>       
            { Object.keys(this.state.data).includes('author')?(
            <>
            <Row>
                <Col>
                    <Title level={4}>Authors:</Title>
                </Col>
            </Row>
            <Row gutter={[16,16]}>
                            {this.state.data.author.Person.map((person, idx) => {
                            //const person = this.state.data.author.Person[pos - 1]
                            const url= Object.keys(person).includes('memberOf') && person.memberOf.includes("OEG") ? person.code:""
                            return(
                            <span property={this.state.context.author}>
                            <Col 
                            key={idx}
                            className="text-center"
                            source={person.id}
                            typeof={this.state.context.Person}
                            >
                                <Row justify="center">
                                    <Col>
                                    <a href={url.length !== 0 ?("/member/" + url):person.url}>
                                    <Avatar className={url.length !== 0?"hoverEffect":""} src={Object.keys(person).includes('image') ? person.image:''} size={100}>
                                        {initials(person.name)}
                                    </Avatar>
                                    </a>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col>
                                        <Text>
                                            <a className={url.length === 0? "text-dark":""} href={url.length !== 0 ?("/member/" + url):"#"}>
                                                <span property={this.state.context.name}>
                                                {person.name}
                                                </span>
                                            </a>
                                        </Text>
                                    </Col>
                                </Row>
                            </Col>
                            </span>
                            )
                            })}
            </Row>
            <Divider></Divider>
            </>
            ):''}
            {
                Object.keys(this.state.data).includes('workExample') ?(
                    <>
                    <Row>
                        <Col>
                            <Title level={4}>Proofs of Concept: </Title>
                        </Col>
                    </Row>
                    <span property={this.state.context.workExample}>
                    <ToolList tools={this.state.data.workExample.SoftwareSourceCode}/>
                    </span>                    
                    <Divider></Divider>
                    </>
                ):''
            }
        </span>
        )
    }
    large = () => {
        let actions = [
            <a property={this.state.context.url} target="_blank" rel="noopener noreferrer" href={this.state.data.url}>
            Read the paper
            <span className="badge"><FiExternalLink key="read" /></span>
            </a>
        ]
        const learnMore = Object.keys(this.state.data).includes('workExample') || Object.keys(this.state.data).includes('award');
        const articlePage = (
            <a property={this.state.context.url} href={"/article/" + this.state.data.code}>
                Learn more
            </a>
        )
        if(learnMore)
            actions.push(articlePage)
        return(
            <Col span={24}>
                    <Card
                    source={this.state.data.id}
                    typeof={this.state.context.Article}
                    id={createId(this.state.data.name)}
                    className="shadow"
                    actions={actions}
                    >
                        <Row align="middle" justify="space-between">
                            <Col>
                                <Title level={4}>
                                <>
                                <span property={this.state.context.name}>{this.state.data.name}</span>
                                </>
                                </Title>                            
                            </Col>
                            <Col>
                            <span property={this.state.context.datePublished}>
                                <Text>
                                    {this.state.data.datePublished.getFullYear()}
                                </Text>
                            </span>
                            </Col>
                        </Row>
                        <Row gutter={[8,8]}>
                            <Col>
                                <Text>
                                    Event: 
                                </Text>
                            </Col>
                            <Col>
                            <a property={this.state.context.Event} href={this.state.data.Event}>{this.state.data.eventName}</a>
                            </Col>
                        </Row>
                        { Object.keys(this.state.data).includes('author')?(
                        <Row gutter={[5,5]}>
                            {this.state.data.author.Person.map((person, idx) => {
                            const url= Object.keys(person).includes('memberOf') && person.memberOf.includes("OEG") ? person.code:""
                            return(
                            <span property={this.state.context.author}>
                            <Col key={idx}
                            source={person.id}
                            typeof={this.state.context.Person}
                            >
                                <Tooltip title={<span property={this.state.context.name}>{person.name}</span>} placement="bottom">
                                <a href={url.length !== 0 ?("/member/" + url):person.url}>
                                    <Avatar className={url.length !== 0?"hoverEffect":""}
                                    src={Object.keys(person).includes('image') ? person.image:''}
                                    size="lperson.urle"
                                    property={Object.keys(person).includes('image')? this.state.context.image:''}
                                    >
                                        {initials(person.name)}
                                    </Avatar>
                                </a>
                                </Tooltip>                    
                            </Col>
                            </span>
                            )
                            })}
                        </Row>
                        ):''}
                    </Card>
                </Col>

         )
    }
}