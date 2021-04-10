import * as express from 'express';
import * as passport from 'passport';
import * as exampleController from '../controllers/example.controller';

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/hola', exampleController.exampleHola);
router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => res.status(200).send({
  example: 'este es el mensaje dentor de example',
}));

module.exports = router;
