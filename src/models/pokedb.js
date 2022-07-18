const mongoose = require('mongoose');

const PokeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  type: {
    type: string,
    require: true,
  },
});

const poke = mongoose.model('poke', PokeSchema);

module.exports = roupas;
