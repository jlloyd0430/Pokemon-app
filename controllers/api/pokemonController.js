const pokemon = require("../../models/pokemonModel");
async function getAllPokemon(req, res) {
  try {
    let result = await pokemon.find({});

    res.json({
      message: "success",
      payload: result,
    });
  } catch (error) {
    console.log(`getAllPokemon error: ${error}`);

    res.json({
      message: "Failure",
      payload: error,
    });
  }
}

async function getOnePokemon(req, res) {
  try {
    let result = await pokemon.find({ Name: req.params.name });

    res.json({
      message: "success",
      payload: result,
    });
  } catch (error) {
    console.log(`getOnePokemon error: ${error}`);

    res.json({
      message: "failure",
      payload: error,
    });
  }
}

async function createOnePokemon(req, res) {
  try {
    //accept the front-end form
    let newPokemon = {
      PokedexNo: req.body.PokedexNo,
      Name: req.body.Name,
      Type: req.body.Type,
      Moves: req.body.Moves.split(", "),
    };
    await pokemon.create(newPokemon);

    // res.json({
    //   message: "success",
    //   payload: req.body,
    // });
    res.redirect(`/oneMon/${newPokemon.Name}`);
  } catch (error) {
    console.log(`createOnePokemon error: ${error}`);

    // client side
    res.json({
      message: "Failure",
      payload: `createOnePokemon error: ${error}`,
    });
  }
}

async function deleteOnePokemon(req, res) {
  try {
    let deleteTarget = req.params.name;
    await pokemon.deleteOne({ Name: deleteTarget });
    // res.json({
    //   message: "Success",
    //   payload: deleteTarget,
    // });
    res.redirect("/allMons");
  } catch (error) {
    console.log(`deleteOnePokemon error: ${error}`);

    res.json({
      message: "Failure",
      payload: `deleteOnePokemon error: ${error}`,
    });
  }
}

module.exports = {
  getAllPokemon,
  getOnePokemon,
  createOnePokemon,
  deleteOnePokemon,
};
