import Header from './Header'
import React from 'react'
import {Row, Col, Space} from 'antd'

export default function Layout(props){
    return(
        <div className=" container-fluid-xs container-fluid-sm container-fluid-md container-lg container-xl">
            <Header />
            {props.children}
        </div>

    )
}