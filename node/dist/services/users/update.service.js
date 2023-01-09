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
exports.updateUserService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const entities_1 = __importDefault(require("../../entities"));
const errors_1 = require("../../errors");
const bcrypt_1 = require("bcrypt");
const updateUserService = (user_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(entities_1.default);
    const findUser = yield userRepository.findOneBy({ id: user_id });
    if (!findUser) {
        throw new errors_1.AppError("User not found.", 404);
    }
    const findUserUsername = yield userRepository.findOneBy({ username: data.username });
    if (findUserUsername) {
        throw new errors_1.AppError("A user with that username already exists");
    }
    const findUserEmail = yield userRepository.findOneBy({ email: data.email });
    if (findUserEmail) {
        throw new errors_1.AppError("This field email must be unique.");
    }
    if (data.password) {
        data.password = "bcrypt$".concat(yield (0, bcrypt_1.hash)(data.password, 12));
    }
    yield userRepository.update(user_id, data);
    const user = yield userRepository.findOneBy({ id: user_id });
    return user;
});
exports.updateUserService = updateUserService;
