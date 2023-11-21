const express = require("express");
const router = express.Router();
const { Item } = require("../models");

router.use(express.json());

// GET /items
router.get("/", async (req, res) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    //finding the item by Id
    const item = await Item.findByPk(req.params.id);
    return res.send(item);
  } catch (error) {
    //send any erros
    return res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  //checks if all the input feilds are filled
  if (Object.values(req.body).includes("")) {
    return res.status(400).send("Inputs cannot be empty.");
  }
  try {
    //creating an item
    const item = await Item.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
    });
    return res.send(item);
  } catch (error) {
    //send any erros
    return res.status(400).send(error);
  }
});

router.put("/:id", async (req, res) => {
  //checks if all the input feilds are filled
  if (Object.values(req.body).includes("")) {
    return res.status(400).send("Inputs cannot be empty.");
  }
  try {
    //finding the item by Id
    const item = await Item.findByPk(req.params.id);
    //updating the item
    const updatedItem = await item.update({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
    });
    return res.send(updatedItem);
  } catch (error) {
    //send any erros
    return res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    //finding the item by Id
    const item = await Item.findByPk(req.params.id);
    await item.destroy();
    return res.send(`${item.name} has been deleted.`);
  } catch (error) {
    //send any erros
    return res.status(400).send(error);
  }
});

module.exports = router;
