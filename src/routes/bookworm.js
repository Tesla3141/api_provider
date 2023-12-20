const express = require("express");
const router = express.Router();

const {
  getSevenHarryPotter,
  getManyBooks,
} = require("../controllers/bookworm");

router.route("/harryPotter").get(getSevenHarryPotter);
router.route("/manyBooks").get(getManyBooks);

module.exports = router;
