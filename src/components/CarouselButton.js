import React, { useState } from 'react'

import {Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function CarousellButton(props){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const { list } = props

    return(
        <Carousel activeIndex={index} onSelect={handleSelect} className={props.className} interval={null}>
            { list.map(list => (
                <Carousel.Item>
                    <img
                    className="d-none d-lg-block w-100"
                    src={list.img}
                    alt={list.title}
                    />
                    <img
                    className="d-block d-lg-none w-100"
                    src={list.imgTablet}
                    alt={list.title}
                    />
                    <Carousel.Caption className="text-left carousel-costume">
                    <h3>{list.title}</h3>
                    <p className="mb-5">Director: {list.director}</p>
                    <p className="mb-5">{list.description}</p>
                    <Link to={{ pathname: `${list.link}`, state: { data: `${list.data}`} }} className="btn btn-primary">VER MÁS</Link>
                    </Carousel.Caption>
                </Carousel.Item>
             ))
            }
        </Carousel>
    )
}

export default CarousellButton