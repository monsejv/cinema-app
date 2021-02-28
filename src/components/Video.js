import React from 'react'
import ReactPlayer from 'react-player'

function Video(props){
    return(
        <div className="video-wrapper">
        <ReactPlayer 
            url="/media/Recursos-Index/Video/Index.mp4"
            width="100%"
            height="auto"
            className="d-none d-lg-block"
            playsinline={true}
            controls={false}
            playing
            muted 
            loop />
        <ReactPlayer 
            url="/media/Recursos-Index/Video/video-ipad.mp4"
            width="100%"
            height="auto"
            className="d-none d-sm-block d-lg-none"
            playsinline={true}
            controls={false}
            playing
            muted 
            loop />
        <ReactPlayer 
            url="/media/Recursos-Index/Video/movil.mp4"
            width="100%"
            height="auto"
            className="d-block d-sm-none"
            playsinline={true}
            controls={false}
            playing
            muted 
            loop />
        </div>
    )
}

export default Video 