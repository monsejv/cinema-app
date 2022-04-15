import React, {useEffect, useState} from 'react'
import { Parallax } from 'react-scroll-parallax';

import NavBar from '../components/NavBar'
import Header from '../components/Header'
import {Container, Row, Col} from 'react-bootstrap'
import HeaderBox from '../components/HeaderBox'
import Carousell from '../components/Carousel'
import CarousellButton from '../components/CarouselButton'
import Video from '../components/Video'
import ServiceCard from '../components/ServiceCard'
import Loader from '../components/Loader'
import Footer from '../components/Footer'
import proyectsArray from '../lib/proyects'
import originals from '../lib/originals'
import  world  from '../lib/world'
import  services  from '../lib/services'

function Home (){
    const [progress, setProgress] = useState(0);
    const [loaderClass, setClass] = useState('loader');
    const [disabledParallax, setParallax] = useState(false);
    let widthPage = window.innerWidth;

    
    useEffect(() => {
        window.scrollTo(0, 0) 
        if (widthPage < 577) { setParallax(true) } 
        setTimeout(() => {
            setProgress(25)
            setTimeout(() => {
                setProgress(50)
                setTimeout(() => {
                    setProgress(75)
                    setTimeout(() => {
                        setProgress(100)
                        setTimeout(() => {
                            setClass('loader fade-out')
                        }, 1000);
                      }, 1500);
                  }, 1000);
              }, 1000);
          }, 1000);
      }, [])

    return( 
        <main>
            <Loader loaderClass={loaderClass} progress={progress} />
            <Video />
            <Container fluid  className="paddings-container" >
                <NavBar />
                <Header />
                <Parallax
                    className="custom-class"
                    disabled={disabledParallax}
                    y={[50, -10]}
                    expand="true"
                    tag="figure">
                        <HeaderBox 
                            image="/media/Recursos-Index/Img/header.png"
                            imageTablet="/media/Tablet/Index/img/nosotros.png"
                            textImage="Samantha Guillén (Founder, CEO)<br/>Adrián Bazán (Founder, CFO)"
                            title="SOMOS UNA DE LAS CASAS PRODUCTORAS <b>MÁS PROMETEDORAS</b> DE MÉXICO."
                            description="En Cinema226, tenemos en desarrollo una veintena de películas y media docena de series, con historias originales y provocativas."
                            buttonText="Nosotros"
                            toLink="/nosotros"
                            sizeMovil="6"
                            classMovil="size-mobile"
                        />
                    </Parallax>
                    <Parallax
                        className="custom-class"
                        disabled={disabledParallax}
                        y={[70, -10]}
                        expand="true"
                        tag="figure">
                             <Row className="pt-5 pb-5">
                                <Col xs={12}>
                                    <h1 className="title text-left mb-5">PROYECTOS</h1>
                                    <CarousellButton list={proyectsArray} className="proyects" />
                                </Col>
                            </Row>
                    </Parallax> 
                    <Parallax
                        className="custom-class"
                        disabled={disabledParallax}
                        y={[30, -10]}
                        expand="true"
                        tag="figure">
                            <Row className="pt-5 pb-5">
                                <Col>
                                    <h1 className="title text-left mb-5">ORIGINALS</h1>
                                    <CarousellButton list={originals} className="originals" />
                                </Col>
                            </Row>
                    </Parallax>
                    <Row className="pt-5 pb-5">
                        <Col sm={12}>
                            <h1 className="title text-left mb-5">SERVICIOS</h1>
                        </Col>
                            { services.map(service => (
                                    <ServiceCard 
                                        col={service.col} 
                                        image={service.img}
                                        imageTablet={service.imgTablet}
                                        width="90%"
                                        disabled={disabledParallax}
                                        isService={true}
                                        height="auto"
                                        title={service.title}
                                        text={service.description}
                                        textButton={service.textButton}
                                        link={service.link}
                                        y1={50}
                                        y2={-50} />
                                ))
                            }
                    </Row>
                    <Parallax
                        className="custom-class"
                        disabled={disabledParallax}
                        y={[30, -10]}
                        expand="true"
                        tag="figure">
                            <Row className="pt-5 pb-5">
                        <Col xs={12}>
                            <h1 className="title text-left mb-5">PRESENCIA EN EL MUNDO</h1>
                            <Carousell list={world} wrapperClass="carousel-costume" classNames="presentials" />
                        </Col>
                        </Row>
                    </Parallax>
                <Footer />
            </Container>

        </main>  
    )
}

export default Home