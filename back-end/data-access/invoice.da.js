const db = require("../models");
const Invoice = db.invoices;

const findAll = () => {
    return Invoice.findAll();
}

const bulkCreate = (invoices) => {
    return Invoice.bulkCreate(invoices, {
        updateOnDuplicate: ["amount", "due"]
    });
}

module.exports = {
    findAll,
    bulkCreate
}