console.log("On");

// const allArticles = document.querySelectorAll('article')
// function handleClick(event){
//     event.target.classList.add('show')
//     console.log("aan")
// }

// //loop over allemaal heen
// allArticles.forEach(article => {
//     article.addEventListener('click', handleClick)
// })

var hoverzone = document.querySelector(".project.seven");
var bender = document.querySelector(".bender");

hoverzone.addEventListener("mouseover", gaatSlapen);
hoverzone.addEventListener("mouseleave", wordtWakker);

function gaatSlapen () {
    bender.classList.add('slapen');
    console.log("ZZZ")
}

function wordtWakker () {
    bender.classList.remove('slapen');
    console.log("ZZZ")
}
