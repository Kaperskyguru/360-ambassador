import RSVP from "rsvp";
export default async function({ store, from }) {
  let isInitialPageLoad = !from;

  if (isInitialPageLoad) {
    try {
      await RSVP.all([store.dispatch("role/get")]);
    } catch (erro) {}
  }
}
