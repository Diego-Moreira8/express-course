const express = require("express");
const helmet = require("helmet");
const theRouter = require("./the-router");
const userRouter = require("./user-router");

const app = express();

app.use(helmet());
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("public"));

app.use("/", theRouter);
app.use("/user", userRouter);

app.listen(3000);
