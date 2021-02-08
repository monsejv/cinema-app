import React, { useState } from 'react'

import { Carousel} from 'react-bootstrap'

function CarouselUs(props){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const { list } = props

    return(
        <Carousel activeIndex={index} onSelect={handleSelect} className={props.className} data-interval="90000">
            { list.map(list => (
                <Carousel.Item>
                   <img
                    className="d-block w-100"
                    src={list.img}
                    alt={list.title}
                    />
                    <Carousel.Caption className="text-left carousel-costume member-wrapper left-22">
                    <p className="members">{list.position}</p> 
                    <h3 className="members">{list.title}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
             ))
            }
        </Carousel>
    )
}

export default CarouselUs