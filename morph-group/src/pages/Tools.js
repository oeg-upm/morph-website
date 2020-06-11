import React from 'react'
import ToolList from '../components/Tools/ToolList'
import Layout from '../components/Layout'
import {Divider, Typography} from 'antd'
const {Title} = Typography
export default function Tools(props){
        return(
            <Layout>
                <Title level={2}>
                    Suite of tools:
                </Title>
                <ToolList/>
            </Layout>
        )
}