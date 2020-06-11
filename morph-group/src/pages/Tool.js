import React from 'react'
import Layout from '../components/Layout'
import ToolCard from '../components/Tools/ToolCard'
import {Spin} from 'antd'



export default class Tool extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            code:""
        }
    }
    async componentDidMount(){
        const {code} = await this.props.match.params
        this.setState({code:code})
    }

    render(){
        console.log(this.state.code)
        return(
            <Layout>
                {this.state.code.length !== 0 ?(
                <ToolCard code={this.state.code} />
                ):(
                    <Spin></Spin>
                )}
            </Layout>
        )
    }
}