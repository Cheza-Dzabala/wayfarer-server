import { Router } from 'express';
import bookingsController from '../controllers/bookingsController';
import authorization from '../middleware/authenticationCheck';

const router = Router();

router.use((req, res, next) => {
  if (!authorization.checkToken(req)) {
    return res.status(401).json({
      status: 'unauthorized',
      data: { message: 'No token present in the request header' },
    });
  }
  return next();
});

router.get('/', (req, res) => bookingsController.allBookings(req, res));
router.get('/:id', (req, res) => bookingsController.userBookings(req.param('id'), res));
router.post('/', (req, res) => bookingsController.createBooking(req, res));
router.delete('/:id', (req, res) => bookingsController.deleteBooking(req, res));
module.exports = router;
