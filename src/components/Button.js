import React from 'react'

import {Button} from 'react-bootstrap'

function Buttons(props){
    return(
        <a href={props.link} ><Button variant={props.variant}  className={props.className}>{props.text}</Button></a>
    )
}

export default Buttons