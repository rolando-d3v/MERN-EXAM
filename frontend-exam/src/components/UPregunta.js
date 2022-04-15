import React, { useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const UPregunta = (props) => {
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
    tema: "",
  });

  

  useEffect(() => {
    const res = async () => {
      const re = await clienteAxios.get(`/preguntas/${props.idx}`);
      console.log(re.data);
      setData(re.data);
    };
    res();
  }, []);

  const datoState = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const {
    id,
    pregunta,
    pre2,
    respuesta_a,
    respuesta_b,
    respuesta_c,
    respuesta_d,
    respuesta_e,
    respuesta_correcta,
    tema,
  } = data;

  const updatePregunta = async (e) => {
    e.preventDefault();
    await clienteAxios.put(`/preguntas/${props.idx}`, data);
    props.history.push("/lista")
  };

  return (
    <div>
      <Form onSubmit={updatePregunta} className="px-5">
        <Form.Group>
          <Form.Control
            style={{ border: "2px solid green" }}
            type="text"
            name="id"
            value={id}
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            style={{ border: "2px solid green" }}
            type="text"
            placeholder="pregunta"
            name="pregunta"
            value={pregunta}
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Pre2</Form.Label>
          <Form.Control
            as="textarea"
            rows="8"
            name="pre2"
            value={pre2}
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Respuesta_A"
            name="respuesta_a"
            value={respuesta_a}
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Respuesta_B"
            name="respuesta_b"
            value={respuesta_b}
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Respuesta_C"
            name="respuesta_c"
            value={respuesta_c}
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Respuesta_D"
            name="respuesta_d"
            value={respuesta_d}
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Respuesta_E"
            name="respuesta_e"
            value={respuesta_e}
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            style={{ border: "2px solid blue" }}
            type="text"
            placeholder="Respuesta_Correcta"
            name="respuesta_correcta"
            value={respuesta_correcta}
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            style={{ border: "2px solid blue" }}
            type="text"
            placeholder="Tema"
            name="tema"
            value={tema}
            onChange={datoState}
          />
        </Form.Group>
        <Button
          block
          style={{ borderRadius: "15px" }}
          variant="info"
          type="submit"
        >
          Actualizar Pregunta
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(UPregunta);
