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
exports.is_superuserMiddleware = void 0;
const is_superuserMiddleware = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (request.user.is_superuser) {
        return next();
    }
    else if (request.user.user_id === parseInt(request.params.user_id)) {
        return next();
    }
    else {
        return response.status(403).json({ detail: "You do not have permission to perform this action." });
    }
});
exports.is_superuserMiddleware = is_superuserMiddleware;
