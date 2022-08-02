import React, {useEffect, useState, useRef} from 'react'

import { Row, Col, Container, Image } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import ImgText from '../components/ImgText'
import ReactPlayer from 'react-player'
import Footer from '../components/Footer'
import {Parallax} from 'react-scroll-parallax'


function Nosotros(){
    const [disabledParallax, setParallax] = useState(false);

    let videoYoutube = useRef(null)

    const styles = ['wrapper-trailer']

    useEffect(() => {
        window.scrollTo(0, 0)
        let widthPage = window.innerWidth;
        if (widthPage < 577) { setParallax(true) } 
      }, [])

    const [classVideo, changeClass] = useState('d-none')
    const [classWrapper, changeWrapper] = useState(' ')
    const [statusVideo, changeVideo] = useState(false)

    if (classWrapper) styles.push(classWrapper)

    const className = styles.join(' ')

    const toggleVideo = () => {
        if(classVideo === ''){
            changeVideo(!statusVideo)
            changeClass('d-none')
            changeWrapper('')
        }
        else{
            changeVideo(!statusVideo)
            changeClass('')
            changeWrapper('d-none')
        }
    }


    return(
        <main>
            <Image src="/media/Recursos-21+-/21_mas_menos_web.png" className="banner-movie d-none d-lg-block" />
            <Image src="/media/Recursos-21+-/21_mas_menos_movil.png" className="banner-movie d-none d-sm-block d-lg-none" />
            <Image src="/media/Recursos-21+-/21_mas_menos_movil.png" className="banner-movie d-block d-sm-none" />
            <Container fluid className="paddings-container">
                <NavBar />
                <Row className="wrapper-movie">
                    <div className="text-left header-veintiuno">
                        <h1 className="text-two-colors green text-left">ESCRIBIENDO <b>HISTORIAS PARA CRECER</b> CON ELLAS</h1>
                    </div>
                </Row>
                <Parallax
                        className="custom-class"
                        y={[30, -50]}
                        disabled={disabledParallax}
                        expand="true"
                        tag="figure">
                    <Row className="pt-5 pb-4 context-veintiuno">
                        <Col lg={6} className="img-us">
                            <ImgText img="/media/Recursos-21+-/QUESO.png" disabled={disabledParallax} className="text-left text-low-two-colors green" text="<b>QUESO EL NIÑO PERRO</b>" />
                            <p>Queso, El Niño Perro es un proyecto de animación creado por los escritores de veintiuno más menos. El proyecto
                                fue llevado al festival de Ventana Sur en Argentina y participó en distintos talleres.

</p>
                        </Col>
                        <Col lg={6}>
                            <p className="d-block d-lg-none">En Veintiuno Mas Menos creamos contenido contemporáneo; impulsados por la pasión de contar historias. Desarrollando películas y series con el propósito de darle voz a las generaciones más jóvenes; un mercado en constante cambio y evolución que exige contenidos más ambiciosos y retadores.</p>
                            <h1 className="title text-left font-21 mb-3 enfoque">NUESTRO ENFOQUE</h1>
                            <p>Generar un espacio para escritores jóvenes donde puedan desarrollar su talento, creando contenido audiovisual para otros de su edad; reflejando que la creatividad y calidad no tienen edad.</p>
                            <p>A través de formar lazos y conexiones mediante nuestras historias, nos permitimos aplicar una visión fresca y juvenil al contenido que creamos.</p>
                            <p className="d-none d-lg-block">En Veintiuno Mas Menos creamos contenido contemporáneo; impulsados por la pasión de contar historias. Desarrollando películas y series con el propósito de darle voz a las generaciones más jóvenes; un mercado en constante cambio y evolución que exige contenidos más ambiciosos y retadores.</p>
                            <p>Buscando y aplicando nuevas herramientas y técnicas que ayuden al crecimiento constante de nuestro trabajo.</p>
                        </Col>
                    </Row>
                </Parallax>
                <Row>
                    <Col sm={12}>
                        <h1 className="text-two-colors receta text-left">RECETA DE AMOR</h1>
                        <div className={className}>
                            <Image src="/media/Recursos-21+-/video_21+-.png" width="100%" /> 
                            <span className="play green" onClick={toggleVideo}></span>
                        </div>
                        <div className={classVideo}>
                            <ReactPlayer 
                                url="https://vimeo.com/372943510"
                                className="video-21"
                                playing={statusVideo} 
                                onEnded={toggleVideo}
                                controls={true}
                                ref={videoYoutube}
                            />
                        </div>
                        <p className="text-two-colors green veintiuno">Nuestro corto, Receta de Amor, participó en el <b>48 Hour Film Proyect México.</b></p>
                    </Col>
                </Row>
                <Footer />
            </Container>
        </main>
    )
}

export default Nosotros