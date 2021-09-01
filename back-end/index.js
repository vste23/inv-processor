const express = require("express");
const apiRouter = require("./api/api-routes");
const db = require("./models");
db.sequelize.sync();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');

    next();
}
app.use(allowCrossDomain);

app.use("/api", apiRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
