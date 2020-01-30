import PromotionRepository from "~/repositories/PromotionRepository";
import UserRepository from "~/repositories/UserRepository";
import RoleRepository from "~/repositories/RoleRepository";
import CategoryRepository from "~/repositories/CategoryRepository";

export default $axios => ({
  promotion: PromotionRepository($axios),
  user: UserRepository($axios),
  role: RoleRepository($axios),
  category: CategoryRepository($axios)
});
