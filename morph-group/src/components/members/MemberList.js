import React from 'react'
import Member from './MemberAvatar'
import {Row, Col} from 'antd'
import {getAllMembers, getMemberInfo} from '../../requests/virtuoso' 

export default class  MemberList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            context:{},
            team:[]
        }
    }
    render(){
        return(
            <Row gutter={[16,16]}>
                {this.state.team.map((member) => {
                    return(
                        <Col xs={12} md={8} lg={6} className="col-xs-6 col-md-4 col-lg-3 py-2 align-self-center">
                            <Member data={member} context={this.state.context}></Member>
                        </Col>
                    )
                })}
            </Row>
        )
    }
    componentDidMount(){
        getMemberInfo("Luis Pozo Gilo").then((response) => {
            console.log("MEMBER INFO!!")
            console.log(response)
        }).catch((err) => console.log(err))
        getAllMembers().then((response) => {
            this.setState({team:response.data, context:response.context})
        }).catch((err) => console.log(err))
    }

}

