import React from 'react'
import ArticleList from '../components/Articles/ArticleList'
import Layout from '../components/Layout'
import {Divider, Row, Col, Typography} from 'antd'
const {Title} = Typography
export default function Articles(props){
        return(
            <Layout>
                <Row justify="">
                    <Col className="">
                        <Title level={2}>
                            Articles
                        </Title>
                    </Col>
                </Row>
                <ArticleList/>
            </Layout>
        )
}