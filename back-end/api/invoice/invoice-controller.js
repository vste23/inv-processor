const router = require("express").Router();
const fs = require("fs");
const InvoiceService = require("../../services/invoice.service");
const { validateCSV } = require("../../misc/csv-validator");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

const getAllInvoices = async (req, res) => {
try {
        const invoices = await InvoiceService.getAllInvoices();
        return res.status(200).json({status: 'success', data: invoices})
    } catch(e) {
        return res.status(400).json({error: 'Something went wrong, please contact suport'});
    }
}

const createInvoices = async (req, res) => {
    try {
        let data = fs.createReadStream(req.file.path,'utf8');
        const csvData = await validateCSV(data);
        const rows = csvData.data;
        const errors = csvData.inValidMessages;

        if (errors && errors.length > 0) {
            return res.status(400).json({errorsList: errors});
        }

        await InvoiceService.createInvoices(rows);

        return res.status(200).json({status: 'success', data: rows})
    } catch(e) {
        return res.status(500).json({error: 'Something went wrong, please contact suport'});
    }
};


router.get("/list", getAllInvoices);
router.post("/", upload.single('file'), createInvoices);

module.exports = router;