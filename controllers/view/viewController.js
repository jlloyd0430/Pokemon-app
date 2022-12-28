// give access to the collection in the database
const pokemon = require("../../models/pokemonModel");

async function renderAllPokemon(req, res) {
  try {
    let result = await pokemon.find({});

    res.render("allMons", { pokemon: result });
  } catch (error) {
    console.log(`renderAllPokemon error: ${error}`);
  }
}

async function renderOnePokemon(req, res) {
  try {
    let mon = await pokemon.find({ Name: req.params.name });
    //populates webpage with entire collection data
    res.render("oneMon", { mon: mon[0] });
  } catch (error) {
    console.log(`renderOnePokemon error: ${error}`);
  }
}

async function renderCreatePokemonForm(req, res) {
  try {
    res.render("createMon");
  } catch (error) {
    console.log(`renderCreatePokemonForm error: ${error}`);
  }
}
module.exports = {
  renderAllPokemon,
  renderOnePokemon,
  renderCreatePokemonForm,
};
