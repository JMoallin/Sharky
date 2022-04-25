const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");
const nav = document.querySelector(".main-nav");
// const nav = document.getElementsByClassName("main-nav")[0];

// console.log(nav); logs to console in inspect 

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);