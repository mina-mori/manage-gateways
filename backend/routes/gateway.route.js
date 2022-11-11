let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Gateway Model
let gatewaySchema = require('../models/Gateway');

// CREATE Gateway
router.post('/create-gateway', (req, res, next) => {
  gatewaySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Gateways
router.get('/', (req, res) => {
  gatewaySchema.find((error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

// READ Gateway by Id
router.get('/:id', (req, res) => {
  gatewaySchema.findById(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});

// UPDATE Gateway
// router
//   .route('/update-gateway/:id')
//   // Get Single Gateway
//   .get((req, res) => {
//     gatewaySchema.findById(req.params.id, (error, data) => {
//       if (error) {
//         console.log(error);
//       } else {
//         res.json(data);
//       }
//     });
//   });

// // Update Gateway Data
// .put((req, res, next) => {
// 	gatewaySchema.findByIdAndUpdate(
// 	req.params.id,
// 	{
// 		$set: req.body,
// 	},
// 	(error, data) => {
// 		if (error) {
// 		return next(error);
// 		console.log(error);
// 		} else {
// 		res.json(data);
// 		console.log("Gateway updated successfully !");
// 		}
// 	}
// 	);
// });

// // Delete Gateway
// router.delete('/delete-gateway/:id', (req, res, next) => {
//   gatewaySchema.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data,
//       });
//     }
//   });
// });

module.exports = router;
