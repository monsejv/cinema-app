import React from 'react'

import {ProgressBar} from 'react-bootstrap'

function Loader(props){
    return(
        <div className={props.loaderClass} >
            <div className="w-70">
                <div className="logo"></div>
                <ProgressBar now={props.progress} />
            </div>
        </div>
    )
}

export default Loader