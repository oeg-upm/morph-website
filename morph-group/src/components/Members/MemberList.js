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
        const size = Object.keys(this.props).includes('size')?this.props.size:'small'; 
        const span = () =>{
            switch(size){
                case "xsmall":
                    return {}
                default:
                    return {xs:12,md:8,lg:6}
            }
        }
        return(
            <Row gutter={[16,16]}>
                {this.state.team.map((member, idx) => {
                    return(
                        <Col key={idx} span={() => span()} className="col-xs-6 col-md-4 col-lg-3 py-2 align-self-center">
                            <Member size={size} code={member.code}></Member>
                        </Col>
                    )
                })}
            </Row>
        )
    }
    async componentDidMount(){
        let response = {};
        if(Object.keys(this.props).includes('list')){
            response = this.props.list
        }else{
        response = await getAllMembers(this.props.status).catch(err => console.log(err))
        console.log(response)
        }
        await response.sort(function(a,b){
            return b.position < a.position;
          });
        this.setState({team:response})
    }

}

