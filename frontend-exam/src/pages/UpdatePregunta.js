import React from 'react'
import UPregunta from '../components/UPregunta'

function UpdatePregunta(props) {

    const idx = props.match.params.id
    console.log(props.match.params.id);
  
   
    return (
        <div  className="container" >
            <h3 className="text-center my-4" >Actualizar Pregunta</h3>
            <UPregunta idx={idx} />
        </div>
    )
}

export default UpdatePregunta
