import React, {useState, useEffect} from 'react'
import {Card, Row, Col, Typography, Avatar, Tooltip} from 'antd'
import {getAllArticles} from '../requests/virtuoso'

const {Title} = Typography
const {Paragraph} = Typography
const {Meta} = Card
export default function CardList(props){
    const [articles, setArticles] = useState([])
    const [context, setContext] = useState({})
    useEffect(() => {
        getAllArticles().then((response) => {
            console.log(response)
            setArticles(response.data)
            setContext(context)
        }).catch((err) => console.log(err))

    },[])
    return (
    <div className="card-deck">
    { articles.map((card) => {
        return(
            <div className="card shadow-sm">
                <div className="card-header">
                    <h5 className="card-title title text-justify"><span property={context.name}>{card.name}</span></h5>  
                </div>
                <div className="card-body">
                    <p>
                        <span property={context.description}>
                            {card.description}
                        </span>
                    </p>
                </div>
                <div className="card-footer">
                    <Row gutter={[5,5]}>
                    {card.creator[0].person[0].name.map((name, idx) => {
                        return(
                        <Col>
                            <Tooltip title={name} placement="bottom">
                                <span property={context.person}><Avatar src={Object.keys(card.creator[0].person[0]).includes('image') ? card.creator[0].person[0].image[idx]:''} size="large"/></span>
                            </Tooltip>                    
                        </Col>
                        )
                    })}
                    </Row>                    
                </div>
            </div>
      )
    })}
 </div>
    )
}