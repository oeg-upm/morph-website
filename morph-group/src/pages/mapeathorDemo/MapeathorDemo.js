import React from 'react'
import Layout from '../../components/Layout'
import {Form,Select,Input,Radio,Button,Upload,Row,Col,Typography } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import {sendData} from '../../requests/mapeathorApi'
const {Title, Paragraph} = Typography
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


export default function MapeathorDemo(props){
    const onFinish = values => {
        console.log('Received values of form: ', values);
        if(values.file !== undefined)
            values.file = values.file[0]
        sendData(values).then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        });
        
      }    
    return(
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
            <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        action="https://morph.oeg.fi.upm.es/tool/mapeathor/api/" 
        method="post" 
        enctype="multipart/form-data"
        initialValues={{
            ['format']:'r2rml'
        }}
      >
          <Form.Item name="drive-url" label="Google Spreadsheet URL:">
                <Input placeholder="Introduce your google drive spreadsheet url"></Input>
          </Form.Item>
        <Form.Item name="format" label="Output format:">
          <Radio.Group>
            <Radio.Button value="r2rml">R2RML</Radio.Button>
            <Radio.Button value="rml">RML</Radio.Button>
            <Radio.Button value="yarrrml">YARRRML</Radio.Button>
          </Radio.Group>
        </Form.Item>

  
        <Form.Item
        name="file"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="longgggggggggggggggggggggggggggggggggg"
      >
        <Upload name="file" action="https://morph.oeg.fi.upm.es/tool/mapeathor/api/" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
  
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    
        </Layout>
    )   
}




  


  
  

