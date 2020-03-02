import RSVP from "rsvp";
export default async function({ store, from }) {
  let isInitialPageLoad = !from;
  if (isInitialPageLoad || from.path == "/login" || from.path == "/") {
    try {
      switch (store.state.auth.user.role.name) {
        case "promoter":
          await RSVP.all([
            store.dispatch("category/get"),
            store.dispatch("promotion/latestPromotions"),
            store.dispatch("task/get"),
            store.dispatch("promotion/performance", store.state.auth.user._id),
            store.dispatch("message/get"),
            store.dispatch("promotion/get"),
            store.dispatch("insight/earningsGraph", store.state.auth.user._id),
            store.dispatch(
              "promotion/promotionsByUserID",
              store.$auth.user._id
            ),
            store.dispatch("promotion/joinedPromotions", store.$auth.user._id)
          ]);
          break;

        case "merchant":
          await RSVP.all([
            store.dispatch(
              "promotion/promotionsByUserID",
              store.$auth.user._id
            ),
            store.dispatch("insight/earningsGraph", store.state.auth.user._id),
            store.dispatch("promotion/performance", store.state.auth.user._id),
            store.dispatch("message/get"),
            store.dispatch("category/get")
          ]);
          break;
        default:
          break;
      }

      //   await store.dispatch("message/get", store.state.auth.user._id);
    } catch (erro) {
      console.log(erro);
    }
  }
}
