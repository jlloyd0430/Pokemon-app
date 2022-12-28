const mongoose = require("mongoose");
const pokemonSchema = new mongoose.Schema({
  PokedexNo: {
    type: Number,
    unique: true,
    required: true,
  },
  Name: {
    type: String,
    unique: true,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  Moves: [
    {
      type: String,
    },
  ],
});

const pokemon = mongoose.model("pokemon", pokemonSchema);
module.exports = pokemon;