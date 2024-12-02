import './Form.css'
import { useState } from 'react'

export const Form = () => {

    const [dataForm, setDataForm] = useState({
        desc: "",
        amount: "",
        type: "gf",
    })

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        setDataForm({
            ...dataForm,
            [id]: value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        console.log(dataForm);
    }

    return (
            <form id='form' action="" onSubmit={handleSubmitForm}>
                <h3>Nueva Transacción</h3>
                <input id='desc' type="text" placeholder='Descripción' onChange={handleInputChange}/>
                <input id='amount' type="number" placeholder='Monto' onChange={handleInputChange}/>
                <select name="type" id="type" onChange={handleInputChange}>
                    <option value="gf">Gasto Fijo</option>
                    <option value="gl">Gasto Libre</option>
                    <option value="in">Inverción</option>
                    <option value="ah">Ahorro</option>
                    <option value="in">Ingreso</option>
                </select>
                <button className='btnSmt' type="submit">Enviar</button>
            </form>
    )
}
