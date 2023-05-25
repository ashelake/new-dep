const mongoose = require("mongoose");
const mySchema = new mongoose.Schema({
  amount: String,
  asset_name: String,
  cost_center: String,
  date_of_installation: Date,
  date_of_purchase: Date,
  description: String,
  identification_number: String,
  invoce_number: String,
  life_year: String,
  location: String,
  nature_of_asset: String,
  salvage_value: String,
  supplier: String
});

const Mydata = mongoose.model("student", mySchema);
module.exports = { Mydata };