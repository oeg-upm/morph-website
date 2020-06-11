import axios from 'axios'
import {Client} from "graphql-ld";
import {QueryEngineComunica} from "graphql-ld-comunica";
const API = 'https://morph.oeg.fi.upm.es/sparql'
const uris = {
  schema:'http://schema.org/',
  dcterms:'http://purl.org/dc/terms/',
  ex:'http://example.com/',
  rdf:'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  ov: 'http://open.vocab.org/terms/',
  doi:'http://doi.org/'

}
const context = {
    "@context": {
      a:`${uris.rdf}type` ,
      Article:`${uris.schema}Article`,
      Event:`${uris.schema}Event`,
      eventName:`${uris.ex}eventName`,
      name:`${uris.schema}name`,
      paperLink:`${uris.ex}paperLink`,
      datePublished:`${uris.schema}datePublished`,
      abstract:`${uris.schema}abstract`,
      author:`${uris.schema}author`,
      award:`${uris.schema}award`,
      exampleOfWork:`${uris.schema}exampleOfWork`,
      Person:`${uris.schema}Person`,
      image:`${uris.schema}image`, 
      url:`${uris.schema}url`,
      affiliation:`${uris.schema}affiliation`,
      worksFor:`${uris.schema}worksFor`,
      description:`${uris.schema}description`,
      memberOf:`${uris.schema}memberOf`,
      twitter:`${uris.ov}twitter-id`,
      linkedin:`${uris.ex}linkedin`,
      github:`${uris.ex}github`,
      jobTitle:`${uris.schema}jobTitle`,
      email:`${uris.schema}email`,
      startDate:`${uris.schema}startDate`,
      nationality:`${uris.schema}nationality`,
      software: `${uris.ex}Software`,
      paper:`${uris.ex}paper`,
      codeRepository: `${uris.schema}codeRepository`,
      zenodoDoi: `${uris.doi}name`,
      readmelink:`${uris.ex}readmeLink`,
      position:`${uris.schema}position`,
      hasDevelop:`${uris.ex}hasDevelop`,
      hasWrite:`${uris.ex}hasWrite`,
      hasWon:`${uris.ex}hasWon`,
      SoftwareSourceCode:`${uris.schema}SoftwareSourceCode`,
      code:`${uris.ex}code`,
      about:`${uris.schema}about`,
      isRelatedTo:`${uris.schema}isRelatedTo`,
      identifier:`${uris.schema}identifier`,
      workExample:`${uris.schema}workExample`,
      status:`${uris.ex}status`
      }
  };

const comunicaConfig = {
    sources: [
      { type: "sparql", value:API,
     },
    ],
  };
  const client = new Client({ context, queryEngine: new QueryEngineComunica(comunicaConfig) });
  
  // Define a query
  const queryAllArticles = `
    query{
        id(a:Article) @single
        code @single
        datePublished @single

    }`;
  const queryAllTools =`
    query{
      id(a:SoftwareSourceCode) @single
      code @single
      datePublished @single @optional
    }
  `
  const queryAllMembers = (status) => ( `
  query {
    id(a: Person, status:"${status}") @single
    code @single
    position @single @optional

  }
  `)
const queryArticle = (code) => (
  `
  query @single(scope: all){
      id(a:Article, code: "${code}")
      name
      code
      url  @optional
      datePublished @optional
      Event @optional
      eventName @optional
      abstract  @optional
      author @optional{
        position @plural
        Person @plural{
          id @single
          name @single 
          code @single
          url @optional @single
          image @optional @single
          memberOf @plural @optional
          }
      }
      workExample @optional{
        SoftwareSourceCode @plural{
          code @single
        }
      }
      award @optional {
        award @plural{
          name @single
          code @single
        }
      }
  }`
)
const queryTool = (code) => {
  return(
    `
  query @single(scope: all){
      id(a:SoftwareSourceCode, code: "${code}") @single
      code
      name
      image @optional
      award @optional {
        award @plural {
          name @single
          code @single
          url @optional @single
        }
      }
      exampleOfWork @optional @single{
        Article @plural{
          name @single
          code @code
        }
      }
      about @optional
      author @optional @single{
        Person @plural{
          id @single
          name @single
          code @single
          url @optional @single
          image @single @optional
          memberOf @plural @optional
        }
      }
      codeRepository  @optional
      zenodoDoi  @optional
      abstract @optional
    }
    `
  )  
}
const queryMemberCode = (name) => (
  `
    query @single(scope: all){
      id(a:Person, name: "${name}")
      code
    }
  `
)

