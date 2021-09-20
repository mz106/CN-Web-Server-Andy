
const express = require("express");

// const { helloWorld } = require("./controllers")
const indexRouter = require("./routes/index");
const adminRouter = require("./routes/admin");
const filmRouter = require("./routes/film");
const errorRouter = require("./routes/error");

const app = express();

app.use(express.json());

app.use("/", indexRouter);
app.use("/admin", adminRouter);
app.use("/film", filmRouter);
app.use("*", errorRouter);

app.listen(3000, () => {
    console.log("App is listening");
});