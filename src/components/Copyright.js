import React from 'react'

import LinkTo from './Link'
import {Link} from 'react-router-dom'

function Copyright(props){
    return(
        <div 
            className='mt-4 mb-4 copyright'>
            <p className="d-none d-lg-block">©2020. CINEMA226. TODOS LOS DERECHOS RESERVADOS.</p>
            <span className="disclaimer"><Link to="/disclaimer">DISCLAIMER</Link></span>
            <span className='social'><LinkTo link="https://www.facebook.com/Cinema226" text="Facebook" target="_blank" /></span>
            <span className='social'><LinkTo link="https://www.instagram.com/cinema.226/?hl=es-la" text="Instagram" target="_blank" /></span>
            <span className='social'><LinkTo link="https://twitter.com/cinema226" text="Twitter" target="_blank" /></span>
            <p className="mt-3 mb-4 d-block d-lg-none rights">©2020. CINEMA226. TODOS LOS DERECHOS RESERVADOS.</p>
        </div>
    )
}

export default Copyright