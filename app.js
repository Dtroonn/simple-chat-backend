const express = require("express");


const app = express();

const server = require("http").createServer(app);

module.exports = {
    app,
    server
}