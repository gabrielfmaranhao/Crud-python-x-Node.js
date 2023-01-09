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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailUserService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const entities_1 = __importDefault(require("../../entities"));
const errors_1 = require("../../src/errors");
const detailUserService = (user_id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(
      entities_1.default
    );
    const findUser = yield userRepository.findOneBy({ id: user_id });
    if (!findUser) {
      throw new errors_1.AppError("Not found.", 404);
    }
    return findUser;
  });
exports.detailUserService = detailUserService;
