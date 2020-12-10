//movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//items to animate
const title = document.querySelector('.info h1');
const price = document.querySelector('.info h2');
const descrition = document.querySelector('.info h3')
const image = document.querySelector('.sneaker img');
const circle = document.querySelector('.circle');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase');
//movement animation
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight  - e.pageY) / 25;

  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

//animation in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //pop in
  title.style.transform = "translateZ(130px)"
  price.style.transform = "translateZ(130px)"
  descrition.style.transform = "translateZ(80px)"
  image.style.transform = "translateZ(150px) rotate(-15deg)"
  circle.style.transform = "translateZ(80px)"
  sizes.style.transform = "translateZ(60px)"
  purchase.style.transform = "translateZ(40px)"
});
//animation out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = "rotateX(0deg) rotateY(0deg)";
  //pop out
  title.style.transform = "translateZ(0)"
  price.style.transform = "translateZ(0)"
  descrition.style.transform = "translateZ(0)"
  image.style.transform = "translateZ(0) rotate(0deg)"
  circle.style.transform = "translateZ(0)"
  sizes.style.transform = "translateZ(0)"
  purchase.style.transform = "translateZ(0)"
});

//add class active to chosen size
  //get all buttons
const buttons = document.querySelectorAll(".sizes .btn");
  // Loop through the buttons and add the active class to the current/clicked button

for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', ()=>{
    let current = document.querySelectorAll(".active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    // Add the active class to the current/clicked button
    buttons[i].className += ' active'
  })
}



