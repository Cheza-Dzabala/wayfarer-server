
import { Router } from 'express';
import tripController from '../controllers/tripController';
import authorization from '../middleware/authenticationCheck';

const router = Router();

// authentication Middleware
router.use((req, res, next) => {
  if (!authorization.checkToken(req)) {
    return res.status(401).json({
      status: 'unauthorized',
      message: 'No token present in the request header',
    });
  }
  return next();
});

router.post('/', (req, res) => tripController.createTrip(req.body, res));

router.get('/', (req, res) => tripController.allTrips(req.body, res));

router.patch('/:id/cancel', (req, res) => tripController.cancelTrip(req.param('id'), res));
module.exports = router;
