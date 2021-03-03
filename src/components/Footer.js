import React from 'react'

import CopyRight from './Copyright'
import LinkTo from './Link'
import {Row, Col} from 'react-bootstrap'

function Footer(props){
    return(
        <Row className="footer">
            <Col lg={8} sm={12}>
                <LinkTo link="mailto:hola@c226.mx?subject=Trabajemos Juntos" className="work-toguether" target="_blank" text="" />
            </Col>
            <Col lg={4} sm={12} className="text-right contact-us">
                <div className="write-us">
                    <h1 className="text-contact"><LinkTo link="mailto:hola@c226.mx?subject=Cuéntanos Más" text="ESCRIBENOS" target="_blank" /></h1>
                    <p><LinkTo link="mailto:hola@c226.mx?subject=Cuéntanos Más" text="hola@c226.mx" target="_blank" /></p>
                </div>
                <div className="call-us">
                    <h1 className="text-contact"><LinkTo link="tel:+525568230889" text="LLAMANOS" target="_blank" /></h1>
                    <p className="mb-5"><LinkTo link="tel:+525568230889" text="+52 55 6823 0889" target="_blank" /></p>
                </div>
                <div className="visit-us">
                    <h1 className="text-contact"><LinkTo link="https://goo.gl/maps/qHpKxoJhns37WJSRA" text="VISITANOS" target="_blank" /></h1>
                    <p className="mb-5"><LinkTo link="https://goo.gl/maps/qHpKxoJhns37WJSRA" text="Miguel Laurent 533,<br/>
                        Col del Valle Sur, 03100.<br/>
                        Ciudad de México, CDMX." target="_blank" />
                    </p>
                </div>
                
            </Col>
            <Col sm={12}>
                <CopyRight />
            </Col>
        </Row>
        
    )
}

export default Footer