// Author: Zdeněk Doležal 2019-*
// Toggle navigation
const mainNav = document.querySelector("#main-nav");
const toggleNavigation = document.querySelector("#toggle-navigation");
const navIcon = document.querySelector("#nav-icon");


// toggleNavigation.addEventListener("click", () => {
//     mainNav.classList.toggle("offset-x-500");
//     navIcon.classList.toggle("fa-bars");
//     navIcon.classList.toggle("fa-xmark");
// });

// Cursor background
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX - window.scrollX + 'px';
    cursor.style.top = e.pageY - window.scrollY + 'px';

});

// Position indicator
// const positionIndicator = document.querySelector("#position-indicator");
// const indicatorContainer = document.querySelector("#nav-list-wrapper");
// document.addEventListener("scroll", (e) => {
//     let height = indicatorContainer.offsetHeight;
//     let relativeHeight = window.scrollY / (scr.scrollHeight - window.innerHeight);
//     positionIndicator.style.top = (relativeHeight * height) + 'px';
// });


const paginationItems = document.querySelectorAll(".pagination-item");
const paginationBtns = document.querySelectorAll(".pagination-nav-item");

function focusSection(i) {
    paginationBtns.forEach((btn) => {
        btn.classList.remove("active");
    });
    paginationBtns[i].classList.add("active");
    paginationItems.forEach((item) => {
        item.style.display = "none";
    });
    let section = paginationItems[i];
    section.style.display = "block";
}

focusSection(0);