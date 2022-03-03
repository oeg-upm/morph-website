import React,{useEffect,useState}  from 'react'
import Layout from '../components/Layout'
import {uploadFiles, parseMapping} from '../requests/morph-kgc-api'
import {Upload,Button, message,List, Row, Col, Collapse} from 'antd'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function MorphKgcDemo(props){
	
//    const [mapping, setMapping] = useState(null)
//    const [textMapping, setTextMapping] = useState("")
//    const [rmlMapping, setrmlMapping] = useState("")
    const [mappingError, setMappingError] = useState(null)
    const [csv, setCsv] = useState(null)
    
    let mapping = null
    let data = null
    
    // Check file size before upload
    
    const beforeUpload = (file) => {
		
      const sz = file.size / 1024 / 1024 < 100;
      
      if (!sz) {
        message.error('The file size is above the 100M limit of this service, you can use Morph-KGC locally to process huge files.');
      }
      return sz;
    }
    
    
    const sendRequest = async () => {
		
		console.log(mapping)
		console.log(data)

		if(mapping && data){
			
			  uploadFiles({mapping:mapping, data:data}).then((data) => { //Apuf

				const downloadUrl = window.URL.createObjectURL(new Blob([data]));
		
				const link = document.createElement('a');
		
				link.href = downloadUrl;
		
				link.setAttribute('download', 'processed_result.zip');
		
				document.body.appendChild(link);
		
				link.click();
		
				link.remove();
		
			  }).catch((err) => {
				message.error("Somenthing has failed in the materialization process.")
			  });

		  }else{
			message.error("You need to select a valid mapping and sources first.")
		  }
    
    }
    
    function uploadMapping(obj){
		
		readFile(obj.file).then((textMapping) => {
		
			if(textMapping.length > 0){
			  parseMapping(textMapping).then((data) =>  {
				if(data){
				  //setrmlMapping(data.toString())
				  obj.onSuccess();
				  setMappingError(null)
				  
				  mapping = new Blob([data], {type: "text/turtle"});
				}
			  }).catch((err) => {
				console.log(err)
				obj.onError();
				if(err.response){
				  setMappingError("Error: "+JSON.stringify(err.response.data.message).replace("\n", "")+"\nLínea: "+JSON.stringify(err.response.data.parsedLine)+"\nFragmento: "+JSON.stringify(err.response.data.snippet))
				}else{
				  setMappingError("Unknown error")
				}
				message.error("Not valid mapping file")
			  });
			}
		
		}).catch((err) => console.log(err));
			
	}
    
    function uploadSources(obj){
		
		console.log(obj);
		data = obj.file
		
		window.setTimeout(function(){
			obj.onSuccess();
		}, 500);
		
	}
    
    function readFile(data){
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
          reader.onload = event => resolve(event.target.result)
          reader.onerror = error => reject(error)
          reader.readAsText(data)    
          });
    }
  
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
                <h5>Mapping requirements</h5>
              </List.Item> 
              <List.Item>
                All the sources must start from the dir <b>/data/</b>
              </List.Item>
              <List.Item>
                This demo only supports mappings in YARRRML format.
              </List.Item>
              <List.Item>
                If you have any doubt about how to create a YARRRML mapping, you can research and ask <a href="https://github.com/kg-construct/rml-questions/discussions">here</a>
              </List.Item>
              <List.Item>
                <h5>Data requirements</h5>
              </List.Item>
              <List.Item>
                This demo support CSV, JSON and XML files of a combined size of 100MB (compressed).
              </List.Item>
              <List.Item>
                All sources must be provided in a single ZIP file. That file will be decompressed as the /data/ folder.
              </List.Item>
              <List.Item>
                If you have any problem or find a bug please leave an issue <a href="https://github.com/oeg-upm/Morph-KGC/issues">here</a>
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
                  2. Compress your data files (CSV, JSON, XML...).
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
        accept=".yml,.yaml,.txt"
        maxCount={1}
        customRequest={(data) => uploadMapping(data)}
        >
        <Button>Upload Mapping</Button>
      </Upload>
      

      <div className="mt-3">
      <Upload
          disabled={false}
          iconRender={null}
          maxCount={1}
          accept=".zip,.csv,.json,.xml"
          beforeUpload={beforeUpload}
        customRequest={(data) => uploadSources(data)}
        >
        <Button>Upload data sources</Button>
      </Upload>
      </div>
        <div className="mt-5">
          <Button disabled={false} onClick={() => sendRequest()}>Materialize</Button>
        </div>
        </div>

      </Layout>
    );
}
