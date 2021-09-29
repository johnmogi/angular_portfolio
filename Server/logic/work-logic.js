const Work = require("../models/work");

function getAllWorks() {
  return Work.find({}).exec();
  // return Work.find({}).populate("categories").exec();
}

function getOneWork(id) {
  // return Work.find({}).populate("categories").exec();
  return Work.find({ _id: id }).exec();
}

function addOneWork(work) {
  return work.save();
}

function updateWork(work) {
  console.log(work._id);
  return new Promise((resolve, reject) => {
    Work.updateOne({ _id: work._id }, work, (err, info) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(info.n ? work : null);
    });
  });
}

module.exports = { getAllWorks, getOneWork, addOneWork, updateWork };
