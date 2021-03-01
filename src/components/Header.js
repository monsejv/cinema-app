import React from 'react'

import Row from 'react-bootstrap/Row'
import {Link} from 'react-router-dom'

import Play from '../assets/icons/play.svg'

function Header (){
    return( 
        <Row className="demo-wrapper">
            <div className="text-center">
                <h1 className="title header">CREA. PRODUCE. TRASCIENDE.</h1>
                <Link to="/demo-reel" className="btn btn-primary button-demo"> DEMO REEL
                        <img src={Play} alt="play" />
                </Link>
            </div>
        </Row>
    )
}

export default Header