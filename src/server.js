
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { connection } = require("./db");
const port = process.env.PORT || 5000;

const Test = require("./models/film");
// const Film = require("./models/film");

const indexRouter = require("./routes/index");
const testRouter = require("./routes/test");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
// const filmRouter = require("./routes/film");
const errorRouter = require("./routes/error");

const { testMiddle } = require("./middleware/index");
const { hashPassword } = require("./middleware/user");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", indexRouter);
app.use("/test", testMiddle, testRouter);
app.use("/admin", adminRouter);
app.use("/user", hashPassword, userRouter);
// app.use("/film", filmRouter);
app.use("*", errorRouter);

app.listen(3000, async () => {
    console.log("App is listening");
    connection.authenticate();
    console.log("Connection made");
    // await Test.sync({alter: true});
});