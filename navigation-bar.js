
//First, select your classes using the DOM's querySelector method and store them in variables so they are reusable.

const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");

function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}

function toggleHamburger() {
  navMenu.classList.toggle("show");
}

//This function uses the event object properties to identify the elements that the event handler is attached whenever click event occers
dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

   dropdownElement.classList.toggle("active");
   dropdown.forEach((drop) => {
    console.log(drop);
    console.log("-----");
     if (drop.id !== btn.dataset["dropdown"]) {
      console.log(drop.id);
      drop.classList.remove("active");
     }
   });
   e.stopPropagation();
   btn.setAttribute(
    "aria-expanded",
    btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
  );
  });
});

// close dropdown menu when the dropdown links are clicked
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();//added from GitHub Source Code
  })
);

// close dropdown menu when you click on the document body
document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

// close dropdown when the escape key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdownMenu();
    setAriaExpandedFalse();
  }
});
hamburgerBtn.addEventListener("click", toggleHamburger);
