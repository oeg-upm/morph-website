import React from 'react'
import {Card, Row, Col, Typography, Avatar, Tooltip, Divider} from 'antd'
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
        <span property={this.state.context.Article}>
            <Row gutter={[8,8]} align="middle">
                <Col>
                <span property={this.state.context·name}>
                    <Title level={2}>
                        {this.state.data.name}
                    </Title>
                </span>
                <span property={this.state.context.datePublished}>
                    <Text strong>
                        {this.state.data.datePublished.getFullYear()}
                    </Text>
                </span>
                </Col>
            </Row>
            <Row align="top" gutter={[8,8]}>
                <Col>
                <Title level={4}>
                    Published at: 
                </Title>
                </Col>
                <Col>
                <Title level={4}>
                <a property={this.state.context.Event} href={this.state.data.Event}>{this.state.data.eventName}</a>

                </Title>
                </Col>
            </Row>
            <Row>
                <Col>
                <Text strong>
                <a href={this.state.data.url}>Read the paper</a>
                </Text>
                </Col>
            </Row>
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
                            const url= Object.keys(person).includes('memberOf') && person.memberOf == "OEG" ? person.name:""
                            return(
                            <Col key={idx} className="text-center">
                                <Row justify="center">
                                    <Col>
                                    <a href={url.length !== 0 ?("/member/" + url):"#"}>
                                    <span property={this.state.context.Person}>
                                    <Avatar className={url.length !== 0?"hoverEffect":""} src={Object.keys(person).includes('image') ? person.image:''} size={100}>
                                        {initials(person.name)}
                                    </Avatar>
                                    </span>
                                    </a>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col>
                                    <span property={this.state.context.name}>
                                        <Text>
                                            <a className={url.length === 0? "text-dark":""} href={url.length !== 0 ?("/member/" + url):"#"}>
                                                {person.name}
                                            </a>
                                        </Text>
                                    </span>
                                    </Col>
                                </Row>
                            </Col>
                            )
                            })}
            </Row>
            </>
            ):''}
            <Row>
                <Col>
                    <Title level={4}>Abstract:</Title>
                    <span property={this.state.context.abstract}>
                        <Paragraph className="text-justify">
                            {this.state.data.abstract}
                        </Paragraph>
                    </span>
                </Col>
            </Row>
            <Divider></Divider>
            {
                Object.keys(this.state.data).includes('exampleOfWork') ?(
                    <>
                    <Row>
                        <Col>
                            <Title level={4}>Proofs of Concept: </Title>
                        </Col>
                    </Row>
                    <span property={this.state.context.exampleOfWork}>
                    <ToolList tools={this.state.data.exampleOfWork.SoftwareSourceCode}/>
                    </span>                    
                    </>
                ):''
            }
        </span>
        )
    }
    large = () => {
        return(
            <Col span={24}>
                    <Card
                    id={createId(this.state.data.name)}
                    className="shadow"
                    actions={[
                        <a property={this.state.context.Article} href={"/article/" + this.state.data.code}>
                        Read more
                        <span className="badge"><FiExternalLink key="read" /></span>
                        </a>
                    ]}
                    >
                        <Row align="middle" justify="space-between">
                            <Col>
                                <Title level={4}>
                                <>
                                <span property={this.state.context.name}>{this.state.data.name}</span>
                                <span className="badge"><a href={ document.location.href.split("#")[0] + "#" + createId(this.state.data.name)}> <FaAnchor/></a></span>
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
                        <Row>
                            <Col>
                            <a property={this.state.context.Event} href={this.state.data.Event}>{this.state.data.eventName}</a>
                            </Col>
                        </Row>
                        <span property={this.state.context.abstract}>
                        <Text strong>Abstract: </Text>
                        <Paragraph 
                        className="text-justify"
                        ellipsis={{
                        rows: 3,
                        expandable: true
                        }}>
                            {this.state.data.abstract}
                        </Paragraph>
                        </span>
                        { Object.keys(this.state.data).includes('author')?(
                        <Row gutter={[5,5]}>
                            {this.state.data.author.Person.map((person, idx) => {
                            const url= Object.keys(person).includes('memberOf') && person.memberOf == "OEG" ? person.name:""
                            return(
                            <Col key={idx}>
                                <Tooltip title={person.name} placement="bottom">
                                <a href={url.length !== 0 ?("/member/" + url):"#"}>
                                    <span property={this.state.context.Person}>
                                    <Avatar className={url.length !== 0?"hoverEffect":""} src={Object.keys(person).includes('image') ? person.image:''} size="large">
                                        {initials(person.name)}
                                    </Avatar>
                                    </span>
                                </a>
                                </Tooltip>                    
                            </Col>
                            )
                            })}
                        </Row>
                        ):''}
                    </Card>
                </Col>

         )
    }
}