import {
  BadRequestException,
  NotFoundException,
} from "../common/helpers/exception.helper";
import prisma from "../common/prisma/init.prisma";

export const restaurantService = {
  create: async function (req, table, data) {
    const result = await prisma[table].create({
      data: data,
    });
    if (!result) throw new BadRequestException("cannot insert");
    return 1;
  },

  findOne: async function (req, table, data) {
    const result = await prisma[table].findFirst({
      where: data,
    });
    if (!result) return 0; // ko thấy data
    else return result; // có thấy data
  },

  findAll: async function (req) {
    const { user_id, res_id } = req.body;
    const findAllRateRes = await prisma.rate_res.findMany({
      where: {
        user_id: user_id,
        res_id: res_id,
      },
    });
    return findAllRateRes;
  },

  update: async function (req) {
    return `This action updates a id: ${req.params.id} restaurant`;
  },

  remove: async function (req) {
    return `This action removes a id: ${req.params.id} restaurant`;
  },
  addReview: async function (req) {
    const { user_id, res_id, amount } = req.body;
    const isUserExist = await this.findOne(req, "user", { user_id: user_id });
    const isResExist = await this.findOne(req, "restaurant", {
      res_id: res_id,
    });
    const isRate = await this.findOne(req, "rate_res", {
      user_id: user_id,
      res_id: res_id,
    });
    if (isResExist == 0 || isUserExist == 0) {
      throw new NotFoundException("User Or Restaurant not in database");
    }
    const data = {
      user_id: user_id,
      res_id: res_id,
      amount: amount,
      date_rate: new Date(),
    };
    if (isRate == 0) return await this.create(req, "rate_res", data);
    else throw new BadRequestException("User was rated");
  },
  getRate: async function (req) {
    const { user_id, res_id } = req.body;
    const isUserExist = await this.findOne(req, "user", { user_id: user_id });
    const isResExist = await this.findOne(req, "restaurant", {
      res_id: res_id,
    });
    if (!isResExist || !isUserExist) {
      throw new NotFoundException("User Or Restaurant not in database");
    }
    const result = await this.findAll(req);
    return result;
  },
};
