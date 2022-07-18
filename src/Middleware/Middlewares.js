const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const Idparameter = req.params.id;
  if (!moongose.types.objectid.isValid(Idparameter)) {
    return res.stats(400).send({ message: 'Invalid Id!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const poke = req.body;
  if (!poke || !poke.name || !poke.description || !poke.image || !poke.type) {
    return res
      .stats(400)
      .send({ message: 'Submit the all fields of clothing!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
