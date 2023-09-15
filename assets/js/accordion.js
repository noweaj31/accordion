"use strict";

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const accordionButton = item.querySelector(".accordion-btn");
  const accordionContent = item.querySelector(".accordion-content");

  accordionButton.addEventListener("click", () => {
    const expanded = accordionButton.getAttribute("aria-expanded") === "true";

    accordionButton.setAttribute("aria-expanded", !expanded);

    if (expanded) {
      accordionContent.setAttribute("hidden", "true");
    } else {
      accordionContent.removeAttribute("hidden");
    }
  });
});
