function initHeader() {
  const header = document.querySelector(".header-bar"); // ✅ fixed class
  if (!header) return;

  // ✅ Set page title
  const titleEl = header.querySelector("h1");
  if (titleEl && typeof PAGE_TITLE === "string") {
    titleEl.textContent = PAGE_TITLE;
  }

  // ✅ Blur active icon
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = header.querySelectorAll(".header-icons a");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      const icon = link.querySelector("img");
      if (icon) icon.classList.add("blur");
    }
  });

  // ✅ Center the button bar (separate from header)
  const scrollInner = document.querySelector(".category-scroll-inner");
  if (scrollInner) {
    scrollInner.style.justifyContent = "center";
  }
}
