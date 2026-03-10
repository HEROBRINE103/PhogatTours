// HERO IMAGE SLIDER

let slides = document.querySelectorAll(".hero-slider .slide");
let current = 0;

function nextSlide(){

slides[current].classList.remove("active");

current = (current + 1) % slides.length;

slides[current].classList.add("active");

}

setInterval(nextSlide,5000);


// MOBILE MENU

function toggleMenu(){

document.getElementById("navMenu").classList.toggle("active");

}


// COUNTER

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const update = () => {

const target = +counter.getAttribute("data-target");

const c = +counter.innerText;

const inc = target / 200;

if(c < target){

counter.innerText = Math.ceil(c + inc);

setTimeout(update,10);

}else{

counter.innerText = target;

}

};

update();

});
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");
navMenu.classList.toggle("active");

});

// TYPING EFFECT

const text = "Popular Travel Packages";
let index = 0;

function typing(){

if(index < text.length){

document.querySelector(".typing").innerHTML += text.charAt(index);

index++;

setTimeout(typing,70);

}

}

document.querySelector(".typing").innerHTML = "";
typing();


// SCROLL REVEAL

window.addEventListener("scroll",function(){

document.querySelectorAll(".reveal").forEach(reveal => {

let windowHeight = window.innerHeight;

let revealTop = reveal.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){

reveal.classList.add("active");

}

});

});

/* ABOUT TITLE TYPING */

const aboutText = "About Phogat Tours & Travels";
let aboutIndex = 0;

function typingAbout(){

const el = document.querySelector(".typing-about");

if(aboutIndex < aboutText.length){

el.innerHTML += aboutText.charAt(aboutIndex);
aboutIndex++;

setTimeout(typingAbout,60);

}

}

document.querySelector(".typing-about").innerHTML = "";
typingAbout();


/* SCROLL REVEAL */

window.addEventListener("scroll",()=>{

document.querySelectorAll(".reveal-left,.reveal-right").forEach(el=>{

let pos = el.getBoundingClientRect().top;
let screen = window.innerHeight;

if(pos < screen - 100){

el.classList.add("reveal-active");

}

});

});

/* SERVICES TITLE TYPING */

const serviceText = "Our Premium Services";
let serviceIndex = 0;

function typingServices(){

const el = document.querySelector(".typing-services");

if(serviceIndex < serviceText.length){

el.innerHTML += serviceText.charAt(serviceIndex);

serviceIndex++;

setTimeout(typingServices,60);

}

}

document.querySelector(".typing-services").innerHTML="";
typingServices();


/* SCROLL REVEAL */

window.addEventListener("scroll",()=>{

document.querySelectorAll(".reveal-left,.reveal-right").forEach(el=>{

let pos = el.getBoundingClientRect().top;
let screen = window.innerHeight;

if(pos < screen - 100){

el.classList.add("reveal-active");

}

});

});

/* TYPING EFFECT */



function typing(){
document.querySelector(".typing-text").innerText = text.slice(0,index);
index++;
if(index <= text.length){
setTimeout(typing,40);
}
}

typing();



/* SCROLL APPEAR */

const cards = document.querySelectorAll(".why-card");

window.addEventListener("scroll", () =>{

cards.forEach(card =>{

const cardTop = card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 100){
card.classList.add("show");
}

});

});

/* CONTACT TYPING */

const contactText = "Book your taxi or tour package easily with Phogat Tours & Travels.";
let i = 0;

function contactTyping(){

document.querySelector(".contact-typing").innerText =
contactText.slice(0,i);

i++;

if(i <= contactText.length){
setTimeout(contactTyping,40);
}

}

contactTyping();

