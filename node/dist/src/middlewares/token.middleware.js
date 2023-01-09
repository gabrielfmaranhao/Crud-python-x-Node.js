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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAuthTokenMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const entities_1 = __importDefault(require("../entities"));
const data_source_1 = __importDefault(require("../../data-source"));
const verifyAuthTokenMiddleware = (req, res, next) => {
    const userRepository = data_source_1.default.getRepository(entities_1.default);
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ detail: "Authorization header must contain two space-delimited values", code: "bad_authorization_header" });
    }
    token = token.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decode) => __awaiter(void 0, void 0, void 0, function* () {
        if (error) {
            return res.status(401).json({
                detail: "Given token not valid for any token type",
                code: "token_not_valid"
            });
        }
        const user = yield userRepository.findOneBy({ id: decode.user_id });
        req.user = { is_superuser: user.is_superuser, user_id: user.id };
        return next();
    }));
};
exports.verifyAuthTokenMiddleware = verifyAuthTokenMiddleware;
