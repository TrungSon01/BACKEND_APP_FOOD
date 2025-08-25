import { responseSuccess } from "../common/helpers/response.helper";
import { likeService } from "../services/like.service";

export const likeController = {
  create: async function (req, res, next) {
    const result = await likeService.create(req);
    const response = responseSuccess(result, `Create like successfully`);
    res.status(response.statusCode).json(response);
  },

  findAll: async function (req, res, next) {
    const result = await likeService.findAll(req);
    const response = responseSuccess(result, `Get all likes successfully`);
    res.status(response.statusCode).json(response);
  },

  findOne: async function (req, res, next) {
    const result = await likeService.findOne(req);
    const response = responseSuccess(
      result,
      `Get like #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  update: async function (req, res, next) {
    const result = await likeService.update(req);
    const response = responseSuccess(
      result,
      `Update like #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  remove: async function (req, res, next) {
    const result = await likeService.remove(req);
    const response = responseSuccess(
      result,
      `Remove like #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },
  remove: async function (req, res, next) {
    const result = await likeService.remove(req);
    const response = responseSuccess(
      result,
      `Remove like #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },
  unlikeOrLike: async function (req, res, next) {
    const result = await likeService.unlikeOrLike(req);
    const response = responseSuccess(result);
    res.status(response.statusCode).json(response);
  },
  getLike: async function (req, res, next) {
    const result = await likeService.getLike(req);
    const response = responseSuccess(result);
    res.status(response.statusCode).json(response);
  },
};
