const express = require('express')
const port = require('./server')

module.exports = function(server) {
    const protectedApi = express.Router();
    server.use("/api", protectedApi);

    server.use("/status", (req, res) =>
        res.send(`BACKEND is runner.`) // ${port}
    );
    const register = require('../api/registerService')
    register.register(protectedApi, 'register')

    server.use(express.static(require("path").join(__dirname, "../public")))
    }


