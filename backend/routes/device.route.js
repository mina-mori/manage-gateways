let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Device Model
let deviceSchema = require('../models/Device');

// CREATE Device
router.post('/create-device', (req, res, next) => {
  const query = { gateway: req.body.gateway };
  deviceSchema.find(query, (error1, data) => {
    if (error1) {
      console.log(error1);
    } else {
      if (data && data.length < 10) {
        deviceSchema.create(req.body, (error2, data) => {
          if (error2) {
            return next(error2);
          } else {
            res.json(data);
          }
        });
      } else {
        return res.json({
          validationMessage:
            'No more that 10 peripheral devices are allowed for a gateway.',
        });
      }
    }
  });
});

// READ Devices associated by gateway
router.get('/get-gateway-devices/:gateway', (req, res) => {
  const query = { gateway: req.params.gateway };
  deviceSchema.find(query, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

// READ Device by Id
router.get('/get-by-id/:id', (req, res) => {
  deviceSchema.findById(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

// Delete Device
router.delete('/delete-device/:id', (req, res, next) => {
  deviceSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
