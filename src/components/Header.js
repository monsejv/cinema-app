import React from 'react'

import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'

function Header (){
    return( 
        <Row className="demo-wrapper">
            <div className="text-center">
                <h1 className="title header">CREA. PRODUCE. TRASCIENDE.</h1>
                <Button className="button-demo">DEMO REEL
                    <img src="https://cinema226.s3-us-west-2.amazonaws.com/C226+web+page2021/icons/play.svg" alt="play" />
                </Button>
            </div>
        </Row>
    )
}

export default Header