const CSVFileValidator = require("csv-file-validator");
const { DATE_FORMAT } = require("../constants/formatting");
const moment = require("moment");
const requiredErrorFunction = (headerName, rowNumber, columnNumber) => {
    return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
};

const isDateValid = (dateString) => moment(moment(dateString).format(DATE_FORMAT), DATE_FORMAT, true).isValid();
const isAmountValid = (amountString) => {
    if (typeof amountString != "string") return false;
    return !isNaN(amountString) &&
           !isNaN(parseFloat(amountString));
};

const config = {
    headers: [
        {
            name: 'Id',
            inputName: 'id',
            required: true,
            requiredError: requiredErrorFunction
        },
        {
            name: 'Amount',
            inputName: 'amount',
            required: true,
            validate: (amountString) => isAmountValid(amountString),
            requiredError: requiredErrorFunction
        },
        {
            name: 'Due',
            inputName: 'due',
            required: true,
            validate: (dateString) => isDateValid(dateString),
            requiredError: requiredErrorFunction
        }
    ],
    isHeaderNameOptional: true
};

const validateCSV = async (file) => {
    const csvData = await CSVFileValidator(file, config);
    return csvData;
};

module.exports = {
    validateCSV
};