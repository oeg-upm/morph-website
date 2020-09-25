import React from 'react';
import {Row, Col,Modal,Button, Typography} from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const {Title} = Typography;
export default class FileComparator extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible:false
        }
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };    
    render(){
        return(
            <div>
                <Button type="primary" >Compare with the original file</Button>
                <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                        <Row>
                            <Col xs={24} lg={12}>
                                <Title>Original</Title>
                                <SyntaxHighlighter language={this.props.language} style={docco}>
                                    {this.props.original}
                                </SyntaxHighlighter>                            
                            </Col>
                            <Col xs={24} lg={12}>
                                <Title>Simplified</Title>
                                <SyntaxHighlighter language={this.props.language} style={docco}>
                                    {this.props.simplified}
                                </SyntaxHighlighter>                            
                            </Col>
                        </Row>
                </Modal>
            </div>
        )
    }

}