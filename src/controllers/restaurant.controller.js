import { responseSuccess } from "../common/helpers/response.helper";
import { restaurantService } from "../services/restaurant.service";

export const restaurantController = {
  create: async function (req, res, next) {
    const result = await restaurantService.create(req);
    const response = responseSuccess(result, `Create restaurant successfully`);
    res.status(response.statusCode).json(response);
  },

  findAll: async function (req, res, next) {
    const result = await restaurantService.findAll(req);
    const response = responseSuccess(
      result,
      `Get all restaurants successfully`
    );
    res.status(response.statusCode).json(response);
  },

  findOne: async function (req, res, next) {
    const result = await restaurantService.findOne(req);
    const response = responseSuccess(
      result,
      `Get restaurant #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  update: async function (req, res, next) {
    const result = await restaurantService.update(req);
    const response = responseSuccess(
      result,
      `Update restaurant #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  remove: async function (req, res, next) {
    const result = await restaurantService.remove(req);
    const response = responseSuccess(
      result,
      `Remove restaurant #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },
  remove: async function (req, res, next) {
    const result = await restaurantService.remove(req);
    const response = responseSuccess(
      result,
      `Remove restaurant #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },
  addReview: async function (req, res, next) {
    const result = await restaurantService.addReview(req);
    const response = responseSuccess(result, "addReview successfully");
    res.status(response.statusCode).json(response);
  },
  getRate: async function (req, res, next) {
    const result = await restaurantService.getRate(req);
    const response = responseSuccess(result, "getRate successfully");
    res.status(response.statusCode).json(response);
  },
};
