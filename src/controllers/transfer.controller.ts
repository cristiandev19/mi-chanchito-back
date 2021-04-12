export const getTransfers = (req, res, next) => {
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


export const addTransfer = (req, res, next) => {
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

export const updateTransfer = (req, res, next) => {
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

export const deleteTransfer = (req, res, next) => {
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
