const express = require("express");
const router = express.Router();
const { User } = require("../models");

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

router.post("/login", async (req, res) => {
  //checks if all the input feilds are filled
  if (Object.values(req.body).includes("")) {
    return res.status(400).send("Inputs cannot be empty.");
  }
  try {
    //Find the user
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      // checks if the user does not exist
      return res.status(404).send("Invalid user");
    } else {
      // checks if the passwords match
      if (user.password === req.body.password) {
        return res.send(user);
      } else {
        return res.status(400).send("Incorrect password");
      }
    }
  } catch (error) {
    //send any erros
    res.send(error);
  }
});

module.exports = router;
