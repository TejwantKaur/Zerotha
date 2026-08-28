const { model } = require("mongoose");

const { HoldingsSchema } = require("../schema/HoldingsSchema");

const HoldingsModel = new model("holding", HoldingsSchema);
// holding es naam naal connection create hojayega;

module.exports = { HoldingsModel };
