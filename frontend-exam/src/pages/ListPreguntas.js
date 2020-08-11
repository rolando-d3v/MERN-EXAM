import React, { useEffect, useState } from 'react'
import clienteAxios from '../config/axios';
import LPreguntas from '../components/LPreguntas'

function ListPreguntas() {

    const [preguntas, setPreguntas] = useState([])

    useEffect(() => {
    apiRest()
    }, [])

    const apiRest = async () => {
        const res = await clienteAxios.get(`/exam/preguntas`)
        console.log(res.data);
        setPreguntas(res.data)
    }

    return (
        <div>
            <LPreguntas preguntas={preguntas} apiRest={apiRest} />
        </div>
    )
}

export default ListPreguntas
