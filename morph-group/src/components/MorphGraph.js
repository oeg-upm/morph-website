import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
import {Row, Col} from 'antd'
import {membersFromRdfJSonToGraph} from '../requests/virtuoso'



export default function MorphGraph(props){
    let graph = null;    
    const width =  400 > window.width? window.width - 100:400;
    const height =  400 > window.height? window.height :400;
    const ref = React.useRef(null);
    const getData = () => {
        return new Promise((resolve, reject) => {
            membersFromRdfJSonToGraph().then((response) => {
                resolve(response)
            }).catch((err) => console.log(err))
        })
    }
    useEffect(() => {
        getData().then((data) => {
            console.log(data)
            if (!graph) {
                graph = new G6.Graph({
                  container: ReactDOM.findDOMNode(ref.current),
                  width:width,
                  height:height,
                  fitView:true,
                  modes:{
                    default: [
                        {
                          type: 'edge-tooltip',
                          formatText: function formatText(model) {
                            const text = model.tooltip
                            return text;
                          },
                        },
                      ]                      
                  },
                  layout: {
                    type: 'circular',
                  },
                  defaultNode: {
                    type: 'image',
                    size: [50, 50],
                    labelCfg: {
                        position: 'bottom',
                      },
                  },
                  defaultEdge: {
                    type: 'line',
                    size:3
                  },
                  nodeStateStyles: {
                    active: {
                      opacity: 1,
                    },
                    inactive: {
                      opacity: 0.2,
                    },
                  },
                  edgeStateStyles: {
                    active: {
                      stroke: '#999',
                    },
                  },
                  renderer: 'svg'                  
                });
              }
              graph.data(data);
              graph.render();
                        
        })

    }, [])
    return(
        <Row>
            <Col>
            <div ref={ref}></div>
            </Col>
        </Row>
    )
}
