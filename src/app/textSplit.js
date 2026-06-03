"use client";

export function splitText(string) {
  return string.split("").map(spanLetter).join("");
}

function spanLetter(letter, index) {
  return `<span aria-hidden="true" class="letter-${index}">${letter}</span>`;
}

export function textSplitTargets(selectors) {
  const targets = document.querySelectorAll(selectors);
  targets?.forEach((target) => {
    target.ariaLabel = target.textContent;
    target.innerHTML = target.textContent.split("").map(spanLetter).join("");
  });
}

export function isHover() {
  const menuItems = document.querySelectorAll("[data-split]");
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("mouseenter", () => {
      if (menuItem.classList.contains("active")) return;
      menuItem.classList.add("is-hovered");
      menuItem.classList.remove("is-leaving");
    });

    menuItem.addEventListener("mouseleave", () => {
      if (menuItem.classList.contains("active")) return;
      menuItem.classList.remove("is-hovered");
      menuItem.classList.add("is-leaving");
    });
  });
}
