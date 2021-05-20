let title = document.getElementsByTagName('h1');

// function blue() {
//     title[0].style.color = "blue";
// };

title[0].addEventListener("click", (e)=>{
    e.target.style.color = "blue";
});
