import React from 'react'
import {Link}  from 'react-router-dom'
import {Menu, Row, Col} from 'antd'
import logo from '../assets/logo.svg'
class Header extends React.Component {
    render() {
        return (
            <Row  align="middle" style={{marginBottom:16}} justify="space-between">
                <Col>
                    <img className="img-fluid" src={logo} alt=""/>
                </Col>
                <Col>
                <Menu mode="horizontal" style={{ borderBottom: 'none', paddingTop: 16 }}>
                    <Menu.Item key="home">
                        <Link to="/">Home</Link>
                    </Menu.Item>        
                    <Menu.Item key="articles">
                    <Link to="/articles">Articles</Link>
                    </Menu.Item>
                    <Menu.Item key="tools">
                        <Link to="/tools">Tools</Link>
                    </Menu.Item>
                </Menu>                
                </Col>
            </Row>

    
        )
    }
};

export default Header;
