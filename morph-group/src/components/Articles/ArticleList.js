import React from 'react'
import {Row, Col} from 'antd'
import ArticleCard from './ArticleCard'
import {getAllArticles} from '../../requests/virtuoso'


const abstract = "Ontology-Based Data Access (OBDA) has traditionally fo-cused on providing ontology-based access to relational databases (RDB)data, either by RDF materialisation or SPARQL-to-SQL query transla-tion techniques. With the advent of mapping languages or annotationssuch as RML or CSVW, recently OBDA has been also used to gener-ate materialised RDF instances of data available in semi-structured dataformats such as CSV. So far, query translation techniques have beenapplied over such data format by considering a CSV file as a single ta-ble that can be loaded in an RDB. However, such techniques do not takeinto account those characteristics that are normally present in real-worldCSV files: data are not necessarily normalised, data may not adhere tostrict consistency rules (e.g., datatypes, multiplicity of values), and ex-plicit relationships across different files (e.g., joins) are often missing. Inthis paper, we present a framework for enabling query translation over aset of CSV files by using a combination of CSVW annotations and RMLmappings with FnO transformation functions. Exploiting these inputs,the framework creates an enriched RDB representation of the CSV filestogether with the corresponding R2RML mappings, enabling the use ofany existing query translation (SPARQL-to-SQL) techniques proposedin literature. We validate our proposal against a set of real-world CSVfiles in the domain of smart cities, comparing query result completenessand performance with state-of-the-art engines."
export default class ArticleList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles:[],
            limit: this.props.limit
        };
    }

    render(){
    return (
        <Row gutter={[16,16]}>
            { this.state.articles.map((article) => {
                return(
                    <ArticleCard size="large" code={article.code}/>
                )
            })}
        </Row>
        )
    }

    async componentDidMount(){
        const response = await getAllArticles().catch(err => console.log(err))
        await response.sort(function(a,b){
          return new Date(b.datePublished) - new Date(a.datePublished);
        });
        let data = response
        if(this.props.limit !== -1)
          data = await response.slice(0, this.props.limit)
        this.setState({articles:data})

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