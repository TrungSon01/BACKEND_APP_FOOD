import {
  BadRequestException,
  NotFoundException,
} from "../common/helpers/exception.helper";
import prisma from "../common/prisma/init.prisma";
export const orderService = {
  create: async function (req, table, data) {
    const result = await prisma[table].create({
      data: data,
    });
    if (!result) throw new BadRequestException("cannot insert");
    return 1;
  },

  findAll: async function (req) {
    return `This action returns all order`;
  },

  findOne: async function (req, table, field, id) {
    if (!prisma[table]) {
      throw new BadRequestException(`Model ${table} not exist`);
    }
    const isExist = await prisma[table].findUnique({
      where: { [field]: id },
    });
    if (!isExist) {
      return 0;
    }
    return isExist;
  },

  update: async function (req) {
    return `This action updates a id: ${req.params.id} order`;
  },

  remove: async function (req) {
    return `This action removes a id: ${req.params.id} order`;
  },
  UserOrderFood: async function (req) {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;
    const isUserExist = await this.findOne(req, "user", "user_id", user_id);
    const isFoodExist = await this.findOne(req, "food", "food_id", food_id);
    if (!isUserExist || !isFoodExist) {
      throw new NotFoundException("User Or Food not in database");
    }
    const data = {
      user_id: user_id,
      food_id: food_id,
      amount: amount,
      code: code,
      arr_sub_id: arr_sub_id,
    };
    if (amount <= 0 || !amount) {
      throw new BadRequestException(
        "Invalid data amount not less than 0 or undefine"
      );
    }

    const orderFood = await this.create(req, "order", data);
    if (orderFood == 1) return `Order successfully `;
    else if (orderFood !== 1)
      throw new BadRequestException("Order Error, try again");
  },
};
