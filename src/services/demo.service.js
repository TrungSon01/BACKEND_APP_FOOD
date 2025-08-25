import prisma from "../common/prisma/init.prisma";
export const demoService = {
  create: async function (req) {
    return `This action create`;
  },

  findAll: async function (req) {
    return `This action returns all demo`;
  },

  findOne: async function (req) {
    return `This action returns a id: ${req.params.id} demo`;
  },

  update: async function (req) {
    return `This action updates a id: ${req.params.id} demo`;
  },

  remove: async function (req) {
    return `This action removes a id: ${req.params.id} demo`;
  },
  isConnect: async function (req) {
    const { user_id } = req.body;
    const findUser = await prisma.user.findUnique({
      where: {
        user_id: user_id,
      },
    });
    console.log(findUser);
    return findUser;
  },
};
