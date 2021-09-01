module.exports = (sequelize, Sequelize) => {
    const Invoice = sequelize.define("invoice", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      amount: {
        type: Sequelize.DOUBLE
      },      
      due: {
        type: Sequelize.DATE
      },
    });
  
    return Invoice;
  };
  