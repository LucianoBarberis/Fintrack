import React from 'react'
import './Modal.css'
import { Form } from '../Form/Form'

export const Modal = ({ modalProp, setModalProp}) => {

    return (
        <div className={`modal ${modalProp ? "openedModal" : ""}`}>
            <div className='modalBox'>
                <button onClick={() => setModalProp(false)}>✖</button>
                <Form></Form>
            </div>
        </div>
    )

}
