import React, {useState, useEffect} from 'react'
import {Card, Row, Col, Typography, Avatar, Tooltip} from 'antd'
import {getAllArticles} from '../requests/virtuoso'
import {FiExternalLink} from 'react-icons/fi'
import {FaAnchor} from 'react-icons/fa'
const {Title} = Typography
const {Text} = Typography
const {Paragraph} = Typography
const {Meta} = Card
const initials = (name) => {
    let words = name.toString().split(' ')
    let result = ""
    words.map((val) => {
        result += val[0]
    })
    return result
}
const abstract = "Ontology-Based Data Access (OBDA) has traditionally fo-cused on providing ontology-based access to relational databases (RDB)data, either by RDF materialisation or SPARQL-to-SQL query transla-tion techniques. With the advent of mapping languages or annotationssuch as RML or CSVW, recently OBDA has been also used to gener-ate materialised RDF instances of data available in semi-structured dataformats such as CSV. So far, query translation techniques have beenapplied over such data format by considering a CSV file as a single ta-ble that can be loaded in an RDB. However, such techniques do not takeinto account those characteristics that are normally present in real-worldCSV files: data are not necessarily normalised, data may not adhere tostrict consistency rules (e.g., datatypes, multiplicity of values), and ex-plicit relationships across different files (e.g., joins) are often missing. Inthis paper, we present a framework for enabling query translation over aset of CSV files by using a combination of CSVW annotations and RMLmappings with FnO transformation functions. Exploiting these inputs,the framework creates an enriched RDB representation of the CSV filestogether with the corresponding R2RML mappings, enabling the use ofany existing query translation (SPARQL-to-SQL) techniques proposedin literature. We validate our proposal against a set of real-world CSVfiles in the domain of smart cities, comparing query result completenessand performance with state-of-the-art engines."
export default class ArticleList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles:[],
            context:{}
        };
    }
    createId(text){
        return text.toString().replace(/([ ])+/g, '_')
    }
    render(){
    return (
    <Row gutter={[16,16]}>
    { this.state.articles.map((card) => {
        const order = card.author.position
        return(
            <Col xs={24} id={this.createId(card.name)}>
                    <Card
                    className="shadowEffect"
                    title={<>
                    <span property={this.state.context.name}>{card.name}</span>
                    <span className="badge"><a href={"/#" + this.createId(card.name)}> <FaAnchor/></a></span>
                    </>}
                    extra={<Text>12/01/2019</Text>} 
                    actions={[
                        <a property={this.state.context.paperLink} href={card.paperLink}>
                        Read more
                        <span className="badge"><FiExternalLink key="read" /></span>
                        </a>
                    ]}
                    >
                        <span property={this.state.context.abstract}>
                        <Text strong>Abstract: </Text>
                        <Paragraph 
                        className="text-justify"
                        ellipsis={{
                        rows: 3,
                        expandable: true
                        }}>
                            {abstract}
                        </Paragraph>
                        </span>

                        <Row gutter={[5,5]}>
                            {card.author.Person.map((person, idx) => {
                            //const person = card.author.Person[pos - 1] 
                            return(
                            <Col>
                                <Tooltip title={person.name} placement="bottom">
                            <span property={this.state.context.Person}><Avatar src={Object.keys(person).includes('image') ? person.image:''} size="large">{initials(person.name)}</Avatar></span>
                                </Tooltip>                    
                            </Col>
                            )
                            })}
                        </Row>
                    </Card>
            </Col>
      )
    })}
 </Row>
    )
}
    componentDidMount(){
        getAllArticles().then((response) => {
            console.log(response.data)
            this.setState({articles:response.data})
            this.setState({context:response.context})
        }).catch((err) => console.log(err))
    }
}
/**
 * {
  "id": "http://www.oeg-upm.net/resource/paper/0",
  "name": "Virtual Statistics Knowledge Graph Generation from CSV files",
  "url": "https://dchaves.oeg-upm.net/resources/papers/virtual-semstat-2018/",
  "abstract": "NONE",
  "author": {
    "Person": [
      {
        "name": "David Chaves-Fraga",
        "image": "http://morph.oeg-upm.net/img/team/dchaves.jpg"
      },
      {
        "name": "Oscar Corcho",
        "image": "http://morph.oeg-upm.net/img/team/ocorcho.jpg"
      },
      {
        "name": "Freddy Priyatna",
        "image": "http://morph.oeg-upm.net/img/team/fpriyatna.jpg"
      },
      {
        "name": "Idafen Perez-Santana"
      }
    ]
  }
}
 * 
 */