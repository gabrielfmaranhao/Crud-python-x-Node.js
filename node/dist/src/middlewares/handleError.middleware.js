"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrorMiddleware = void 0;
const errors_1 = require("../errors");
const handleErrorMiddleware = (error, req, res, nex) => {
    if (error instanceof errors_1.AppError) {
        return res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
    }
    console.log("Internal Server Error", error);
    return res.status(500).json("Internal Server Error");
};
exports.handleErrorMiddleware = handleErrorMiddleware;
