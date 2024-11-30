import { useState } from 'react'
import React from 'react'
import './Modal.css'

export const Modal = () => {
    const [modal, setModal] = useState(false)
    return (
        <div className={`modal ${modal ? "openedModal" : ""}`}>
            <div className='modalBox'>
                <button onClick={() => setModal(false)}>Close</button>
            </div>
        </div>
    )

}
