import React from 'react'
import './Card.css'

const Card = ({title, img, chart, className}) => {
    return (
        <div className={className}>
            <div>{chart}</div>
            <img src={img} alt="" />
            <p>{title}</p>
        </div>
    )
}

export default Card