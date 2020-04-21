import React from 'react'
import {TwitterOutlined, LinkedinFilled, GithubOutlined, MailOutlined} from '@ant-design/icons'
import {Row, Col, Avatar,Tooltip, Typography, Tag} from 'antd'

const {Text} = Typography
export default function Member({data, context}){
/** 
 * {
  "github": "http://github.com/w0xter",
  "webpage": "http://luispozo.es",
  "name": "Luis Pozo Gilo",
  "memberOf": "OEG",
  "jobTitle": "none",
  "id": "http://example.com/resources/Person/0",
  "image": "http://www.luispozo.es/image/yoHead.png",
  "email": "luis.pozo@upm.es",
  "linkedin": "http://www.linkedin.com/in/luis-pozo-472b6317a/"
}
*/
const noSocialMedia = (!Object.keys(data).includes('linkedin') && 
    !Object.keys(data).includes('github') &&
    !Object.keys(data).includes('twitter') &&
    !Object.keys(data).includes('email') );
    return(
        <>
        <Row justify="center">
            <Col>
            <span property={context.image}>
                <Avatar size={150} src={data.image}></Avatar>
            </span>
            </Col>
        </Row>
        <Row justify="center">
            <Col className="text-center">
                <span property={context.name}>
                    <Text strong>{data.name}</Text>
                </span>
            </Col>
        </Row>        
        <Row justify="center" className="mt-1">
                <Col className="">
                    <span property={context.jobTitle}>
                    <Text>
                        {data.jobTitle}
                    </Text>
                    </span>
                </Col>
        </Row>        
        <Row justify="center" gutter={[8,8]}>
            {Object.keys(data).includes('twitter') ? (
                <Col >
                    <a target="_blank" href={"https://twitter.com/" + data.twitter}>
                    <TwitterOutlined />
                    </a>
                </Col>
                ):''}
                {Object.keys(data).includes('linkedin') ? (
                <Col >
                    <a target="_blank" href={data.linkedin}>
                    <LinkedinFilled />
                    </a>
                </Col>
                ):''}
                {Object.keys(data).includes('github') ? (
                <Col >
                    <a target="_blank" href={"https://github.com/" + data.github}>
                    <GithubOutlined />
                    </a>
                </Col>
                ):''}
                {Object.keys(data).includes('email') ? (
                <Col >
                    <a target="_blank" href={"mailto:" + data.email}>
                    <MailOutlined />
                    </a>
                </Col>                 
                ):''}
                {noSocialMedia ? (
                    <Col>
                    <MailOutlined style={{opacity:0}} />
                    </Col>
                ):''}  
        </Row>        
        </>
        // <div>
        //     <div className="row col-8 mx-auto tex-center">
        //         <img src={images('./' + data.source)} alt="" className="memberImg img-fluid mx-auto rounded-circle"/>
        //     </div>
        //     <h5 className="text-center oswald">
        //         {data.name}
        //         <span> </span>
        //         {data.institution.length !== 0 ? (<small><span className="badge badge-info">{data.institution}</span> </small>):''}
        //     </h5>
        //     <h6 className="text-center greyText montserrat">
        //         {data.role} <span> </span>
        //         {data.group.length !== 0 ? ( <small><span className="badge badge-primary">{data.group}</span></small>):''}
        //     </h6>
        //     <div className="row justify-content-center memberLink">
        //         {data.twitter.length !== 0 ? (
        //         <div >
        //             <a target="_blank" href={"https://twitter.com/" + data.twitter}>
        //                 <FaTwitter/>
        //             </a>
        //         </div>
        //         ):''}
        //         {data.linkedin.length !== 0 ? (
        //         <div className="col-1">
        //             <a target="_blank" href={data.linkedin}>
        //                 <FaLinkedin/>
        //             </a>
        //         </div>
        //         ):''}
        //         {data.github.length !== 0 ? (
        //         <div className="col-1">
        //             <a target="_blank" href={"https://github.com/" + data.github}>
        //                 <FaGithub/>
        //             </a>
        //         </div>
        //         ):''}
        //         {data.email.length !== 0 ? (
        //         <div className="col-1">
        //             <a target="_blank" href={"mailto:" + data.email}>
        //                 <MdEmail/>
        //             </a>
        //         </div>                 
        //         ):''}                               
        //     </div>
        // </div>
    )
}
