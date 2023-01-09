"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserController = void 0;
const errors_1 = require("../../errors");
const login_service_1 = require("../../services/session/login.service");
const loginUserController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = request.body;
        const token = yield (0, login_service_1.sessionLoginService)(data);
        return response.status(200).json({ access: token });
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return response.status(error.statusCode).json({ detail: error.message });
        }
    }
});
exports.loginUserController = loginUserController;
