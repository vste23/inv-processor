const invoice_da = require("../data-access/invoice.da");
const moment = require("moment");
const { DATE_FORMAT } = require("../constants/formatting");

const getAllInvoices = () => {
    return invoice_da.findAll();
}

const createInvoices = (invoices) => {
    const processed = invoices.map(inv => {
        const invDate = moment(moment(inv.due).format(DATE_FORMAT), DATE_FORMAT, true);
        const daysDifference = invDate.diff(moment(), 'days');

        return {
            ...inv,
            amount: inv.amount * (daysDifference > 30 ? 0.5 : 0.3) 
        }
    });
    return invoice_da.bulkCreate(processed);
}

module.exports = {
    getAllInvoices,
    createInvoices
}