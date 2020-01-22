// import createRepository from "~/repository/Repository";
import PromotionRepository from "~/repositories/PromotionRepository";

export default (ctx, inject) => {
  const repositories = {
    promotion: PromotionRepository(ctx.$axios)
  };

  inject("repositories", repositories);
};
