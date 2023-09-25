const { model } = require("mongoose");
//load in categorySchema because it is referenced in the item model
require("./category.cjs");

const itemSchema = require("./itemSchema.cjs");

module.exports = model("Item", itemSchema);