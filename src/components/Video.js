import React from 'react'
import ReactPlayer from 'react-player'

function Video(props){
    return(
        <div className="video-wrapper">
        <ReactPlayer 
            url='https://cinema226.s3-us-west-2.amazonaws.com/C226+web+page2021/Recursos+Index/Video/Index.mp4'
            width="100%"
            height="auto"
            className="d-none d-lg-block"
            playing
            muted 
            loop />
        <ReactPlayer 
            url='https://cinema226.s3-us-west-2.amazonaws.com/C226+web+page2021/Recursos+Index/Video/video+ipad.mp4'
            width="100%"
            height="auto"
            className="d-none d-sm-block d-lg-none"
            playing
            muted 
            loop />
        <ReactPlayer 
            url='https://cinema226.s3-us-west-2.amazonaws.com/C226+web+page2021/Recursos+Index/Video/movil.mp4'
            width="100%"
            height="auto"
            className="d-block d-sm-none"
            playing
            muted 
            loop />
        </div>
    )
}

export default Video 