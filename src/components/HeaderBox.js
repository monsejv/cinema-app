import React from 'react'

import {Row, Col, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function HeaderBox(props){
    const styles = ['btn btn-outline-primary']

    if (props.className) styles.push(props.className)

    const btnClass = styles.join(' ')
    return(
        <Row className="pt-5 pb-5">
            <Col xs={props.sizeMovil} sm={props.sizeMovil} lg={5} className="f-right">
                <Image src={props.image} className="img-header d-none d-lg-block" />
                <Image src={props.imageTablet} className="img-header d-block d-lg-none" />
                {props.textImage ?  <p dangerouslySetInnerHTML={{ __html: `${props.textImage}`}}></p> : false }
            </Col>
            <Col xs={props.sizeMovil} sm={props.sizeMovil} lg={7} className={props.classMovil}>
                <h1 className="text-two-colors" dangerouslySetInnerHTML={{ __html: `${props.title}`}}></h1> 
                <p className="w-95 pt-5 pb-4">{props.description}</p>
                <Link to={props.toLink} className={btnClass}>{props.buttonText}</Link>
            </Col>
        </Row>
    )
}

export default HeaderBox