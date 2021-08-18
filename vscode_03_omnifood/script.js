///////////////////////////////////////////////////////////
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

///////////////////////////////////////////////////////////
// A Short Introduction to JavaScript
// ★ To see the result of the code, right click the page - Inspect - Console
console.log("Hello World!");

// Create a variable
const myName = "Jonas Schmedtmann";
console.log(myName);

// Create a variable
// ★ Select the element from 'html' page using 'class' name (like we did in the 'CSS')
const h1 = document.querySelector(".heading-primary");
console.log(h1);

///////////////////////////////////////////////////////////
// Change h1
// ★ Change 'h1' only when we CLICK it -> Only Java Script
// h1.addEventListener("click", function () {
//   h1.textContent = myName; // the actual text
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// ★ Set current year
//  Update 'year' at the 'footer' always same as the current year
// El : element
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear(); // current date
console.log(currentYear);
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// ★ Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  // ★ toggle : add & remove all at the same time
  // toggle will look at 'headerEl'
  // if it does have '.nav-open' class, it will remove it
  // otherwise, it will open it
  // NOT '.nav-open', it's 'nav-open' -> ONLY NAME!
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// ★ Smooth scrolling animation
// Move smoothly to go to the other part of the page when you click the button

// Get all anchor elements with links
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

// 'allLinks' are about multiple links
// However, we need to apply the effect each of them individually
// ★ So, we should use 'forEach' instead of 'addEventListener'
// parameters : link, e
allLinks.forEach(function (link) {
  // ※ e : event
  link.addEventListener("click", function (e) {
    // Currently the default function of the links is 'MouseEvent',
    // which leads users to one part of the page whenever the button is clicked
    // console.log(e);

    // We should turn this default behavior off
    // so that we can implement our own function with the effect we want
    e.preventDefault();
    // -> Now even though we click the button, nothing happens

    // Read 'href' attribute
    const href = link.getAttribute("href");
    // console.log(href);
    // -> Now when you click the button,
    // Inspect - 'console' will show you the 'href' element of the button
    // ex) #cta, #how, ...

    // Scroll back to top ex) logo
    // However, this doesn't work on 'Safari'
    // -> ★ To fix this, we need to implement some code about link on 'html' file
    if (href === "#")
      window.scrollTo({
        // top: 20, -> it means move to the place 20 lower the top
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const selectionEl = document.querySelector(href);
      selectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    // If we moved to the other part of the page by clicking one of the menu buttons
    // the menu part should be closed
    // contains: Check whether the link page is the element of the 'main-nav-link' class
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// ★ Sticky navigation
// As soon as we move out from the 'hero' section, we want to make the navigation sticky
// Otherwise, it should be on the top, not covering the top part of the 'hero' section

const sectionHeroEl = document.querySelector(".section-hero");

// obs: observer
// entries: array
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    // !ent.isIntersecting : ent.isIntersecting === false
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    // ent.isIntersecting : ent.isIntersecting === true
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // root: where this element should be appearing or not
    // null : We will observe the hero section "in the viewport"
    //        = It should move through the viewport
    root: null,
    // We will get an event as soon as 0% of 'sectionHeroEl' is inside of the viewport
    threshold: 0,

    // ★ How to appear navigation bar a bit earlier so that it would not cover the top part of the next section
    // If the navigation bar is appeared right after the 'header' is gone,
    // it is so late that it would overlap some top part of the second section
    // ★ So, we would give it a 'rootMargin' which is the same
    // as the height of the navigation bar is 8rem = 80px
    rootMargin: "-80px",
  }
);

// 'sectionHeroEl' is what we want to observe
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

// This code is given by the lecture
// Some browsers including 'Safari' doesn't support 'gap' property in 'flex' box
// However, this code would help even 'Safari' can identify 'gap' property of 'flex' box
// by adding 'no-flexbox-gap' class to the body

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
