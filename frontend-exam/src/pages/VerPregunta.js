import React, { useEffect, useState } from "react";
import clienteAxios from "../config/axios";

const VerPregunta = (props) => {
  const idxx = props.match.params.id;
  console.log(idxx);

  const [mostrarPregunta, setMostrarPregunta] = useState({});

  useEffect(() => {
    const res = async () => {
      const re = await clienteAxios.get(`/preguntas/${idxx}`);
      console.log(re.data);
      setMostrarPregunta(re.data);
    };
    res();
  }, []);

  const {
    id,
    pregunta,
    pre2,
    respuesta_a,
    respuesta_b,
    respuesta_c,
    respuesta_d,
    respuesta_e,
  } = mostrarPregunta;

  return (
    <div className="container">
      <h3 className="text-center my-4">Estas en la pregunta N: {id}</h3>
      <div className="form">
        <h6> {pregunta} </h6>
        <pre>{pre2} </pre>
        <div className="my-4 text-left" >
          <button className="btn btn-block btn-secondary text-left px-4">A. {respuesta_a}</button>
          <button className="btn btn-block btn-secondary text-left px-4">B. {respuesta_b}</button>
          <button className="btn btn-block btn-secondary text-left px-4">C. {respuesta_c}</button>
          <button className="btn btn-block btn-secondary text-left px-4">D. {respuesta_d}</button>
          <button className="btn btn-block btn-secondary text-left px-4">E. {respuesta_e}</button>
        </div>
        <button className="btn btn-primary btn-block">Enviar Pregunta</button>
      </div>
    </div>
  );
};

export default VerPregunta;
