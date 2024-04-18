function setThemeMode(mode) {
  const switchThemeModeElem = document.querySelector("#switch-theme-mode");
  const labelSwitchThemeModeElem = document.querySelector(
    "#label-switch-theme-mode"
  );

  document.documentElement.setAttribute("data-ui-theme", mode);

  switchThemeModeElem.checked = mode === "dark";
  labelSwitchThemeModeElem.textContent = mode.toUpperCase();
}

function initThemeMode() {
  const getThemeMode = localStorage.getItem("theme") || "dark";

  setThemeMode(getThemeMode);
}

function switchThemeModeHandler() {
  const switchThemeModeElem = document.querySelector("#switch-theme-mode");

  switchThemeModeElem.addEventListener("change", function (e) {
    const getThemeAttr = document.documentElement.getAttribute("data-ui-theme");

    const themeToggleMap = {
      true: "light",
      false: "dark"
    };

    localStorage.setItem("theme", themeToggleMap[getThemeAttr === "dark"]);

    setThemeMode(themeToggleMap[getThemeAttr === "dark"]);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initThemeMode();
  switchThemeModeHandler();
});
