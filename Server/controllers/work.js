const express = require("express");
const router = express.Router();
const Work = require("../models/work");
const worksLogic = require("../logic/work-logic");

router.get("/", async (request, response) => {
  try {
    const Works = await worksLogic.getAllWorks();
    response.json(Works);
  } catch (error) {
    response.status(500).send(error);
  }
});
// http://localhost:3000/api/works/work/61541e824fcbe1be045a7962
router.get("/work/:id", async (request, response) => {
  const id = request.params.id;
  try {
    const work = await worksLogic.getOneWork(id);
    response.json(work);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.post("/", async (request, response) => {
  const newWork = new Work(request.body);
  try {
    const work = await worksLogic.addOneWork(newWork);
    response.json(work);
  } catch (error) {
    response.status(500).send(error);
  }
});

// PUT http://localhost:3000/api/works/work/:_id
router.put("/work/:_id", async (request, response) => {
  const workUpdate = new Work(request.body);

  try {
    const work = await worksLogic.updateWork(workUpdate);
    response.json(work);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;
