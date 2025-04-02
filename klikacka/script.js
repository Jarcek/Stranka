let pocet = parseInt(localStorage.getItem('pocet')) || 0;
let pridavaniPocet = parseInt(localStorage.getItem('pridavaniPocet')) || 1
let pridavaniS = parseInt(localStorage.getItem('pridavaniS')) || 0

let upgradeK1P = parseInt(localStorage.getItem('upgradeK1P')) || 0
let upgradeS1P = parseInt(localStorage.getItem('upgradeS1P')) || 0

let upgradeK2P = parseInt(localStorage.getItem('upgradeK2P')) || 0
let upgradeS2P = parseInt(localStorage.getItem('upgradeS2P')) || 0

function updateDisplay(){
  document.getElementById('pocet').textContent = Math.round(pocet).toLocaleString("cs-CZ");

  document.getElementById("pridavaniPocet").textContent = Math.round(pridavaniPocet).toLocaleString("cs-CZ");  
  document.getElementById("pridavaniS").textContent = Math.round(pridavaniS).toLocaleString("cs-CZ");  

  document.getElementById('upgradeK1P').textContent = upgradeK1P.toLocaleString("cs-CZ");;
  document.getElementById('upgradeS1P').textContent = upgradeS1P.toLocaleString("cs-CZ");;

  document.getElementById('upgradeK2P').textContent = upgradeK2P.toLocaleString("cs-CZ");;
  document.getElementById('upgradeS2P').textContent = upgradeS2P.toLocaleString("cs-CZ");;
  
  localStorage.setItem('pocet', pocet);
  localStorage.setItem('pridavaniPocet', pridavaniPocet);
  localStorage.setItem('pridavaniS', pridavaniS);

  localStorage.setItem('upgradeK1P', upgradeK1P);
  localStorage.setItem('upgradeS1P', upgradeS1P);

  localStorage.setItem('upgradeK2P', upgradeK2P);
  localStorage.setItem('upgradeS2P', upgradeS2P);

}

function kliknuti(){
  pocet+=pridavaniPocet;
  updateDisplay()
  pridavaniS= upgradeS1P+upgradeS2P*45;
  //pridavaniPocet=1;
  //pridavaniS=0;
  //upgradeK1P=0;
  //upgradeS1P=0;


const klikaciCast = document.querySelector('.klikaci_cast');
    

const img = document.createElement('img');
img.src = 'kebabos.png';
img.className = 'image';


img.style.left = `${event.clientX - klikaciCast.getBoundingClientRect().left}px`;
img.style.top = `${event.clientY - klikaciCast.getBoundingClientRect().top}px`;


klikaciCast.appendChild(img);


setTimeout(() => {
    img.style.transform = 'translateY(-10vh)';
    img.style.opacity = '0';
}, 10); 

setTimeout(() => {
    img.remove();
}, 500);
}



let holdTimeout;
function startMaxUpgrade(jaky){
  holdTimeout = setTimeout(jaky, 3000);
}
function cancelMaxUpgradeHold() {
  clearTimeout(holdTimeout);
}

function upgradeK1(){
  if(pocet>=40){
    pocet-=40;
    pridavaniPocet++;
    upgradeK1P++;
  }
  updateDisplay()
}
function maxUpgradeK1(){
  let upgradeMax = Math.floor(pocet / 40);
  pocet-=upgradeMax*40;
  pridavaniPocet+=upgradeMax;
  upgradeK1P+=upgradeMax;
  updateDisplay();
}
function upgradeS1(){
  if(pocet>=130){
    pocet-=130;
    pridavaniS++;
    upgradeS1P++;
  }
  updateDisplay()
}
function maxUpgradeS1(){
  let upgradeMax = Math.floor(pocet / 130);
  pocet-=upgradeMax*130;
  pridavaniS+=upgradeMax;
  upgradeS1P+=upgradeMax;
  updateDisplay();
}

//upgrady vol 2
//
//
//
//
function upgradeK2(){
  if(pocet>=550){
    pocet-=550;
    pridavaniPocet+=20
    upgradeK2P++;
  }
  updateDisplay()
}
function maxUpgradeK2(){
  let upgradeMax = Math.floor(pocet / 550);
  pocet-=upgradeMax*550;
  pridavaniPocet+=upgradeMax*550;
  upgradeK2P+=upgradeMax;
  updateDisplay();
}
function upgradeS2(){
  if(pocet>=1700){
    pocet-=1700;
    pridavaniS+=45;
    upgradeS2P++;
  }
  updateDisplay()
}
function maxUpgradeS2(){
  let upgradeMax = Math.floor(pocet / 1700);
  pocet-=upgradeMax*1700;
  pridavaniS+=upgradeMax*45;
  upgradeS2P+=upgradeMax;
  updateDisplay();
}


//
//
//
//
function toggleSidebar() {
  let sidebar = document.getElementById("sidebar");
  
  if (sidebar.style.right === "0px") {
    sidebar.style.right = "-55vw"; // Hide
    open_btn.style.display = "block";
  } else {
    sidebar.style.right = "0px"; // Show
    open_btn.style.display = "none"; // Hide ☰ button
  }
}
function barva(barva){
  let Sbarva;
  switch(barva){
    case "blueviolet":
      Sbarva = "#333"
      break
    case "goldenrod":
      Sbarva = "#333"
      break
    default:
      Sbarva = barva;
      break

  }
  //to pod neni treba protoze ta default barva je peak
  // document.querySelector('.stavova_cast').style.backgroundColor = Sbarva;
  document.querySelector('.klikaci_cast').style.backgroundColor = barva;
  document.querySelector('.pocty').style.backgroundColor = barva;
  document.querySelector('.nakupni_cast').style.backgroundColor = barva;
  
}
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


function addValue() {
  pocet+=pridavaniS/4;
  document.getElementById("pocet").innerText = Math.round(pocet).toLocaleString("cs-CZ");  
}

setInterval(addValue, 250);  //  1 second (1000ms)
updateDisplay()
