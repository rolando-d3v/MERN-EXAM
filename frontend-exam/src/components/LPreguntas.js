import React from "react";
import {Link} from 'react-router-dom'
import clienteAxios from '../config/axios'
import { Table } from "react-bootstrap";
import Swal from 'sweetalert2'
import "./LPreguntas.scss"

const LPreguntas = ({ preguntas, apiRest }) => {

const eliminarPregunta = async (id) => {

     Swal.fire({
        title: 'Esta Seguro?',
        text: "Que desea eliminar la pregunta!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#4cd3c2',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          console.log(id);
          await clienteAxios.delete(`/exam/preguntas/${id}`)
          apiRest()
        }
      })

}

  return (
    <div>
      <h3 className="text-center my-4" >Lista Preguntas: Total: {preguntas.length}</h3>
      <Table striped bordered hover responsive  >
        <thead className="thead-dark">
          <tr className="text-uppercase" >
            <th style={{width: "3em"}} >#N </th>
            <th style={{width: "30em"}} >Pregunta</th>
            <th style={{width: "9em"}} >Pre2</th>
            <th>Respuesta_a</th>
            <th>Respuesta_b</th>
            <th>Respuesta_c</th>
            <th>Respuesta_d</th>
            <th>Respuesta_e</th>
            <th style={{width: "6em"}} >Correct</th>
            <th  className="text-center" >Opciones</th>
          </tr>
        </thead>
        <tbody >
          {preguntas.map((e_pre) => (
            <tr key={e_pre._id}>
              <td style={{width: "3em"}} className="text-center font-weight-bold" >{e_pre.id} </td>
              <td style={{width: "30em"}} >{e_pre.pregunta}</td>
              <td style={{width: "9em" }} > <pre>{e_pre.pre2}</pre> </td>
              <td>{e_pre.respuesta_a}</td>
              <td>{e_pre.respuesta_b}</td>
              <td>{e_pre.respuesta_c}</td>
              <td>{e_pre.respuesta_d}</td>
              <td>{e_pre.respuesta_e}</td>
              <td style={{width: "6em"}} className="text-center font-weight-bold" >{e_pre.respuesta_correcta}</td>
              <td className="d-flex flex-column" >
                <button className="btn btn-danger mb-2" onClick={()=> eliminarPregunta(e_pre._id) } >Eliminar</button>
                <Link to={`/update/${e_pre._id}`} className="btn btn-success" >Editar</Link>
                <Link to={`/ver/${e_pre._id}`} className="btn btn-info mt-2" >Ver mas</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LPreguntas;
