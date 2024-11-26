import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="theme"
export default class extends Controller {
  connect() {
    const currentTheme = localStorage.getItem("theme") || "default";
    document.documentElement.setAttribute("data-theme", currentTheme);
  }

  changeTheme(event) {
    console.log(`event ${event.target.dataset.theme}`)
    const selectedTheme = event.target.dataset.theme;
    if (selectedTheme) {
      document.documentElement.setAttribute("data-theme", selectedTheme);
      localStorage.setItem("theme", selectedTheme);
    }
  }
}