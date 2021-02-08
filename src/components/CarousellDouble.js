import React, { useState } from 'react'

import { Carousel, Row, Col } from 'react-bootstrap'

function CarousellDouble(props){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const { list } = props

    return(
        <Carousel activeIndex={index} onSelect={handleSelect} className={props.className} data-interval="90000">            
            <Carousel.Item>
                <Row>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[0].img}
                            alt={list[0].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[0].position}</p> 
                            <h3 className="members">{list[0].title}</h3>
                        </Carousel.Caption>
                    </Col>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[1].img}
                            alt={list[1].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[1].position}</p> 
                            <h3 className="members">{list[1].title}</h3>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[2].img}
                            alt={list[2].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[2].position}</p> 
                            <h3 className="members">{list[2].title}</h3>
                        </Carousel.Caption>
                    </Col>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[3].img}
                            alt={list[3].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[3].position}</p> 
                            <h3 className="members">{list[3].title}</h3>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[4].img}
                            alt={list[4].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[4].position}</p> 
                            <h3 className="members">{list[4].title}</h3>
                        </Carousel.Caption>
                    </Col>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[5].img}
                            alt={list[5].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[5].position}</p> 
                            <h3 className="members">{list[5].title}</h3>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[6].img}
                            alt={list[6].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[6].position}</p> 
                            <h3 className="members">{list[6].title}</h3>
                        </Carousel.Caption>
                    </Col>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[7].img}
                            alt={list[7].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[7].position}</p> 
                            <h3 className="members">{list[7].title}</h3>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[8].img}
                            alt={list[8].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[8].position}</p> 
                            <h3 className="members">{list[8].title}</h3>
                        </Carousel.Caption>
                    </Col>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[9].img}
                            alt={list[9].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[9].position}</p> 
                            <h3 className="members">{list[9].title}</h3>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[10].img}
                            alt={list[10].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[10].position}</p> 
                            <h3 className="members">{list[10].title}</h3>
                        </Carousel.Caption>
                    </Col>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[11].img}
                            alt={list[11].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[11].position}</p> 
                            <h3 className="members">{list[11].title}</h3>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[12].img}
                            alt={list[12].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[12].position}</p> 
                            <h3 className="members">{list[12].title}</h3>
                        </Carousel.Caption>
                    </Col>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[13].img}
                            alt={list[13].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[13].position}</p> 
                            <h3 className="members">{list[13].title}</h3>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[14].img}
                            alt={list[14].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[14].position}</p> 
                            <h3 className="members">{list[14].title}</h3>
                        </Carousel.Caption>
                    </Col>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[15].img}
                            alt={list[15].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[15].position}</p> 
                            <h3 className="members">{list[15].title}</h3>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <Col lg={6}>
                        <img
                            className="d-block w-100"
                            src={list[16].img}
                            alt={list[16].title}
                        />
                        <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                            <p className="members">{list[16].position}</p> 
                            <h3 className="members">{list[16].title}</h3>
                        </Carousel.Caption>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarousellDouble