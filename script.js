/*
  EDIT THESE LINKS BEFORE PUBLISHING.
  Replace the placeholder values with your real profile, Figma and Behance URLs.
*/
const LINKS = {
  behance: "YOUR_BEHANCE_URL",
  figma: "YOUR_FIGMA_URL",
  linkedin: "YOUR_LINKEDIN_URL",
};

function setLink(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  if (value && !value.startsWith("YOUR_")) {
    el.href = value;
    el.removeAttribute("aria-disabled");
  } else {
    el.href = "#contact";
    el.setAttribute("aria-disabled", "true");
    el.title = "Add your link in script.js";
  }
}

setLink("behanceLink", LINKS.behance);
setLink("figmaLink", LINKS.figma);
setLink("linkedinLink", LINKS.linkedin);
setLink("behanceFooterLink", LINKS.behance);
setLink("figmaFooterLink", LINKS.figma);

document.getElementById("year").textContent = new Date().getFullYear();
