const router = require("express").Router();
  
router.use("/invoices", require("./invoice/invoice-controller"));

module.exports = router;