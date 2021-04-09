import * as jwtAdapter from '../adapter/jwt.adapter';

export const loginEmail = (req, res, next) => {
  try {
    const { email } = req.body;
    const result = jwtAdapter.signToken({ email, isLoged: true });
    return res.status(200).send({
      msj   : 'Ingreso existoso',
      token : result,
    });
  } catch (error) {
    next(error);
  }
};

export const verifyLogin = (req, res, next) => {
  try {
    const result = jwtAdapter.verifyToken(req.query.token);
    if (result.error) {
      throw new Error(result.msj);
    }
    res.status(200).send({
      msj: result.msj,
    });
  } catch (error) {
    next(error);
  }
};
