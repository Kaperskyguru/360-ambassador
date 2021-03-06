export default function({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    switch (store.state.auth.user.role.name) {
      case "promoter":
        return redirect("/affiliates");
        break;
      case "merchant":
        return redirect("/merchants");
        break;
      default:
        break;
    }
  } else {
    return redirect("/login");
  }
}
