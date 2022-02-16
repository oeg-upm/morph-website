import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {Row, Col, Space} from 'antd'

export default function Layout(props){
    return(
        <div className="container-fluid-xs container-fluid-sm container-fluid-md container-lg container-xl">
            <Header />
            <div className="fullScreen">
                {props.children}
            </div>
            <Footer></Footer>
        </div>

    )
}
