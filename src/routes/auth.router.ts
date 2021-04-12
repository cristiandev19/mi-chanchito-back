import * as express from 'express';
import * as authController from '../controllers/auth.controller';

const router = express.Router();


// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router
  .post('/loginEmail', authController.loginEmail)
  .get('/verifyLogin', authController.verifyLogin);

export {
  router
};
