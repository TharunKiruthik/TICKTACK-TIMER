/* Hamburger menu interactivity */

const hamMenu = document.querySelector(".hamburger-menu"); // Ham Menu Button

// Toggles ham menu display

const toggleHamMenuDisplay = () => {
  const hamMenuIcon = document.querySelector("#ham-menu-icon");
  const hamMenuClose = document.querySelector("#ham-menu-close");
  const hamMenuDisplay = document.querySelector(".mobile-nav-menu");
  hamMenuIcon.classList.toggle("hidden");
  hamMenuClose.classList.toggle("hidden");
  hamMenuDisplay.classList.toggle("block");
  hamMenuDisplay.classList.toggle("slide-in-right");
  toggleScrollBar();
};

// Locks scroll when mobile nav menu is open

const toggleScrollBar = () => {
  const body = document.body;
  body.classList.toggle("overflow-hidden");
};

hamMenu.addEventListener("click", toggleHamMenuDisplay);

/* Footer */

// Targets
const aboutButton = document.querySelector(".about-clickable");
const careersButton = document.querySelector(".careers-clickable");
const socialImpactButton = document.querySelector(".social-impact-clickable");
const businessPartnersButton = document.querySelector(
  ".business-partners-clickable"
);
const orderButton = document.querySelector(".order-clickable");

// Toggles the display of an element
const toggleDisplay = (elem) => {
  elem.classList.toggle("hidden");
};

// Rotates an element 180deg
const rotate180 = (elem) => elem.classList.toggle("rotate-180");

// Toggles hidden menu and rotates the arrow icons
const toggleAbout = (elem, icon) => {
  toggleDisplay(elem);
  rotate180(icon);
};

// Event listeners for footer accordions (set at less than 750px window width)

aboutButton.addEventListener("click", () => {
  const aboutHidden = document.querySelector(".about-hidden");
  const aboutArrow = document.querySelector(".about-arrow");
  toggleAbout(aboutHidden, aboutArrow);
});

careersButton.addEventListener("click", () => {
  const careersHidden = document.querySelector(".careers-hidden");
  const careersArrow = document.querySelector(".careers-arrow");
  toggleAbout(careersHidden, careersArrow);
});

socialImpactButton.addEventListener("click", () => {
  const socialImpactHidden = document.querySelector(".social-impact-hidden");
  const socialImpactArrow = document.querySelector(".social-impact-arrow");
  toggleAbout(socialImpactHidden, socialImpactArrow);
});

businessPartnersButton.addEventListener("click", () => {
  const businessPartnersHidden = document.querySelector(
    ".business-partners-hidden"
  );
  const businessPartnersArrow = document.querySelector(
    ".business-partners-arrow"
  );
  toggleAbout(businessPartnersHidden, businessPartnersArrow);
});

orderButton.addEventListener("click", () => {
  const orderHidden = document.querySelector(".order-hidden");
  const orderArrow = document.querySelector(".order-arrow");
  toggleAbout(orderHidden, orderArrow);
});
