import React from 'react'
import Layout from '../../components/Layout'
import {Form,Select,Input,Radio,Button,Switch,Row,Col,Typography, message, Spin } from 'antd';
import { DownloadOutlined ,UploadOutlined, LoadingOutlined } from '@ant-design/icons';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {sendData} from '../../requests/mapeathorApi'
import axios from 'axios'
import { useRef } from 'react';
const {Title, Paragraph, Text} = Typography
const { Option } = Select;
  
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = e => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e[0];
  }
  return e && e.fileList;
};
  const onFinish = values => {
      console.log('Received values of form: ', values);
      // if(values.file !== undefined)
      //     values.file = values.file[0]
      sendData(values).then((data) => {
          console.log(data)
      }).catch((err) => {
          console.log(err)
      });
      
    }



const UPLOAD_SUCCESS_URL = "http://0.0.0.0:5000/api/"
const loadingIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

const options = [
    { label: 'RML', value: 'rml' },
    { label: 'R2RML', value: 'r2rml' },
    { label: 'YARRRML', value: 'yarrrml' },
  ];

export default class Demo extends React.Component {
  state = {
    file:null,
    format:"rml",
    lastFormat:"",
    uploading: false,
    uploadProgress:0,
    uploadStatus:false,
    error:"",
    upload:false,
    driveUrl:"",
    isFile:false,
    mapping:"",
    acceptedTypes:['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
  };

  getBase64(file,callback){
      const reader = new FileReader();
      // FileReader API Spec: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/FileReader
      reader.addEventListener('load', () => callback(reader.result));
      reader.readAsDataURL(file);
  }

   isValidFileType = (fileType) => {
       console.log('FileType: ' + fileType)
      return this.state.acceptedTypes.includes(fileType);
  };

  
  downloadMapping(){
    const element = document.createElement("a");
    const file = new Blob([this.state.mapping], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    let fileFormat = this.state.format === "yarrrml" ? ".yaml":".ttl"
    let fileName = this.state.isFile? this.state.file.name.split(".")[0]:"MapeathorMapping" 
    element.download = fileName + fileFormat;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();    
  }
   handleFileUpload = (e) => {
      let errorMessage = ""
      this.setState({lastFormat:this.state.format, uploading:true, mapping:""});
      e.preventDefault();
      const formData = new FormData();
      if(this.state.driveUrl.length !== 0 && !this.state.isFile){
        formData.append('url', this.state.driveUrl);
      }else if(this.state.file !== null && this.state.isFile){
        if (!this.isValidFileType(this.state.file.type)) {
          message.error('Only XLSX files are allowed');
          return;
        }
        formData.append('file', this.state.file);
      }
      if(this.state.file === null && this.state.driveUrl.length === 0){
        errorMessage = this.state.isFile ?"You need to upload a XLSX file.":"Introduce a valid google drive spreadsheet link."
        this.setState({error:errorMessage, mapping:"", uploading:false},() => message.warning(this.state.error))
        return
      }else{
        formData.append('format', this.state.format);


        axios({
            method: 'post',
            headers: {
              'accept':'binary/octet-stream',
              'Content-Type': 'multipart/form-data',
              'Access-Control-Allow-Headers':'*'
          },
            data: formData,
            url: UPLOAD_SUCCESS_URL,
            onUploadProgress: (ev) => {
                const progress = ev.loaded / ev.total * 100;
                this.setState({uploadProgress:Math.round(progress)});
            },
        })
        .then((resp) => {
            // our mocked response will always return true
            // in practice, you would want to use the actual response object
            console.log(resp.data)
            this.setState({mapping:resp.data})
            this.setState({uploadStatus:true});
            this.setState({uploading:false});
        })
        .catch((err) => {
          console.error(err);
          if(err.response.status == 401)
            errorMessage = "Oops somenthing goes wrong, please try it again"
          else if(err.response.status == 500)
            errorMessage = "Somenthing it's wrong with your files, please review the files and try it again"
  
          this.setState({error:errorMessage, mapping:"", uploading:false}, () => message.error(this.state.error))
        });
      }
  };
  changeFileInput(){
    this.setState({isFile:!this.state.isFile}, () => {
      if(this.state.isFile){
        this.setState({driveUrl:""})
      }else{
        this.setState({file:null})
      }
    })
  }

  render() {

    return (
        <Layout>

            <Row>
                <Col xs={22} md={12}>
                <Title level={2}>Mapeathor Demo</Title>
                <Paragraph>
                    You can test this tool with the demo below, 
                    just use a Google Spreadsheet URL or an Excel 
                    file (XLSX) and select a mapping format. 
                    Check the templates and examples in the GitHub repository. 
                    You can also check <a href="https://morph.oeg.fi.upm.es/tool/mapeathor/swagger/">this Swagger instance.</a> 
                </Paragraph>                
                </Col>
            </Row>
      <div className="app">

          <form onSubmit={this.handleFileUpload} className="form">

              <Form.Item label="Choose the output format">
                <Radio.Group 
                options={options} 
                onChange={(e) => this.setState({format:e.target.value})} 
                value={this.state.format} 
                optionType="button"
                />
              </Form.Item>
              <Row gutter={[16,16]}>
                <Col>
                    <Text>Do you prefer upload a XLSX file?</Text> 
                </Col>
                <Col>
                    <Switch value={this.state.isFile} onChange={() => {this.changeFileInput()}} />            
                </Col>
            </Row>
            {this.state.isFile?(
          <Form.Item label={(this.state.file)
                ? `File ${this.state.file.name} selected`
                : ' Choose File'
            }>
              <label className="custom-file-upload">
              <Input
                    className="file-input"
                    type="file" name="file"
                    accept={this.state.acceptedTypes.toString()}
                    style={{'display':'none'}}
                    onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                            this.setState({file:e.target.files[0]})
                        }
                    }} />                    
                  <span>
                  <UploadOutlined></UploadOutlined> Upload XLSX File
                  </span>
              </label>
        </Form.Item>
            ):(
              <Form.Item label="Google Spreadsheet URL">
                  <Input onChange={(e) => this.setState({driveUrl:e.target.value})}></Input>
              </Form.Item>
            )}


          <Form.Item>
                <Button className="upload-button" onClick={this.handleFileUpload} type="submit">
                    Upload
                </Button>
              </Form.Item>
          </form>
          
          {(this.state.uploading)
              ?
              <div className="progress-bar-container">
                <Spin indicator={loadingIcon}></Spin>
              </div>
              : null
          } 

      </div>
      <Row>
        <Col>
          {
            this.state.mapping.length !== 0?(
              this.resultMapping()
            ):null
          }
        </Col>
      </Row>
        </Layout>
    );
  }
   resultMapping = () => {
    return (
      <>
      <Row gutter={16}>
        <Col>
          <Title level={3}>Generated {this.state.lastFormat.toUpperCase()} Mapping </Title>        
        </Col>
        <Col>
          <Button onClick={() => this.downloadMapping()}>
            Download Mapping
            <DownloadOutlined />
          </Button>
        </Col>
      </Row>
      <SyntaxHighlighter language="ttl" style={docco}>
        {this.state.mapping}
      </SyntaxHighlighter>
    </>
    );
  };

}

  


  
  

