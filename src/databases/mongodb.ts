import * as mongoose from 'mongoose';

import { config } from '../config/index';

export const dbConnection = async () => {
  try {
    await mongoose.connect(config.mongoConnect, {
      useNewUrlParser    : true,
      useUnifiedTopology : true,
      useCreateIndex     : true,
    });
  } catch (error) {
    throw new Error('Algo salio mal en la coneccion a mongo');
  }
};

