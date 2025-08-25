import {
  BadRequestException,
  NotFoundException,
} from "../common/helpers/exception.helper";
import prisma from "../common/prisma/init.prisma";

export const likeService = {
  create: async function (req) {
    return `This action create`;
  },

  findAll: async function (req) {
    const { user_id, res_id } = req.body;
    const findAllUserLikeRes = await prisma.like_res.findMany({
      where: {
        user_id: user_id,
        res_id: res_id,
      },
    });
    return findAllUserLikeRes;
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
    return `This action updates a id: ${req.params.id} like`;
  },

  remove: async function (req) {
    return `This action removes a id: ${req.params.id} like`;
  },
  unlikeOrLike: async function (req) {
    const { user_id, res_id } = req.body;
    if (user_id == undefined || res_id == undefined) {
      throw new NotFoundException("User Or Restaurant not in database");
    }
    const userExist = await this.findOne(req, "user", "user_id", user_id);
    const resExist = await this.findOne(req, "restaurant", "res_id", res_id);
    if (!userExist || !resExist) {
      throw new NotFoundException("User Or Restaurant not in database");
    }

    const isLike = await prisma.like_res.findFirst({
      where: { user_id: user_id, res_id: res_id },
    });

    if (!isLike) {
      await prisma.like_res.create({
        data: {
          user_id: user_id,
          res_id: res_id,
          date_like: new Date(),
        },
      });
      return `User ${userExist.full_name} like successfully`;
    } else {
      await prisma.like_res.deleteMany({
        where: { user_id: user_id, res_id: res_id },
      });
      return `User ${userExist.full_name} unlike successfully`;
    }
  },

  getLike: async function (req) {
    const { user_id, res_id } = req.body;
    console.log({ user_id, res_id });

    let isUserExist;
    let isResExist;

    if (user_id !== undefined) {
      isUserExist = await this.findOne(req, "user", "user_id", user_id);
    }
    if (res_id !== undefined) {
      isResExist = await this.findOne(req, "restaurant", "res_id", res_id);
    }

    console.log({ isUserExist, isResExist });

    if (isUserExist == 0) throw new NotFoundException("User not in database");
    if (isResExist == 0)
      throw new NotFoundException("restaurant not in database");

    return await this.findAll(req);
  },
};
