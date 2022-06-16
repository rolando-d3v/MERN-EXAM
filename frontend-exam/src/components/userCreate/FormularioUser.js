import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import clienteAxios from "../../config/axios";

export default function FormularioUser() {
  const [preguntas, setPreguntas] = useState([]);

  const [data, setData] = useState({
    GRADO: "",
    nombre: "",
    candidato: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const datoState = (e) => {
    console.log(e.target.name);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const crearPregunta = async (e) => {
    e.preventDefault();

    if (!data.GRADO) {
      return alert("falta datos");
    }
    const envioData = await clienteAxios.post("/user", data);
    alert(envioData.data.msn)
    console.log(envioData)
    // props.history.push("/lista");
  };


  
  // para obtener cantidad de pregunta
  useEffect(() => {
    apiRest();
  }, []);

  const apiRest = async () => {
    const res = await clienteAxios.get(`/preguntas`);
    setPreguntas(res.data);
  };

  return (
    <div>
      <Form onSubmit={crearPregunta} className="px-5">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            className={`t_bold ${data.GRADO.length > 0 && "res_llena"}`}
            type="text"
            placeholder="GRADO"
            name="GRADO"
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            className={`t_bold ${data.nombre.length > 0 && "res_llena"}`}
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={datoState}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            className={`t_bold ${data.candidato.length > 0 && "res_llena"}`}
            type="text"
            placeholder="Candidato"
            name="candidato"
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            className={`t_bold ${data.email.length > 0 && "res_llena"}`}
            type="text"
            placeholder="email"
            name="email"
            onChange={datoState}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            className={`t_bold ${data.password.length > 0 && "res_llena"}`}
            type="text"
            placeholder="password"
            name="password"
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
        {error ? (
          <Alert className="mt-3" variant="danger">
            {" "}
            {error}{" "}
          </Alert>
        ) : null}
      </Form>
    </div>
  );
}
