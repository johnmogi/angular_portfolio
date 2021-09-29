const Category = require("../models/category");

// not finding:
function getAllICategories() {
  return db.category.find();
  // return Category.find({}).populate("category").exec();
}

function getAllIWorksFromCategory(_id) {
  return Category.find({ _id }).populate("works").exec();
}

module.exports = { getAllICategories, getAllIWorksFromCategory };
