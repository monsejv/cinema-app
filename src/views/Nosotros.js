import React, {useEffect, useState} from 'react'

import { Row, Col, Container } from 'react-bootstrap'
import HeaderBox from '../components/HeaderBox'
import NavBar from '../components/NavBar'
import ImgText from '../components/ImgText'
import CarousellDouble from '../components/CarousellDouble'
import CarouselUs from '../components/CarouselUs'
import Footer from '../components/Footer'
import {Parallax} from 'react-scroll-parallax'
import { team } from '../lib/team'


function Nosotros(){
    const [disabledParallax, setParallax] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
        let widthPage = window.innerWidth;
        if (widthPage < 577) { setParallax(true) } 
      }, [])

    return(
        <main>
            <Container fluid fluid className="paddings-container">
                <NavBar />
                <HeaderBox 
                    image="/media/Nosotros/nosotros-header.png"
                    imageTablet="/media/Tablet/Nosotros/nsotros-header.png"
                    title="<b>EMPODERAMOS</b> A NUESTRO EQUIPO PARA LOGRAR <b>PRODUCCIONES</b> DE CLASE MUNDIAL."
                    description="Ser una de las compañías de entretenimiento de mayor prestigio a nivel mundial en la creación, producción
                    y distribución de contenido audiovisual en todas sus formas, es nuestro obejetivo principal."
                    className="d-none"
                    sizeMovil="12"
                    classMovil="other"
                />
                <Parallax
                        className="custom-class"
                        y={[50, -50]}
                        disabled={disabledParallax}
                        expand="true"
                        tag="figure">
                    <Row className="pt-5 pb-4 context-us">
                        <Col lg={6} className="img-us">
                            <ImgText img="/media/Nosotros/Frame-5.png" disabled={disabledParallax} className="text-left text-low-two-colors" text="ROMPIENDO BARRERAS" />
                        </Col>
                        <Col lg={6} className="text-us">
                            <h1 className="title text-left mb-5">Nosotros</h1>
                            <p>En Cinema226, tenemos en desarrollo una veintena de películas y media docena de series, con historias originales 
                            y provocativas.</p>
                            <p>Con ellas, intentamos mantener un sensible equilibrio entre la visión comercial que debe tener una compañía de 
                            contenidos que pretende mantenerse en el tiempo, y ese sello artístico y de calidad que el público demanda, 
                            con el cual queremos identificarnos.</p>
                            <p>Para nosotros, “prestigio” es la palabra clave.</p>
                        </Col>
                    </Row>
                </Parallax>
                <div className="height-100"></div>
                <Parallax
                        className="custom-class"
                        y={[40, -10]}
                        disabled={disabledParallax}
                        expand="true"
                        tag="figure">
                    <Row className="pt-4 pb-4">
                        <Col lg={6} className="z-9">
                            <p>Nuestra historia empieza en 2013, cuando Samantha Guillén y Adrián Bazán se unen para crear lo que hoy en día 
                            conocemos como Cinema226.</p>
                            <p>Basamos nuestro nombre en el estímulo fiscal que rescató a la industria cinematográfica: 
                            Art. 226 de la Ley del Impuesto Sobre la Renta.</p>
                            <p>En 2017 se unen en un sueño común, siete casas productoras con la idea de hacer frente a las necesidades 
                            del mercado audiovisual actual, cada una de ellas con enfoques y trayectorias diferentes, 
                            pero complementarias que, al juntarse crearon un grupo fuerte y competitivo para el mercado audiovisual.</p>
                        </Col>
                        <Col lg={6} className="z-0">
                            <ImgText img="/media/Nosotros/Frame-6.png" disabled={disabledParallax} text="REFLEJAMOS EL TRABAJO DE<br/> <b>MENTES CREATIVAS</b>,
                            INNOVACIÓN</br> Y <b>ORGULLO MEXICANO</b>" className="text-right text-low-two-colors" />
                        </Col>
                    </Row>
                </Parallax>
                <div className="height-100"></div>
                <Parallax
                        className="custom-class"
                        y={[40, -20]}
                        disabled={disabledParallax}
                        expand="true"
                        tag="figure">
                    <Row className="pt-5 pb-5">
                        <Col>
                            <h1 className="title text-left pb-5">NUESTRO EQUIPO</h1>
                            <div className="d-none d-lg-block">
                                <CarousellDouble list={team} className="nosotros" />    
                            </div>
                            <div className="d-block d-lg-none">
                                <CarouselUs list={team} className="nosotros-mobile" />
                            </div>
                        </Col>
                    </Row> 
                </Parallax>
                <div className="height-100"></div>
                <Footer />
            </Container>
        </main>
    )
}

export default Nosotros