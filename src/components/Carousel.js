import React, { useState } from 'react'

import {Carousel} from 'react-bootstrap'

function Carousell(props){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const { list } = props

    const styles = ['text-left']

    if (props.wrapperClass) styles.push(props.wrapperClass)

    const className = styles.join(' ')

    return(
        <Carousel activeIndex={index} onSelect={handleSelect} className={props.classNames} data-interval="90000">
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
                    <Carousel.Caption className={className}>
                    <h3 dangerouslySetInnerHTML={{ __html: `${list.title}`}}></h3>
                    <p className="mb-5">{list.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
             ))
            }
        </Carousel>
    )
}

export default Carousell