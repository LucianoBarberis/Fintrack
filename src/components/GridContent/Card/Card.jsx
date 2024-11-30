import React from 'react'
import './Card.css'

const Card = ({title, img, chart, className, number, walletTitle}) => {
    return (
        <div className={className}>
            {chart ? <div>{chart}</div> : null}
            {img ? <img className='image' src={img} alt="" /> : null}
            {walletTitle ? <p className='walletTitle'>{walletTitle}</p> : null}
            {number ? <p className='number'>{number}</p> : null}
            {title ? <p className='title'>{title}</p> : null}
        </div>
    )
}

export default Card