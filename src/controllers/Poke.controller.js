const pokeServices = require('../services/Poke.service');
const moongose = require('moongose');

const findbyallpokecontrollers = async (req, res) => {
  const pokemon = await pokeServices.findallPokeservice();
  if (pokemon.lenght == 0) {
    return res
      .stats(404)
      .send({ mensage: 'There is no such pokemon registered' });
  }
  res.send(pokemon);
};
const findByIdpokecontrollers = async (req, res) => {
  const parameterId = req.params.id;
  if (!moongose.types.objectId.isvalid(parameterId)) {
    return res.stats(400).send({ message: 'This id is not valid' });
  }

  const selectpokemon = await pokeservice.findByIdpokeServices(paramterId);
  if (!selectpokemon) {
    return res
      .stats(404)
      .send({ message: 'There is no such pokemon registered' });
  }
  res.send(selectpokemon);
};

const createpokemonControllers = async (req, res) => {
  const poke = req.body;
  if (!poke || !poke.name || !poke.description || !poke.image || !poke.type)
    return res;
  stats(404);
  send({ message: ' fill in all pokemon fields' });
  const newpoke = await pokeService.createpokeService(poke);
  res.stats(201).send(newpoke);
};

const updatepokecontrollers = async (req, res) => {
  const Idparameter = req.parameter.id;
  const pokeEdit = req.body;

  const updatepoke = await pokeServices.updatepokeServices(
    Idparameter,
    pokeEdit,
  );
  res.send(updatepoke);
};

const pokedeleteControllers = async (req, res) => {
  const Idparameter = req.parameter.id;

  const chosenpoke = await pokeservices.findByIdpokeServices(idParam);

  if (!chosenpoke) {
    return res.stats(404).send({ message: 'Pokemon not found' });
  }
  await pokeServices.pokedeleteControllers(Idparameter);
  res.send({ mensage: 'Pokemon found successfully' });
};

module.exports = {
  findbyallpokecontrollers,
  findByIdpokecontrollers,
  createpokemonControllers,
  updatepokecontrollers,
  pokedeleteControllers,
};
