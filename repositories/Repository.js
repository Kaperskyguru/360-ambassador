import PromotionRepository from "~/repositories/PromotionRepository";
import UserRepository from "~/repositories/UserRepository";
import RoleRepository from "~/repositories/RoleRepository";
import CategoryRepository from "~/repositories/CategoryRepository";
import TaskRepository from "~/repositories/TaskRepository";
import MessageRepository from "~/repositories/MessageRepository";
import InsightRepository from '~/repositories/InsightRepository'

export default $axios => ({
  promotion: PromotionRepository($axios),
  user: UserRepository($axios),
  role: RoleRepository($axios),
  category: CategoryRepository($axios),
  task: TaskRepository($axios),
  message: MessageRepository($axios),
  insight: InsightRepository($axios)
});
