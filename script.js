// Open Invitation
function openInvitation() {
    window.location.href = "invitation.html";
}

// Create Falling Rose Petals
const petalsContainer = document.getElementById("petals");

const petals = [
    "🌹",
    "🥀",
    "🌺"
];

function createPetal() {

    const petal = document.createElement("div");
    petal.classList.add("petal");

    petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (8 + Math.random() * 7) + "s";
    petal.style.fontSize = (18 + Math.random() * 18) + "px";
    petal.style.opacity = 0.6 + Math.random() * 0.4;

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 15000);
}

// Create a new petal every 500ms
setInterval(createPetal, 500);

// Initial petals
for (let i = 0; i < 12; i++) {
    setTimeout(createPetal, i * 250);
}
