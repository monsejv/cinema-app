import React, {useEffect} from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import Copyright from '../components/Copyright'

function Legal(props){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <main>
            <Container fluid fluid className="paddings-container">
                <NavBar />
                <Row>
                    <Col sm={12}>
                        <h1 className="title">{props.title}</h1>
                        <div className="bg-gray">
                            <p dangerouslySetInnerHTML={{ __html: `${props.text}`}}></p> 
                        </div>
                    </Col>
                </Row>
                <Copyright />
            </Container>
        </main>
    )
}

export default Legal