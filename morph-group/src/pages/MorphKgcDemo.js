import React,{useEffect,useState}  from 'react'
import Layout from '../components/Layout'
import {uploadFiles, parseMapping} from '../requests/morph-kgc-api'
import {Upload,Button, message,List} from 'antd'

export default function MorphKgcDemo(props){
    const [mapping, setMapping] = useState(null)
    const [csv, setCsv] = useState(null)
  
    useEffect(() => {
      async function foo(){
        const textMapping = await readFile(mapping).catch((err) => console.log(err));
          if(mapping !== null && csv !== null){
            if(textMapping && textMapping.length > 0){
            const rmlMapping = await parseMapping(textMapping).catch((err) => {
              console.log(err)
              message.error("Not valid mapping file")
            });
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
      
  
          }else{
            message.error("Not valid mapping file")
          }
        }
  
      }
      foo();
    },[mapping,csv])
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
        <h1>Morph KGC Demo</h1>
        <div className="mt-3"></div>
        <List>
          <List.Item>
            <h3>Things to consider</h3>
          </List.Item> 
          <List.Item>
            All the sources must start from the dir <b>/data/</b>
          </List.Item>
          <List.Item>
            If the mapping require more than a CSV file then you have to compress the dir and upload a zip file.
          </List.Item>
          <List.Item>
            The data size can't be larger than 100MB 
          </List.Item>
          <List.Item>
            If you have any problem or find a bug please leave an issue <a href="https://github.com/oeg-upm/Morph-KGC/issues">here</a>
          </List.Item>
        </List>
        <div className="mt-3">
        <Upload
        customRequest={(data) => setMapping(data.file)}
        >
        <Button>Click to Upload Mapping</Button>
      </Upload>
      <div className="mt-3">
      <Upload
        customRequest={(data) => setCsv(data.file)}
        >
        <Button>Click to Upload CSV zip</Button>
      </Upload>
      </div>

        </div>

      </Layout>
    );
}