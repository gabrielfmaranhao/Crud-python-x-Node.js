"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailUserController =
  exports.deleteUserController =
  exports.updateUserController =
  exports.listUserController =
  exports.createUserController =
    void 0;
const errors_1 = require("../../errors");
const create_service_1 = require("../../../services/users/create.service");
const list_service_1 = require("../../../services/users/list.service");
const detail_service_1 = require("../../../services/users/detail.service");
const update_service_1 = require("../../../services/users/update.service");
const delete_service_1 = require("../../../services/users/delete.service");
const createUserController = (request, response) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const data = request.body;
      const user = yield (0, create_service_1.createUserService)(data);
      const { password, is_staff } = user,
        createUserRest = __rest(user, ["password", "is_staff"]);
      return response.status(201).json(createUserRest);
    } catch (error) {
      if (error instanceof errors_1.AppError) {
        return response
          .status(error.statusCode)
          .json({ detail: error.message });
      }
    }
  }); //OK
exports.createUserController = createUserController;
const listUserController = (request, response) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const list = yield (0, list_service_1.listUserService)();
    const newList = list.map((obj) => {
      const { password, is_staff } = obj,
        rest = __rest(obj, ["password", "is_staff"]);
      return rest;
    });
    return response.status(200).json(newList);
  }); //OK
exports.listUserController = listUserController;
const updateUserController = (request, response) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const user_id = request.params.user_id;
      console.log(user_id);
      const data = request.body;
      const user = yield (0, update_service_1.updateUserService)(
        parseInt(user_id),
        data
      );
      const { password, is_staff } = user,
        rest = __rest(user, ["password", "is_staff"]);
      return response.status(200).json(rest);
    } catch (error) {
      if (error instanceof errors_1.AppError) {
        return response
          .status(error.statusCode)
          .json({ detail: error.message });
      }
    }
  }); //OK
exports.updateUserController = updateUserController;
const deleteUserController = (request, response) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const user_id = request.params.user_id;
      yield (0, delete_service_1.deleteUserService)(parseInt(user_id));
      return response.status(200).json({});
    } catch (error) {
      if (error instanceof errors_1.AppError) {
        return response
          .status(error.statusCode)
          .json({ detail: error.message });
      }
    }
  }); //OK
exports.deleteUserController = deleteUserController;
const detailUserController = (request, response) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const user_id = request.params.user_id;
      const user = yield (0, detail_service_1.detailUserService)(
        parseInt(user_id)
      );
      const { password, is_staff } = user,
        rest = __rest(user, ["password", "is_staff"]);
      return response.status(200).json(rest);
    } catch (error) {
      if (error instanceof errors_1.AppError) {
        return response
          .status(error.statusCode)
          .json({ detail: error.message });
      }
    }
  }); //OK
exports.detailUserController = detailUserController;
