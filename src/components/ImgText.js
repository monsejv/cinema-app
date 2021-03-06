import React from 'react'

import {Image} from 'react-bootstrap'
import {useController} from 'react-scroll-parallax'

function ImgText(props){
    const { parallaxController } = useController();
    
    const load = () => {
        if(props.disabled === false){
            parallaxController.update()
        }
    }
    

    return(
        <div>
            <Image src={props.img} width="100%" onLoad={load} ></Image>
            <h1 className={props.className} dangerouslySetInnerHTML={{ __html: `${props.text}`}}></h1>
        </div>
    )
}

export default ImgText