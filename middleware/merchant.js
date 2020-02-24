export default function({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    switch (store.state.auth.user.role.name) {
      case "promoter":
        return redirect("/affiliates");
      case "admin":
        return redirect("/admin");
      default:
        break;
    }
  } else {
    return redirect("/login");
  }
}
