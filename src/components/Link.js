import React from 'react'

function LinkTo(props){
    return(
        <a href={props.link} target={props.target} className={props.className} dangerouslySetInnerHTML={{ __html: `${props.text}`}}>
        </a>
    )
}

export default LinkTo