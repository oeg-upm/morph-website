import React from 'react'
import {Card, Row, Col, Typography, Avatar, Tooltip} from 'antd'
import { getArticle } from '../../requests/virtuoso';
import {FiExternalLink} from 'react-icons/fi'
import {FaAnchor} from 'react-icons/fa'
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
        this.setState({data:response.data, context:response.context})

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
        console.log(this.state.data)
        return(
            Object.keys(this.state.data).length !== 0?(
                this.props.size === "large" ?(
                    this.large()
                ):this.props.size === "small" ?(
                    this.small()
                ):(
                    <h1>PAGE</h1>
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
    large = () => {
        return(
            <Col span={24}>
                    <Card
                    id={createId(this.state.data.name)}
                    className=""
                    actions={[
                        <a property={this.state.context.paperLink} href={this.state.data.paperLink}>
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
                                <span className="badge"><a href={"/#" + createId(this.state.data.name)}> <FaAnchor/></a></span>
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
                            //const person = this.state.data.author.Person[pos - 1] 
                            return(
                            <Col>
                                <Tooltip title={person.name} placement="bottom">
                                <span property={this.state.context.Person}>
                                <Avatar src={Object.keys(person).includes('image') ? person.image:''} size="large">
                                    {initials(person.name)}
                                </Avatar>
                                </span>
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