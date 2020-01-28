import createRepository from "~/repositories/Repository";
// import PromotionRepository from "~/repositories/PromotionRepository";
// import UserRepository from "~/repositories/UserRepository";
// import RoleRepository from "~/repositories/RoleRepository";

export default (ctx, inject) => {
  // const repositories = {
  //   promotion: PromotionRepository(ctx.$axios),
  //   user: UserRepository(ctx.$axios),
  //   role: RoleRepository(ctx.$axios)
  // };

  inject("repositories", createRepository(ctx.$axios));
};
