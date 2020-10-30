import React from 'react'
import {Row, Col, Menu} from 'antd'
import {MailOutlined,AppstoreOutlined,SettingOutlined} from '@ant-design/icons'
import {data} from '../../data/data'
import { Link } from 'react-router-dom';
const {SubMenu} = Menu;
export default class DatasetSelector extends React.Component{
        state = {
            dataset:'gtfs'
        }

    render(){
        return(
            <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            //defaultOpenKeys={this.state.dataset}
            mode="inline"
            style={{ height: '100%', borderRight:'10 #000000'}}
          >
              <Menu.Item>
                  <Link to="/demo/morph-csv">Evaluation</Link>
              </Menu.Item>
              {Object.keys(data).map((dataset, idx) => {
                  return(
                      <SubMenu
                        key={dataset.toString()}
                        title={dataset.toUpperCase()}
                      >
                          {Object.keys(data[dataset]["queries"]).map((query,jdx) => {
                              return(
                                <Menu.Item key={dataset + query}>
                                    <a href={`/demo/morph-csv/run/${dataset}/${jdx + 1}`}>
                                    {"Query" + query}
                                    </a>
                                </Menu.Item>
                              )
                          })}

                      </SubMenu>
                  )
              })}
              </Menu>
        )
    }
}
