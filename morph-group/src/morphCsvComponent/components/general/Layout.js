import React from 'react'
import {Row, Col, Layout, BackTop} from 'antd'
import DatasetSelector from './DatasetSelector'
import NavHeader from './NavHeader'
import FooterContent from './Footer'
const { Header, Content, Sider, Footer} = Layout;
export default function layoutSider(props){
    const dataset = props.dataset === undefined ? 'gtfs':props.dataset
    return(
        <Layout>
            <Layout>
                <Sider width={200}>
                    <DatasetSelector dataset={dataset}></DatasetSelector>
                </Sider>
                <Layout>
                    <Content
                    style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background:'#ffffff'
                    }}
                    >
                        <BackTop />
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
