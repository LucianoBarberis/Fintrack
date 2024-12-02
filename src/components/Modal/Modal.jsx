import { useState } from 'react'
import React from 'react'
import './Modal.css'

export const Modal = ({ modalProp, setModalProp}) => {

    return (
        <div className={`modal ${modalProp ? "openedModal" : ""}`}>
            <div className='modalBox'>
                <button onClick={() => setModalProp(false)}>Close</button>
            </div>
        </div>
    )

}
