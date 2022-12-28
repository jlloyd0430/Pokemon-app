const express = require("express");
const router = express.Router();

const {
  renderAllPokemon,
  renderOnePokemon,
  renderCreatePokemonForm,
} = require("../../controllers/view/viewController");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/allMons", renderAllPokemon);
router.get("/oneMon/:name", renderOnePokemon);
router.get("/createMon", renderCreatePokemonForm);

module.exports = router;
