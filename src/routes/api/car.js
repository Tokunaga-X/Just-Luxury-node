const express = require("express");
const mongoose = require("mongoose");
const uuid = require("uuid");

const router = express.Router();

// Use model
const Items = require("../../models/Items");
const testname = "test";
const testprice = "testprice";

// Get
router.get("/", (req, res) => {
  Items.find()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

// Add

router.post("/add", async (req, res) => {
  await Items.create(req.body)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

// Delete
router.delete("/delete/:id", async (req, res) => {
  await Items.deleteOne({ _id: req.params.id })
    .then(info => {
      res.send(info);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
