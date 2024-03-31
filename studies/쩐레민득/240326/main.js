import Router from "./core/router";
import home from "./views/home";
import profile from "./views/profile";
import repository from "./views/repository";
import community from "./views/community";

const outlet = document.getElementById("app");

const router = new Router(outlet);

router
  .routes([
    {
      path: "/",
      title: "Home",
      render: home
    },
    {
      path: "/profile",
      title: "Profile",
      render: profile
    },
    {
      path: "/repository",
      title: "Repository",
      render: repository
    },
    {
      path: "/community",
      title: "Community",
      render: community
    }
  ])
  .init();
