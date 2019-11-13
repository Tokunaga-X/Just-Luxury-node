const express = require("express");
const mongoose = require("mongoose");
const uuid = require("uuid");

const router = express.Router();

// Use model
const Goods = require("../../models/Goods");

// Get
router.get("/", (req, res) => {
  Goods.find()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

// Add

router.post("/add", async (req, res) => {
  await Goods.create(req.body)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

// Delete
router.delete("/delete/:id", async (req, res) => {
  await Goods.deleteOne({ _id: req.params.id })
    .then(info => {
      res.send(info);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
