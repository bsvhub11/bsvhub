// scripts/flash.js

window.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(response => response.text())
    .then(html => {
      const container = document.getElementById("shared-header");
      container.innerHTML = html;

      // ✅ Just call the shared header logic
      if (typeof initHeader === "function") {
        initHeader();
      }
    });
});
