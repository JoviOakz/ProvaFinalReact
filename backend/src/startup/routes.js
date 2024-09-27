const express = require("express");
const user = require("../routes/user");
const book = require("../routes/book");
const lending = require("../routes/lending");

module.exports = function (app) {
    app.use(express.json())
        .use("/book", book)
        .use("/user", user)
        .use("/lending", lending);
};