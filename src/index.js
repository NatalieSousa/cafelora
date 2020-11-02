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

const order = document.querySelector(".order-btn");
const cup = document.querySelector(".drink__cup");
let ordered = false;
order.addEventListener("click", () => {
  cup.classList.toggle("drink__cup--selected");
  ordered = !ordered
  if (ordered === true) {
    order.textContent = "Objednat"
  } else {
    order.textContent = "Zrušit"
  };
});


const Layer = (props) => {
return `<div class="layer__color"
style="background-color: ${props.color}"
></div>
<div class="layer__label">${props.label}</div>`;
};

const slozeni = (props) => {
  const obsah = document.createElement("div");
  obsah.className = "Drink__slozeni";
  obsah.innerHTML = `
<div class="layer__label">mléčná pěna</div>
</div>
<div class="layer__label">teplé mléko</div>
</div>
<div class="layer__label">espresso</div>
</div>`;



return obsah;
};





//<div class="layer__label">mléčná pěna</div>
//</div>

//<div class="layer__label">teplé mléko</div>
//</div>

//<div class="layer__label">espresso</div>
//</div>















