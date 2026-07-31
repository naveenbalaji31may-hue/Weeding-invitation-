// =========================
// Open Invitation
// =========================

function openInvitation(){

document.body.style.opacity="0";

setTimeout(function(){

window.location.href="invitation.html";

},700);

}

// =========================
// Falling Petals
// =========================

const petalsContainer=document.getElementById("petals");

const flowers=[
"🌸",
"🌺",
"🌷",
"🌹"
];

function createPetal(){

const petal=document.createElement("div");

petal.classList.add("petal");

petal.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(18+Math.random()*20)+"px";

petal.style.animationDuration=(8+Math.random()*8)+"s";

petal.style.opacity=.5+Math.random()*.5;

petalsContainer.appendChild(petal);

setTimeout(function(){

petal.remove();

},16000);

}

for(let i=0;i<12;i++){

setTimeout(createPetal,i*250);

}
// =========================
// Continuous Petals
// =========================

setInterval(createPetal,900);

// =========================
// Page Fade In
// =========================

window.addEventListener("load",function(){

document.body.style.opacity="1";

document.body.style.transition="opacity 1.2s ease";

});

// =========================
// Floating Card Effect
// =========================

const card=document.querySelector(".glass-card");

if(card){

let direction=1;

setInterval(function(){

card.style.transform=
"translateY("+(direction*6)+"px)";

card.style.transition="2.8s ease-in-out";

direction*=-1;

},2800);

}

// =========================
// Button Click Animation
// =========================

const button=document.querySelector(".open-btn");

if(button){

button.addEventListener("click",function(){

button.style.transform="scale(.95)";

setTimeout(function(){

button.style.transform="scale(1)";

},180);

});

}

// =========================
// Welcome Console Message
// =========================

console.log("Welcome to Subash ❤️ Selva Priya Wedding Invitation");
