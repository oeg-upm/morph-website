import React from 'react'
import {Link}  from 'react-router-dom'
import {Menu, Row, Col} from 'antd'
import logo from '../assets/logo.svg'
class Header extends React.Component {
    render() {
        return (
            <Row  align="middle" style={{marginBottom:10}}>
                <Col span={8}>
                    <img className="img-fluid" src={logo} alt=""/>
                </Col>
                <Col span={16} justify="right" align="right">
                <Menu mode="horizontal" style={{ borderBottom: 'none', paddingTop: 16 }}>
                    <Menu.Item key="portfolio" style={{ float: 'right' }}>
                        <Link to="/">Tools</Link>
                    </Menu.Item>
                    <Menu.Item key="posts" style={{ float: 'right' }}>
                    <Link to="/">Team</Link>
                    </Menu.Item>
                    <Menu.Item key="home" style={{ float: 'right' }}>
                    <Link to="/">Home</Link>
                    </Menu.Item>        
                </Menu>                
                </Col>
            </Row>

    
        )
    }
};

export default Header;
