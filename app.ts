// const express    = require('express');
import * as express from 'express';
// const cors       = require('cors');
import * as cors from 'cors';
// const bodyParser = require('body-parser');
import * as bodyParser from 'body-parser';
// const passport      = require('passport');
import * as passport from 'passport';

const app = express();

// const { dbConnection } = require('./src/databases/mongodb');
import { dbConnection } from './src/databases/mongodb';
import { config } from './src/config/index';

// passport stuff
// const jwtStrategry  = require('./src/strategies/jwt');
import * as jwtStrategry from './src/strategies/jwt';

passport.use('jwt', jwtStrategry);

// Hacemos la conexion a mongodb
dbConnection();

// Importamos los middlewares para manejar los errores
import { logErrors, errorHandler } from './src/utils/middleware/errorHandler';

// Aqui configuraciones
app
  .use(cors({ origin: '*' }))
  .use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
  .use(bodyParser.json({ limit: '5mb' }));

// Importamos modulos
const exampleRouter = require('./src/routes/example.router');
const authRouter = require('./src/routes/auth.router');
// Establecemos las rutas
app
  .use('/example', exampleRouter)
  .use('/auth', authRouter);

// Middleware para manejo de errores
app
  .use(logErrors)
  .use(errorHandler);

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`);
});
