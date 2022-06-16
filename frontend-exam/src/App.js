import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home";
import ListPreguntas from "./pages/ListPreguntas";
import CreatePregunta from "./pages/CreatePregunta";
import UpdatePregunta from "./pages/UpdatePregunta";
import VerPregunta from "./pages/VerPregunta";
import FormularioUser from "./components/userCreate/FormularioUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <div className="container-fluid" >
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/lista" component={ListPreguntas} />
            <Route exact={true} path="/create" component={CreatePregunta} />
            <Route exact={true} path="/user" component={FormularioUser} />
            <Route exact={true} path="/update/:id" component={UpdatePregunta} />
            <Route exact={true} path="/ver/:id" component={VerPregunta} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