const queryMemberInfo = (id) => (`
  query @single(scope: all){
    person: id(a: Person, code: "${id}"){
      name
      code
      id
      status
      position @optional
      image @optional 
      description @optional
      jobTitle @optional 
      identifier @optional @plural
      email @optional
      url @optional
      memberOf @plural @optional
    }
    relatedTo: id(a:isRelatedTo) @optional{
      Person(code:"${id}")
      Article @optional @plural{
        id @single
        name @single
        code @single
      }
      SoftwareSourceCode @optional @plural{
        id @single
        name @single
        code @single
      }
      award @optional @plural{
        id @single
        name @single
        code @single
      }
    }    
    } 
`);
/**
 * 
 *     software: a(_:SoftwareSourcecode){
      code
      author @single{
        Person(_:${id})
      }
    }
 *      @single @optional{
      SoftwareSourceCode @plural{
        code @single
      }
    }
    Article @single @optional{
      Article  @plural{
        name @single
        code @single
      }
    }
    award @single @optional{
      award  @plural{
        name @single
        code @single
      }
    }
 */
export function getAllArticles(){
  return new Promise((resolve, reject) => {
    client.query({'query':queryAllArticles}).then((response) => {
      resolve(response.data)
    }).catch((err) => reject(err))
  });
}
export function getAllTools(){
  return new Promise((resolve, reject) => {
    client.query({'query':queryAllTools}).then((response) => {
      resolve(response.data)
    }).catch((err) => reject(err))
  });
}
export function getAllMembers(status){
  return new Promise((resolve, reject) => {
    client.query({'query':queryAllMembers(status)}).then((response) => {
      resolve(response.data)
    }).catch((err) => reject(err))
  });
}
export function getMemberInfo(code){
  return new Promise(async (resolve, reject) => {
    const query = await queryMemberInfo(code)
    client.query({'query':query}).then((response) => {
      resolve({data:response.data, context:context['@context']})
    }).catch((err) => reject(err))
  });
}
export function getCodeMember(name){
  return new Promise(async (resolve, reject) => {
    const query = await queryMemberCode(name)
    client.query({'query':query}).then((response) => {
      resolve(response.data)
    }).catch((err) => reject(err))
  });  
}

