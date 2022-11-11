const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let gatewaySchema = new Schema(
  {
    serialNo: {
      type: String,
    },
    name: {
      type: String,
    },
    ipv4Address: {
      type: String,
    },
    devices: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Device',
      },
    ],
  },
  {
    collection: 'gateways',
  }
);

module.exports = mongoose.model('Gateway', gatewaySchema);
