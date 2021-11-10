import React,{useEffect,useState}  from 'react'
import Layout from '../components/Layout'
import {uploadFiles, parseMapping} from '../requests/morph-kgc-api'
import {Upload,Button, message,List, Row, Col, Collapse} from 'antd'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function MorphKgcDemo(props){
    const [mapping, setMapping] = useState(null)
    const [textMapping, setTextMapping] = useState("")
    const [rmlMapping, setrmlMapping] = useState("")
    const [mappingError, setMappingError] = useState(null)
    const [csv, setCsv] = useState(null)
    const beforeUpload = (file) => {
      const isLt2M = file.size / 1024 / 1024 < 101;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isLt2M;
    }
    const uploadCSV = (data) => {
      setCsv(data.file)
      return {...data, status:"success"}
    }
    const uploadData = async () => {

      if(textMapping !== null && csv !== null){
        if(textMapping && textMapping.length > 0){

        if(rmlMapping){
          uploadFiles({mapping:rmlMapping, csv:csv}).then(( data) => {

            const downloadUrl = window.URL.createObjectURL(new Blob([data]));
    
            const link = document.createElement('a');
    
            link.href = downloadUrl;
    
            link.setAttribute('download', 'file.zip'); //any other extension
    
            document.body.appendChild(link);
    
            link.click();
    
            link.remove();
    
          }).catch((err) => {
            message.error("Somenthing has failed in the materialization process.")
          });
    
        }

      }else{
        message.error("Not valid mapping file")
      }
    }else{
      if(mapping === null){
        message.error("The YARRRML mapping file it is required.")
      }
      if(csv === null){
        message.error("The CSV file(s) it is required.")

      }
    }
    }
    function readFile(data){
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
          reader.onload = event => resolve(event.target.result)
          reader.onerror = error => reject(error)
          reader.readAsText(data)    
          });
  }
  useEffect(() => {
    readFile(mapping).then((data) => {
        setTextMapping(data)
    }).catch((err) => console.log(err));

  },[mapping])
  useEffect(() => {
    if(textMapping.length > 0){
      parseMapping(textMapping).then((data) =>  {
        if(data){
          setrmlMapping(data.toString())
          console.log(data)
          setMappingError(null)
        }
      }).catch((err) => {
        console.log(err)
        if(err.response){
          setMappingError(JSON.stringify(err.response.data).replace(",", ",\n"))
        }else{
          setMappingError("Unknown error")
        }
        message.error("Not valid mapping file")
      });
    }
    
  }, [textMapping])
    return (
      <Layout>
        <h2>Morph-KGC</h2>
        <Row>
          <Col lg={14}>
          <p className="text-justify">
            Morph-KGC is an engine that constructs RDF knowledge graphs from heterogeneous data sources with R2RML and RML mapping languages.
            In this website we have added support for YARRRML mappings using the <a href="https://github.com/RMLio/yarrrml-parser">yarrrml-parser tool </a> developed by the <a href="https://www.ugent.be/ea/idlab/en">Ghent University – imec</a>. 
          </p>          
          </Col>
        </Row>

        <div className="mt-3"></div>
        <Row gutter={[16,16]} justify="space-between">
          <Col>
            <List>
              <List.Item>
                <h5>Requirements</h5>
              </List.Item> 
              <List.Item>
                The tool only allows the upload of <b>CSV files and YARRRML mappings.</b>
              </List.Item>
              <List.Item>
                All the sources must start from the dir <b>/data/</b>
              </List.Item>
              <List.Item>
                If the mapping require more than a CSV file then you have to compress the dir and upload a zip file.
              </List.Item>
              <List.Item>
                The data size can not be larger than 100MB 
              </List.Item>
              <List.Item>
                If you have any problem or find a bug please leave an issue <a href="https://github.com/oeg-upm/Morph-KGC/issues">here</a>
              </List.Item>
              <List.Item>
                If you have any doubt about how to create a YARRRML mapping, you can research and ask <a href="https://github.com/kg-construct/rml-questions/discussions">here</a>
              </List.Item>
            </List>          
          </Col>
          <Col>
            <List>
                <List.Item>
                  <h5>Instructions</h5>
                </List.Item> 
                <List.Item>
                  1. Create a YARRRML mapping.
                </List.Item>
                <List.Item>
                  2. Zip your CSVs files.
                </List.Item>
                <List.Item>
                  3. Upload your YARRRML mapping and your zipped files.
                </List.Item>
            </List>          
          </Col>
        </Row>

        <div className="mt-3">
        <Upload
        beforeUpload={beforeUpload}
        customRequest={(data) => setMapping(data.file)}
        >
        <Button>Upload Mapping</Button>
      </Upload>
      <div className="rmlViewver mt-3">
         {
           mappingError ?(
             <div className="errorCard p-5">
               <h5>There is a problem with your mapping file:</h5>
                <p>{
                  mappingError.toString()
                }</p>
             </div>
           ):textMapping.length > 0?(
            <Collapse>
            <Collapse.Panel key="1" header="RML mapping">
             <SyntaxHighlighter language="javascript" style={{...ghcolors, whiteSpace:"pre-line"}}>
               {rmlMapping.replace(";", ";")}
             </SyntaxHighlighter>
            </Collapse.Panel>
          </Collapse>
           ):null
         }
      </div>
      <div className="mt-3">
      <Upload
          iconRender={null}
          accept=".zip,.rar,.7zip"
          beforeUpload={beforeUpload}
        customRequest={(data) => uploadCSV(data)}
        >
        <Button>Upload CSV(s)</Button>
      </Upload>
      </div>
        <div className="mt-5">
          <Button onClick={() => uploadData()}>Upload</Button>
        </div>
        </div>

      </Layout>
    );
}