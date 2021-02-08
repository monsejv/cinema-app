import React from 'react'

import { Card, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Parallax, useController } from 'react-scroll-parallax'


function ServiceCard(props){
    const { parallaxController } = useController();
    const widthPages = window.innerWidth;
    const y1 = props.y1;
    const y2 = props.y2;

    const load = () => {
        if(widthPages > 767){
            parallaxController.update()
        }
    }
    
    return(
        <Col md={props.col}>
            <Parallax
                className="custom-class"
                disabled={props.disabled}
                y={[y1, y2]} 
                expand={true}
                tag="figure">
            <Card className={props.className} data-title={props.title} >
                <Card.Img src={props.image} className="d-none d-sm-block" onLoad={load} />
                <Card.Img src={props.imageTablet} className="d-block d-sm-none" onLoad={load} />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <div className="wrapper-text">
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                        { props.textButton ? <Link to={{ pathname: `${props.link}`, state: { data: `${props.data}`} }} className="btn btn-primary">{props.textButton}</Link> : false }
                    </div>
                </Card.Body>
            </Card>
            </Parallax>
            <div className="height-100"></div>
        </Col>
    )
}

export default ServiceCard