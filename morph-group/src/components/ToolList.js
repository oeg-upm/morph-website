import React from 'react'
import {} from 'antd'
import {getAllTools} from '../requests/virtuoso'
export default class ToolList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tools:[],
            context:[]
        }
    }

    async componentDidMount(){
        let allData = await getAllTools().catch((err) =>  console.log(err))
        let limit = await this.props.limit
        let data = await limit !== -1?allData.splice(0, limit):allData
        this.setState({tools:data})
        this.setState({context:this.props.context})
    }

    render(){
        return(
            <Row>
            {
            this.state.tools.map((tool) => {
                
            })
            }
            </Row>
        )
    }
}   