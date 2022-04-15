import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

//import router
// import productosRouter from "./api/productos/productos.routes";
import preguntasRouter from './api/preguntas/preguntas.routes'
// import authRouter from './api/auth/auth.routes'

//creacion de roles al iniciar la app
// import { createdSetupRoles } from './api/role/iniciarSetupRoles';

//CONFIGURACION APP
import './config'

//BASE DE DATOS
// import './db'

const app = express();
// createdSetupRoles()
const port = process.env.PORT;
app.listen(port, () => console.log("server run in port " + port));

//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

// ROUTES DE APP
app.use("/preguntas", preguntasRouter);
// app.use("/auth",authRouter );
// app.use('/users', userRouter)
