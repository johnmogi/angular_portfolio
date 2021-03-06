const mongoose = require("mongoose");
const WorkSchema = mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 2, maxlength: 30 },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { versionKey: false, toJSON: { virtuals: true }, id: false }
);
WorkSchema.virtual("category", {
  ref: "Category",
  localField: "categoryId",
  foreignField: "_id",
  justOne: true,
});
const Work = mongoose.model("Work", WorkSchema, "works");
module.exports = Work;
