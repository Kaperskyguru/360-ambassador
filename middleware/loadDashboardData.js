import RSVP from "rsvp";
export default async function({ store, from }) {
  let isInitialPageLoad = !from;
  if (isInitialPageLoad || from.path == "/login" || from.path == "/") {
    const { _id, role } = store.$auth.user;
    try {
      switch (role.name) {
        case "promoter":
          await RSVP.all([
            store.dispatch("category/get"),
            store.dispatch("promotion/latestPromotions"),
            store.dispatch("task/get"),
            store.dispatch("promotion/performance", _id),
            store.dispatch("message/get"),
            store.dispatch("promotion/get"),
            store.dispatch("insight/earningsGraph", _id),
            // store.dispatch("promotion/promotionsByUserID", _id),
            store.dispatch("promotion/joinedPromotions", _id),
            store.dispatch("notification/get")
            // store.dispatch("message/get", store.$auth.user._id)
          ]);
          break;

        case "merchant":
          await RSVP.all([
            store.dispatch(
              "promotion/promotionsByUserID",
              store.$auth.user._id
            ),
            store.dispatch("insight/earningsGraph", _id),
            store.dispatch("promotion/performance", _id),
            store.dispatch("message/get"),
            store.dispatch("category/get")
            // store.dispatch("notification/get", store.$auth.user._id)
          ]);
          break;
        default:
          break;
      }

      //   await store.dispatch("message/get", store.$auth.user._id);
    } catch (erro) {}
  }
}
