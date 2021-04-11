const btn1 = document.querySelector(".btn-alert");

btn1.addEventListener('click', function(e) {
    console.log(e);
    alert("button clicked")
})


// const btn2 = document.querySelector(".change-background")
// const red = document.querySelector(".red-background");
// const blue = document.querySelector(".blue-background");

// const changeColor = () => {
//     blue.classList.add("red-background");
// }

// btn2.addEventListener('click', changeColor);


const btn2 = document.querySelector(".change-background")
const red = document.querySelector(".red-background");
const blue = document.querySelector(".blue-background");

const toggleColor = () => {
    blue.classList.toggle("red-background");
}

btn2.addEventListener('click', toggleColor);