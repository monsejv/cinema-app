import React, {useEffect, useState} from 'react'

import { Row, Container } from 'react-bootstrap'
import HeaderBox from '../components/HeaderBox'
import ServiceCard from '../components/ServiceCard'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import {proyects} from '../lib/proyects'


function Proyects(){
    const [disabledParallax, setParallax] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
        let widthPage = window.innerWidth
        if (widthPage < 577) { setParallax(true) } 
      }, [])

    return(
        <main>
            <Container fluid fluid className="paddings-container">
                <NavBar />
                <HeaderBox 
                    image="https://cinema226.s3-us-west-2.amazonaws.com/C226+web+page2021/Recursos+Proyectos/Img/proyectos+head.png"
                    imageTablet="https://cinema226.s3-us-west-2.amazonaws.com/C226+web+page2021/Recursos+Proyectos/Img/proyectos+head.png"
                    title="<b>PRESTIGIO</b> A NIVEL MUNDIAL EN LA CREACIÓN, PRODUCCIÓN Y DISTRIBUCIÓN <b>DE CONTENIDO."
                    description="Rompemos barreras para crear lazos estratégicos que nos permitan marcar tendencia y trascender en la mente de las personas, creando una conexión a través de nuestras historias."
                    buttonText="NUESTRO TRABAJO"
                    toLink="/borderless"
                    sizeMovil="12"
                    classMovil="other"
                />
                <Row className="pt-5 pb-5">
                    { proyects.map(proyect => (
                        <ServiceCard 
                            col={proyect.col} 
                            image={proyect.img}
                            disabled={disabledParallax}
                            imageTablet={proyect.imgTablet}
                            title={proyect.title}
                            text={proyect.description}
                            textButton={proyect.textButton}
                            data={proyect.data}
                            width="100%"
                            height="auto"
                            link={proyect.link}
                            className={proyect.class}
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

export default Proyects