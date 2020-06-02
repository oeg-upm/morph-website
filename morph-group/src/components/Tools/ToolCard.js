import React from 'react'
import {Card, Button, Row, Col, Typography, Avatar, Divider, List} from 'antd'
import {ShareAltOutlined, GithubOutlined} from '@ant-design/icons'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import {getTool} from '../../requests/virtuoso'

const {Meta} = Card
const {Title, Text, Paragraph} = Typography

const initials = (name) => {
    let words = name.toString().split(' ')
    let result = ""
    words.map((val) => {
        result += val[0]
    })
    return result
} 
export default class ToolCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:{},
            context:{},
            abstract:""
        }
    }
    async getData(){
        const response = await getTool(this.props.code)
        if(Object.keys(response).length !== 0 ){
            await this.setState({data:response.data, context:response.context})
            if(Object.keys(response.data).includes('abstract')){
                const abstract = await axios.get(this.state.data.abstract).catch((err) => console.log(err))
                // console.log("Abstract")
                // console.log(abstract.data)
                this.setState({abstract:abstract.data})
            }
    }
        }

    async componentDidMount(){
        if(Object.keys(this.state.data).length === 0)
            await this.getData()
    }
    async componentDidUpdate(){
        if(Object.keys(this.state.data).length === 0)
            await this.getData()
    }
    render(){
            return(
                this.props.size === "small"?(
                    this.minCard()):(
                        this.page()
                    )

            )
        }
       
    page =() => {
        console.log(this.state.data)
        return(
    <div resource={this.state.data.id} typeof={this.state.context.SoftwareSourceCode}>
        <Row>
            <Col>
                <Title level={2}>
                    <span property={this.state.context.name}>
                        {this.state.data.name}
                    </span>
                </Title>
            </Col>
        </Row>
        <Title level={4}>
            Useful Links:
        </Title>
        <Row gutter={[16,16]} align="middle">
            <Col>
            <Button href={this.state.data.codeRepository} property={this.state.context.codeRepository}>
                Github Repository <GithubOutlined/>

            </Button>
            </Col>
            <Col>
                <a href={"https://doi.org/" + this.state.data.zenodoDoi}>
                    <img src={"https://zenodo.org/badge/DOI/" + this.state.data.zenodoDoi + ".svg"} alt={this.state.data.zenodoDoi}/>
                </a>
            </Col>
        </Row>
        <Row justify="center">
            <Col xs={24} md={16}>
                <img className="img-fluid" property={this.state.context.image} src={this.state.data.image} alt="" />
            </Col>
        </Row>
        <Divider></Divider>

        { Object.keys(this.state.data).includes('author')?(
            <>
            <Row>
                <Col>
                    <Title level={3}>Developers:</Title>
                </Col>
            </Row>
            <Row gutter={[16,16]}>
                            {this.state.data.author.Person.map((person, idx) => {
                            //const person = this.state.data.author.Person[pos - 1]
                            const url= Object.keys(person).includes('memberOf') && person.memberOf.includes("OEG") ? person.code:""
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
            <Divider></Divider>
            </>
            ):''}        
        {
                    Object.keys(this.state.data).includes('Article')?(
                        <>
                        <List 
                        header={<Title level={3}>Publications:</Title>}
                        dataSource={this.state.data.Article.Article}
                        renderItem={(item) => (
                            <List.Item>
                            <a property={this.state.context.Article} href={"/article/" + item.code}>
                               {item.name}
                            </a>
                            </List.Item>
                        )}
                        />
                        <Divider></Divider>            
                        </>
                    ):''
                }
                {
                    Object.keys(this.state.data).includes('award')?(
                        <>
                        <List 
                        header={<Title level={3}>Awards:</Title>}
                        dataSource={this.state.data.award.award}
                        renderItem={(item) => (
                            <List.Item>
                            <a property={this.state.context.award} href={"#"}>
                               {item.name}
                            </a>
                            </List.Item>
                        )}
                        />
                        <Divider></Divider>            
                        </>
                    ):''           
                }                
                  
        {this.state.abstract.length !== 0 ?(
            <>
            <span property={this.state.context.abstract}>
                <ReactMarkdown source={this.state.abstract}></ReactMarkdown>
            </span>
            </>
        ):''}
        </div>
        )
    }
    minCard = () => {
        return(
            <Card
            resource={this.state.data.id}
            typeof={this.state.context.SoftwareSourceCode}
            className="shadow"
            actions={[
                <a href={this.state.data.codeRepository} target="_blank" rel="noopener noreferrer" property={this.state.context.codeRepository}>
                     <GithubOutlined/>
                 </a>,
                 <a href={"/tool/" + this.state.data.code}>
                     Learn More
                 </a>
             ]}>
                 <Row>
                     <Col span={24}>
                         <img className="img-fluid" property={this.state.context.image} src={this.state.data.image} alt="" />
                     </Col>
                 </Row>
                 <Row>
                     <Col>
                         <Title level={3}  property={this.state.context.name}>
                                 {this.state.data.name}
                         </Title>                
                     </Col>
                 </Row>
                 <Row>
                     <Col>
                         <Paragraph  property={this.state.context.about}>
                                {this.state.data.about}
                         </Paragraph>
                     </Col>
                 </Row>
             </Card>            
        )
    }
       
    }

    
