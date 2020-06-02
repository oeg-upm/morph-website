import React from 'react'
import Layout from '../components/Layout'
import {getCodeMember} from '../requests/virtuoso'
import MemberCard from '../components/Members/MemberCard'




export default class Member extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            code:""
        }
    }
    async componentDidMount(){
        const {member} = await this.props.match.params
        const response = await getCodeMember(member).catch(err => console.log(err))    
        this.setState({code:member})
    }

    render(){
        console.log(this.state.code)
        return(
            <Layout>
                <MemberCard code={this.state.code} />
            </Layout>
        )
    }
}