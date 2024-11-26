document.addEventListener("DOMContentLoaded", () => {
  const themeSelector = document.getElementById("theme-selector");
  const appBody = document.querySelector("body");

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    appBody.className = savedTheme + "-theme";
    themeSelector.value = savedTheme;
  }

  // Handle theme change
  themeSelector.addEventListener("change", (event) => {
    const selectedTheme = event.target.value;

    // Update the body class to match the selected theme
    appBody.className = `${selectedTheme}-theme`;

    // Save theme preference in localStorage
    localStorage.setItem("theme", selectedTheme);
  });
});