import React from 'react'
import Layout from '../../components/Layout'
import {Form,Select,Input,Radio,Button,Upload,Row,Col,Typography } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

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


const options = [
    { label: 'RML', value: 'rml' },
    { label: 'R2RML', value: 'r2rml' },
    { label: 'YARRRML', value: 'yarrrml' },
  ];

export default class Demo extends React.Component {
  state = {
    file:null,
    format:"rml",
    uploading: false,
    imageUri:null,
    uploadProgress:0,
    uploadStatus:false,
    upload:false,
    driveUrl:"",
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
   handleClick = event => {
    // this.hiddenFileInput.current.click();
  };
   handleFileUpload = (e) => {
      e.preventDefault();
      console.log(this.state.file)
      if (!this.isValidFileType(this.state.file.type)) {
          alert('Only XLSX files are allowed');
          return;
      }
      
      this.setState({uploading:true});
      const formData = new FormData();
      if(this.state.file === null){
        formData.append('url', this.state.url);
      }else{
        formData.append('file', this.state.file);
        formData.append('format', this.state.format);
      }

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
          console.log(resp)
          this.setState({uploadStatus:true});
          this.setState({uploading:false});
          this.getBase64(this.state.file, (uri) => {
              this.setState({imageUri:uri});
          });
      })
      .catch((err) => console.error(err));
  };

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
              <Form.Item label="Google Spreadsheet URL">
                  <Input onChange={(e) => this.setState({driveUrl:e.targe.value})}></Input>
              </Form.Item>
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
              <Form.Item>
                <Button className="upload-button" onClick={this.handleFileUpload} type="submit">
                    Upload
                </Button>
              </Form.Item>
          </form>
          
          {/* {(this.state.uploading)
              ?
              <div className="progress-bar-container">
                  <CircularProgressbar
                      value={this.state.uploadProgress}
                      text={`${this.state.uploadProgress}% uploaded`}
                      styles={buildStyles({
                          textSize: '10px',
                          pathColor: 'teal',
                      })}
                  />
              </div>
              : null
          } */}

      </div>
        </Layout>
      // <>

      //   <Button
      //     type="primary"
      //     onClick={this.handleUpload}
      //     disabled={fileList.length === 0}
      //     loading={uploading}
      //     style={{ marginTop: 16 }}
      //   >
      //     {uploading ? 'Uploading' : 'Start Upload'}
      //   </Button>
      // </>
    );
  }

}

  


  
  

