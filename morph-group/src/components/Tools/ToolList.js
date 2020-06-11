import React from 'react'
import {Row, Col, List} from 'antd'
import {getAllTools} from '../../requests/virtuoso'
import ToolCard from './ToolCard'
export default class ToolList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tools:[]
        }
    }

    async componentDidMount(){
        if(Object.keys(this.props).includes('tools')){
            console.log(this.props.tools)
            this.setState({tools:this.props.tools})
        }else{
            let response = await getAllTools().catch((err) =>  console.log(err))
            console.log(response)
            await response.sort(function(a,b){
                return new Date(b.datePublished) - new Date(a.datePublished);
              });            
            let data = response
            if(this.props.limit !== -1)
              data = await response.slice(0, this.props.limit)            
            this.setState({tools:data})
        }
    }

    render(){
        return(
            <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
            dataSource={this.state.tools}
            renderItem={item => (
              <List.Item>
                 <ToolCard size="small" code={item.code}/>
              </List.Item>
            )}/>
        )
    }
}   