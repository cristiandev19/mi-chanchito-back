import * as express from 'express';

const router = express.Router();


// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router
  .post('/addTransfer', transferController.addTransfer)
  .put('/updateTransfer', transferController.updateTransfer);
  .delete('/deleteTransfer', transferController.deleteTransfer);

module.exports = router;
