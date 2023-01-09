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
exports.createUserService = void 0;
const errors_1 = require("../../errors");
const entities_1 = __importDefault(require("../../entities"));
const data_source_1 = __importDefault(require("../../data-source"));
const bcrypt_1 = require("bcrypt");
const createUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(entities_1.default);
    const findUser = yield userRepository.findOneBy({ username: data.username });
    if (findUser) {
        throw new errors_1.AppError("A user with that username already exists.", 400);
    }
    const findUserEmail = yield userRepository.findOneBy({ email: data.email });
    if (findUserEmail) {
        throw new errors_1.AppError("This email field must be unique.", 400);
    }
    data.password = "bcrypt$".concat(yield (0, bcrypt_1.hash)(data.password, 12));
    const user = userRepository.create(data);
    yield userRepository.save(user);
    return user;
});
exports.createUserService = createUserService;
