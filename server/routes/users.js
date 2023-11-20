const express = require("express");
const router = express.Router();
const { User } = require("../models/user");

router.post("/register", async (req, res) => {
  //checks if all the input feilds are filled
  if (Object.values(req.body).includes("")) {
    return res.status(400).send("Inputs cannot be empty.");
  }
  try {
    //create the new user
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.send(user);
  } catch (error) {
    //send any erros
    res.send(error);
  }
});
