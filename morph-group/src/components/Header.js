import React from 'react'
import {Link}  from 'react-router-dom'
import {Menu, Row, Col, Dropdown} from 'antd'
import logo from '../assets/logo.png'

import {
  HomeOutlined,
  CopyOutlined,
  ToolOutlined,
  ApiOutlined,
  FundProjectionScreenOutlined
} from '@ant-design/icons';

const {SubMenu} = Menu;


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
                <Col span={6}>
                <a href="/">
                    <img className="img-fluid" src={logo} alt="" style={{height:60}}/>
                </a>
                </Col>
                <Col span={18}>
                <Menu mode="horizontal" style={{justifyContent:"flex-end"}}>
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>        
                    <Menu.Item key="articles" icon={<CopyOutlined />}>
                    <Link to="/articles">Articles</Link>
                    </Menu.Item>
                    <Menu.Item key="tools" icon={<ToolOutlined />}>
                        <Link to="/tools">Tools</Link>
                    </Menu.Item>
                    <SubMenu key="demos" icon={<FundProjectionScreenOutlined />} title="Demos">
						<Menu.Item>
							<Link to="/demo/mapeathor">Mapeathor Demo</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/demo/morph-csv">Morph-CSV Demo</Link>
						</Menu.Item>     
						<Menu.Item>
							<Link to="/demo/morph-kgc">Morph-KGC Demo</Link>
						</Menu.Item>         
					</SubMenu>             
                    <Menu.Item key="api" icon={<ApiOutlined />}>
                        <a href="https://morph.oeg.fi.upm.es/sparql">Endpoint</a>
                    </Menu.Item>
                </Menu>                
                </Col>
            </Row>

    
        )
    }
};

export default Header;
