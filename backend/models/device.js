const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let deviceSchema = new Schema(
  {
    uid: {
      type: Number,
    },
    vendor: {
      type: String,
    },
    dateCreated: {
      type: String,
    },
    status: {
      type: String,
    },
    gateway: {
      type: Schema.Types.ObjectId,
      ref: 'Gateway',
    },
  },
  {
    collection: 'devices',
  }
);

module.exports = mongoose.model('Device', deviceSchema);
