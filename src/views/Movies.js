import React, { useState, useRef, useEffect } from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import Copyright from '../components/Copyright'
import Link from '../components/Link'
import ReactPlayer from 'react-player'
import {Parallax} from 'react-scroll-parallax'

import {moviesList} from '../lib/movies'

function Movies(props){

    const [disabledParallax, setParallax] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
        let widthPage = window.innerWidth
        if (widthPage < 577) { setParallax(true) } 
      }, [])

    let videoYoutube = useRef(null)

    const { data } = props.location.state

    const listMovies = moviesList[data]
    const infoMovie = listMovies[0]


    const styles = ['wrapper-trailer']

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
            <Image src={infoMovie.banner} className="banner-movie d-none d-lg-block" />
            <Image src={infoMovie.bannerMobile} className="banner-movie d-block d-lg-none" />
            <Container fluid fluid className="paddings-container">
                <NavBar />
                <Row className="wrapper-movie">
                    <div className="text-left">
                        <h1 className="title header text-left">{infoMovie.title}</h1>
                        <p>DIRECTOR: {infoMovie.director}</p>
                    </div>
                </Row>
                <Parallax
                className="custom-class"
                y={[50, -20]}
                disabled={disabledParallax}
                expand="true"
                tag="figure">
                    <Row className="pb-5 movies-trailer">
                        <Col lg={5} className="poster" >
                            <Image src={infoMovie.poster} width="100%" />
                        </Col>
                        <Col lg={7} className="trailer" >
                            <div className={className}>
                                <Image src={infoMovie.imgVideo} width="100%" className="mb-5" /> 
                                <span className="play" onClick={toggleVideo}></span>
                            </div>
                            <div className={classVideo}>
                                <ReactPlayer 
                                    url={infoMovie.linkVideo}
                                    width="100%"
                                    playing={statusVideo} 
                                    controls={true}
                                    onEnded={toggleVideo}
                                    ref={videoYoutube}
                                />
                            </div>
                            <h1 className="sinopsis mt-3">S I N O P S I S</h1>
                            <p className="w-77">{infoMovie.description}</p>
                            <div className="avaible-wrapper">
                                <span>{ infoMovie.avaible ? 'Disponible en: ' : 'PROXIMAMENTE' }</span>
                                { infoMovie.avaible
                                ? infoMovie.avaible.map(platform => (
                                    <Link link={platform.linkPlatform} target="_blank" className={platform.logo} text=""></Link>
                                ))
                                : false  
                                }
                            </div>
                        </Col>
                    </Row>
                    <Copyright />
                </Parallax>
            </Container>
        </main>
    )
}

export default Movies