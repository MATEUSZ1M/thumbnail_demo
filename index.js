//movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//items to animate
const title = document.querySelector('.info h1');
const descrition = document.querySelector('.info h3')
const image = document.querySelector('.sneaker img');
const circle = document.querySelector('.circle');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase');
//movement animation
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

  card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
});

//animation in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //pop in
  title.style.transform = "translateZ(130px)"
  descrition.style.transform = "translateZ(80px)"
  image.style.transform = "translateZ(150px) rotate(-15deg)"
  circle.style.transform = "translateZ(80px)"
  sizes.style.transform = "translateZ(100px)"
  purchase.style.transform = "translateZ(100px)"
});
//animation out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = "rotateX(0deg) rotateY(0deg)";
  //pop out
  title.style.transform = "translateZ(0)"
  descrition.style.transform = "translateZ(0)"
  image.style.transform = "translateZ(0) rotate(0deg)"
  circle.style.transform = "translateZ(0)"
  sizes.style.transform = "translateZ(0)"
  purchase.style.transform = "translateZ(0)"
});
