import React, {useEffect, useState} from 'react'

import {Container, Row, Col, Image} from 'react-bootstrap'
import NavBar from '../components/NavBar'
import HeaderBox from '../components/HeaderBox'
import Carousell from '../components/Carousel'
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'
import { borderless, logbook } from '../lib/borderless'

function Borderless(){
    const [disabledParallax, setParallax] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
        let widthPage = window.innerWidth
        if (widthPage < 577) { setParallax(true) } 
      }, [])

    return(
       <main> 
           <Container fluid className="paddings-container">
            <NavBar />
            <HeaderBox 
                    image="https://cinema226.s3-us-west-2.amazonaws.com/C226+web+page2021/Recursos+Borderless/Img/Header.png"
                    imageTablet="https://cinema226.s3-us-west-2.amazonaws.com/C226+web+page2021/Recursos+Borderless/Img/Header.png"
                    title="CREEMOS EN <b>EL PODER DE LAS
                    HISTORIAS</b> QUE TRASCIENDEN
                    EN LA MENTE DE LAS PERSONAS."
                    description="El trabajo que creamos vive en la intersección de la calidad y la sorpresa, esto nos ayuda a posicionar nuestras historias en la cultura a través de valores e ideales que nos caracterizan."
                    className="d-none"
                    sizeMovil="12"
                    classMovil="other"
                    loadFunction={""}
                />
            <Row className="pt-5 pb-5">
                <Col sm={12}>
                    <div className="d-none d-sm-block">
                        <Carousell list={borderless} wrapperClass="awards" classNames="borderless" />
                    </div>
                    <div className="d-block d-sm-none">
                        <Image src="https://cinema226.s3-us-west-2.amazonaws.com/C226+web+page2021/Recursos+Movil/Recursos+Borderless/Premios+2018.png" width="100%" />
                    </div>
                </Col>
            </Row>
            <Row className="pt-5 pb-5">
                <Col sm={12}>
                    <h3 className="title text-left">LOGBOOK NEWS</h3>
                </Col>
                    { logbook.map(logbook => (
                        <ServiceCard 
                            col={logbook.col} 
                            image={logbook.img}
                            imageTablet={logbook.imgTablet}
                            title={logbook.title}
                            disabled={disabledParallax}
                            text={logbook.description}
                            width="100%"
                            height="auto"
                            y1={50}
                            y2={-10} />
                        ))
                    }
                 </Row>
            <Footer />
           </Container>
       </main> 
    )
}

export default Borderless