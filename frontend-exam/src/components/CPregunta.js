import React, { useState, useEffect } from "react";
import {withRouter} from 'react-router-dom';
import clienteAxios from "../config/axios";
import { Form, Button, Alert } from "react-bootstrap";

const CPregunta = (props) => {
  const [data, setData] = useState({
    id: "",
    pregunta: "",
    pre2: "",
    respuesta_a: "",
    respuesta_b: "",
    respuesta_c: "",
    respuesta_d: "",
    respuesta_e: "",
    respuesta_correcta: "",
  });

  const [error, setError] = useState(null)

  const {id} = data

  const datoState = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setError(null)
  };

  const crearPregunta = async (e) => {
    console.log(preguntas.id);
    e.preventDefault();
    if(!id) {
      setError("falta poner un ID");
    } else {
      await clienteAxios.post("/exam/preguntas", data);
      props.history.push("/lista")

    }
  };



  // para obtener cantidad de pregunta
  const [preguntas, setPreguntas] = useState([])
  useEffect(() => {
  apiRest()
  }, [])

  const apiRest = async () => {
      const res = await clienteAxios.get(`/exam/preguntas`)
      console.log(res.data);
      setPreguntas(res.data)
  }
  //

  return (
    <div>
         <h3 className="text-center my-4" >Crear Pregunta Total: {preguntas.length} </h3>
      <Form onSubmit={crearPregunta} className="px-5">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="id"
            name="id"
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="pregunta"
            name="pregunta"
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Pre2</Form.Label>
          <Form.Control
            as="textarea"
            rows="8"
            name="pre2"
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Respuesta_A"
            name="respuesta_a"
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Respuesta_B"
            name="respuesta_b"
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Respuesta_C"
            name="respuesta_c"
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Respuesta_D"
            name="respuesta_d"
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Respuesta_E"
            name="respuesta_e"
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Respuesta_Correcta"
            name="respuesta_correcta"
            onChange={datoState}
          />
        </Form.Group>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              borderRadius: "20px",
              padding: "0.7em 5em",
              display: "flex",
              justifyContent: "center",
            }}
            variant="primary"
            type="submit"
          >
            Crear Pregunta
          </Button>
        </div>
     {error? (<Alert className="mt-3" variant="danger"> {error}  </Alert>): null}
      </Form>
    </div>
  );
};

export default withRouter(CPregunta)
