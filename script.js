for(let i=0;i<80;i++){
    let petal=document.createElement("div");
    petal.className="petal";
    petal.innerHTML="🌹";
    petal.style.left=Math.random()*100+"vw";
    petal.style.fontSize=(15+Math.random()*25)+"px";
    petal.style.animationDuration=(4+Math.random()*6)+"s";
    petal.style.animationDelay=Math.random()*6+"s";
    document.body.appendChild(petal);
}
