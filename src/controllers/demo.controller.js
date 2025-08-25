import { responseSuccess } from "../common/helpers/response.helper";
import { demoService } from "../services/demo.service";
export const demoController = {
  create: async function (req, res, next) {
    const result = await demoService.create(req);
    const response = responseSuccess(result, `Create demo successfully`);
    res.status(response.statusCode).json(response);
  },

  findAll: async function (req, res, next) {
    const result = await demoService.findAll(req);
    const response = responseSuccess(result, `Get all demos successfully`);
    res.status(response.statusCode).json(response);
  },

  findOne: async function (req, res, next) {
    const result = await demoService.findOne(req);
    const response = responseSuccess(
      result,
      `Get demo #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  update: async function (req, res, next) {
    const result = await demoService.update(req);
    const response = responseSuccess(
      result,
      `Update demo #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  remove: async function (req, res, next) {
    const result = await demoService.remove(req);
    const response = responseSuccess(
      result,
      `Remove demo #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },
  isConnect: async function (req, res, next) {
    const result = await demoService.isConnect(req);
    const response = responseSuccess(result, "connect success");
    res.status(response.statusCode).json(response);
  },
};
