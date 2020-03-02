import RSVP from "rsvp";
export default async function({ store, from }) {
  let isInitialPageLoad = !from;

  if (isInitialPageLoad) {
    console.log(isInitialPageLoad);
    try {
      await RSVP.all([
        store.dispatch("category/get"),
        store.dispatch("promotion/latestPromotions"),
        store.dispatch("task/get"),
        store.dispatch("promotion/performance", store.state.auth.user._id),
        store.dispatch("message/get"),
        store.dispatch("promotion/get"),
        store.dispatch("insight/earningsGraph", store.state.auth.user._id),
        store.dispatch("promotion/promotionsByUserID", store.$auth.user._id)
      ]);
      //   await store.dispatch("message/get", store.state.auth.user._id);
    } catch (erro) {
      console.log(erro);
    }
  }
}
