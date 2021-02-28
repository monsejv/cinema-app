import React, {useEffect, useState, useRef} from 'react'

import {Container, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import ReactPlayer from 'react-player'

import CloseIcon from '../assets/icons/Vector.svg'



function Borderless(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
      let videoYoutube = useRef(null)
      
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
           <div className="d-flex justify-content-end align-items-end pt-3 pb-4 pr-5">
                <Link to="/">
                    <img className="menu" src={CloseIcon} alt="menu"  />
                </Link>
            </div>
           <Container className="paddings-container">
                <div className={className}>
                    <Image src="/media/Recursos-Index/Img/preview.png" width="100%" className="mb-5" /> 
                    <span className="play" onClick={toggleVideo}></span>
                </div>
                <div className={classVideo}>
                    <ReactPlayer 
                        url="/media/Recursos-Index/Video/Index.mp4"
                        width="100%"
                        height="auto"
                        className="d-none d-lg-block"
                        playsinline={true}
                        controls={true}
                        playing={statusVideo} 
                        onEnded={toggleVideo}
                        ref={videoYoutube} />
                    <ReactPlayer 
                        url="/media/Recursos-Index/Video/video-ipad.mp4"
                        width="100%"
                        height="auto"
                        className="d-none d-sm-block d-lg-none"
                        playsinline={true}
                        controls={true}
                        playing={statusVideo} 
                        onEnded={toggleVideo}
                        ref={videoYoutube} />
                    <ReactPlayer 
                        url="/media/Recursos-Index/Video/movil.mp4"
                        width="100%"
                        height="auto"
                        className="d-block d-sm-none"
                        playsinline={true}
                        controls={true}
                        playing={statusVideo} 
                        onEnded={toggleVideo}
                        ref={videoYoutube} />
                </div>
           </Container>
       </main> 
    )
}

export default Borderless