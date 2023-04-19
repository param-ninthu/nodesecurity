const express = require("express");
const router = express.Router();
const { getContact } = require("../controllers/contactController");

router.route("/").get((req, res) => {
  res.json({ message: "Get all contacts" });
});

router.route("/:id").get(getContact);

router.route("/").post();

router.route("/:id").put((req, res) => {
  res.json({ message: `Update contact for ${req.params.id}` });
});

router.route("/").delete((req, res) => {
  res.json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = router;
