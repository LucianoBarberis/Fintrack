import { useState } from 'react';
import React from 'react'
import './ToolBar.css'
import { TbMenu2, TbUser, TbHome, TbNewSection, TbCalendarMonth, TbInfoSquare } from "react-icons/tb";

export const ToolBar = ({ setModalProp }) => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div className= {`toolbar ${openMenu ? "open" : ""}`}>
            <ul>
                <li>Menu <button onClick={() => setOpenMenu(!openMenu)}><TbMenu2 size={32}/></button></li>
                <li>Perfil <TbUser size={32}/></li>
                <li>Inicio <TbHome size={32}/></li>
                <li className='txtNew'>Nueva transaccion<button onClick={() => setModalProp(true) }><TbNewSection className='new' stroke='white' size={52}/></button></li>
                <li>Calendario <TbCalendarMonth size={32}/></li>
                <li>FAQ <TbInfoSquare size={32}/></li>
            </ul>
        </div>
    )
}
