function isDarkModePreferred() {
  console.log("in isDarkModePreferred() in dark-mode.js");
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

function applyDarkMode() {
  console.log("in applyDarkMode() in dark-mode.js");
  const isDarkMode = isDarkModePreferred();
  if (document.body) {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }
}

// Apply dark mode when DOM content is loaded
document.addEventListener("DOMContentLoaded", applyDarkMode);

// Listen for changes in color scheme preference
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", applyDarkMode);
