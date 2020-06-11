import React from 'react'
import Member from './MemberCard'
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
                {this.state.team.map((member, idx) => {
                    return(
                        <Col key={idx} xs={12} md={8} lg={6} className="col-xs-6 col-md-4 col-lg-3 py-2 align-self-center">
                            <Member size="small" code={member.code}></Member>
                        </Col>
                    )
                })}
            </Row>
        )
    }
    async componentDidMount(){
        const response = await getAllMembers(this.props.status).catch(err => console.log(err))
        console.log(response)
        await response.sort(function(a,b){
            return b.position < a.position;
          });
        this.setState({team:response})
    }

}