export function getArticle(id){
  return new Promise(async (resolve, reject) => {
    const query = await queryArticle(id)
    client.query({'query':query}).then((response) => {
      resolve({data:response.data, context:context['@context']})
    }).catch((err) => reject(err))
  });
}
export function getTool(id){
  return new Promise(async (resolve, reject) => {
    const query = await queryTool(id)
    client.query({'query':query}).then((response) => {
      resolve({data:response.data, context:context['@context']})
    }).catch((err) => reject(err))
  });
}
export function getAllMembersRelations(){
  return new Promise((resolve, reject) => {
    axios.get(API +'?default-graph-uri=&query=PREFIX+schema%3A+%3Chttp%3A%2F%2Fschema.org%2F%3E%0D%0APREFIX+ex%3A+%3Chttp%3A%2F%2Fexample.com%2F%3E%0D%0APREFIX+dcterms%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0Aselect+distinct+%3Fperson+%3Fname+%3Fimage+%3Fdeveloper+%3Fwinner+%3Fauthor+where+%7B%0D%0A%3Fperson+a+schema%3APerson.%0D%0A%3Fperson+schema%3Aname+%3Fname.%0D%0AOPTIONAL%7B%3Fperson+schema%3Aimage+%3Fimage%7D%0D%0AOPTIONAL+%7B%0D%0A%3Fperson+ex%3AhasWon+%3FawardPeople.%0D%0A%3FawardPeople+ex%3Aaward+%3Faward.%0D%0A%3Faward+ex%3AWinners+%3Fwinners.%0D%0A%3Fwinners+ex%3Apeople+%3Fwinner.%0D%0A%3Fwinner+schema%3Aname+%3FwinnerName%0D%0A%7D%0D%0AOPTIONAL+%7B%0D%0A%3Fperson+ex%3AhasWrite+%3FpaperPeople.%0D%0A%3FpaperPeople+ex%3Apaper+%3Fpaper.%0D%0A%3Fpaper+dcterms%3Acreator+%3Fauthors.%0D%0A%3Fauthors+ex%3Aperson+%3Fauthor.%0D%0A%3Fauthor+schema%3Aname+%3FauthorName.%0D%0A%7D%0D%0AOPTIONAL+%7B%0D%0A%3Fperson+ex%3AhasDevelop+%3FtoolPeople.%0D%0A%3FtoolPeople+ex%3Atool+%3Ftool.%0D%0A%3Ftool+dcterms%3Acreator+%3Fdevelopers.%0D%0A%3Fdevelopers+ex%3Apeople+%3Fdeveloper.%0D%0A%3Fdeveloper+schema%3Aname+%3FdeveloperName.%7D%0D%0A%7D+&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on')
  .then((response) => {
    resolve(response.data);
  }).catch((err) => {
    reject(err)
  })
  });
}
export function membersFromRdfJSonToGraph(){
  return new Promise((resolve, reject) => {
    getAllMembersRelations().then(async (response) => {
      let nodeList = [];
      let result = {'edges':[], 'nodes':[]}
      await response.results.bindings.map((node) => {
          if(!nodeList.includes(node.person.value)){
              nodeList.push(node.person.value)
              result.nodes.push({id:node.person.value,label:node.name.value, img:Object.keys(node).includes('image')?node.image.value:''})
          }
          response.head.vars.forEach((el) => {
              if(el !== 'person' && el !== 'image' && el !== 'name'){
                  if(Object.keys(node).includes(el) && node[el].value !== node.person.value){
                  const styles = {
                      'developer':{
                        curveOffset: 0,
                      stroke:'#F6BD16'
                    },
                    'winner':{
                      type:'arc',
                      curveOffset: 50,
                      stroke:'#c61d19'        
                    },
                    'author':{
                      type:'arc',
                      stroke:'#77bafd'        
                    }
                  }
                  const tooltips = {
                    'developer':'has develop with',
                    'winner':'has won an award with',
                    'author':'has write an article with'
                  }
                    let edge = { 
                      source:node.person.value, 
                      target:node[el].value, 
                      style:styles[el], 
                      linkFor:el , 
                      type:el!== 'author'?'arc':'line',
                      tooltip:tooltips[el]
                    }
                    const isSameEdge = (obj) => {
                      return (obj.source === edge.source &&
                      obj.target === edge.target && 
                      obj.linkFor === edge.linkFor) ||(
                      obj.source === edge.target &&
                      obj.target === edge.source && 
                      obj.linkFor === edge.linkFor
                      )
                    }
                    if(result.edges.findIndex(isSameEdge) === -1){
                        result.edges.push(edge)
                    }
                  }
              }
          })
      })
      resolve(result)
  }).catch((err) => {
    reject(err)
  })      
  })   
}
  /**
    PREFIX schema: <http://schema.org/>
    PREFIX ex: <http://example.com/>
    PREFIX dcterms: <http://purl.org/dc/terms/>
    select ?person ?name ?image ?developer ?winner ?author where {
      ?person a schema:Person.
      ?person schema:name ?name.
      ?person schema:image ?image
      OPTIONAL {
        ?person ex:hasWon ?awardPeople.
        ?awardPeople ex:award ?award.
        ?award ex:Winners ?winners.
        ?winners ex:people ?winner.
        ?winner schema:name ?winnerName
      }
      OPTIONAL {
        ?person ex:hasWrite ?paperPeople.
        ?paperPeople ex:paper ?paper.
        ?paper dcterms:creator ?authors.
        ?authors ex:person ?author.
        ?author schema:name ?authorName.
      }
      OPTIONAL {
        ?person ex:hasDevelop ?toolPeople.
        ?toolPeople ex:tool ?tool.
        ?tool dcterms:creator ?developers.
        ?developers ex:people ?developer.
        ?developer schema:name ?developerName.
      }
    } 
   */
