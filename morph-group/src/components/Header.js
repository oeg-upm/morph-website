import React from 'react'
import {Link}  from 'react-router-dom'
import {Menu, Row, Col, Dropdown} from 'antd'
import logo from '../assets/logo.png'


const demos = () => {
    return(
        <Menu>
            <Menu.Item>
                <Link to="/demo/mapeathor">Mapeathor Demo</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to="/demo/morph-csv">Morph-CSV Demo</Link>
            </Menu.Item>     
            <Menu.Item>
                <Link to="/demo/morph-kgc">Morph-KGC Demo</Link>
            </Menu.Item>         
        </Menu>
    )
}

class Header extends React.Component {
    render() {
        return (
            <Row  align="bottom" style={{marginBottom:16}} justify="space-between">
                <Col>
                <a href="/">
                    <img className="img-fluid" src={logo} alt="" style={{height:60}}/>
                </a>
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
                    <Menu.Item key="demos">
                        <Dropdown overlay={demos} placement="bottomCenter" arrow>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Demos
                        </a>                            
                        </Dropdown>
                    </Menu.Item>                    
                    <Menu.Item>
                        <a href="https://morph.oeg.fi.upm.es/sparql">SPARQL Endpoint</a>
                    </Menu.Item>
                </Menu>                
                </Col>
            </Row>

    
        )
    }
};

export default Header;
