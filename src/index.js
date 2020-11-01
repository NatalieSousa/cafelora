import './index.html';
import './style.css';

console.log('funguju!');

const elm = document.getElementById("nav-btn");
elm.addEventListener("click", () => {
document.querySelector("nav").classList.toggle("nav-closed");
}
);

const menuSchovany = document.querySelector(".list");
menuSchovany.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("nav-closed") 
});


