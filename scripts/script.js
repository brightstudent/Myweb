// JavaScript Document

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//var deNav = document.querySelector("nav ul:first-of-type");
//var deButton = document.querySelector("nav div button");
//
//deButton.addEventListener("click", toggleMenu);
//
//function toggleMenu(event) {
//    deNav.classList.toggle("toonMenu");
//}
//
//console.log(deButton);
//console.log(deNav);

let circle = document.getElementsBy('circle');

const onMouseMove = (e) => {
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);
