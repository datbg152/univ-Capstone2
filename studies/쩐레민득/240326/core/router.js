class Router {
  constructor(outlet) {
    this.outlet = outlet;
    this._routes = [];
  }

  routes(routes) {
    this._routes = routes;
    return this;
  }

  back() {
    window.history.back();
    return this;
  }

  forward() {
    window.history.forward();
    return this;
  }

  reload() {
    window.location.reload();
  }

  render() {
    const { pathname } = location;

    const getCurrentRoute = this._routes.find(
      (route) => route.path === pathname
    );

    if (getCurrentRoute) {
      document.title = getCurrentRoute.title;
      this.outlet.innerHTML = getCurrentRoute.render(getCurrentRoute.data);
    } else {
      history.replaceState("", "", "/");
      this.render();
    }

    return this;
  }

  init() {
    // Handle navigation

    const eventsMap = {
      link: (e) => {
        history.pushState({}, "", e.target.href);
      },
      back: (e) => {
        this.back();
      },
      forward: () => {
        this.forward();
      },
      reload: () => {
        this.reload();
      }
    };

    window.addEventListener("click", (e) => {
      const _internal_router_keys = ["link", "back", "forward", "reload"];
      const dataset = e.target.dataset;

      const getRouterProps = Object.keys(dataset).filter((d) =>
        _internal_router_keys.includes(d)
      );

      const isRouterElement = !!getRouterProps.length;

      if (isRouterElement) {
        e.preventDefault();

        eventsMap[getRouterProps[0]](e);
        this.render();
      }
    });

    // Update router at first load and history state changed
    window.addEventListener("popstate", this.render.bind(this));
    window.addEventListener("DOMContentLoaded", this.render.bind(this));
  }
}

export default Router;
