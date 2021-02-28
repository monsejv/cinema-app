import React, { useState } from 'react'

import { Carousel, Row, Col } from 'react-bootstrap'

function Carousel21(props){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const { list } = props

    return(
        <Carousel activeIndex={index} onSelect={handleSelect} className={props.className} interval={null}>            
            <Carousel.Item>
                <Row>
                    { list.map(list => (
                        <Col lg={6}>
                            <img
                                className="d-block w-100"
                                src={list.img}
                                alt={list.title}
                            />
                            <Carousel.Caption className="text-left">
                                <p className="members">{list.position}</p> 
                                <h3 className="members mb-5">{list.title}</h3>
                                <p className="mt-5">{list.description}</p>
                            </Carousel.Caption>
                        </Col>
                    ))
                    }
                </Row>
            </Carousel.Item>
        </Carousel>
    )
}

export default Carousel21