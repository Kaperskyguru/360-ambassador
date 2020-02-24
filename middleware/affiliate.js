export default function({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    switch (store.state.auth.user.role.name) {
      case "admin":
        return redirect("/admin");
      case "merchant":
        return redirect("/merchants");
      default:
        break;
    }
  } else {
    return redirect("/login");
  }
}
