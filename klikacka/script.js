let pocet = parseInt(localStorage.getItem('pocet')) || 0;
let pridavaniPocet = parseInt(localStorage.getItem('pridavaniPocet')) || 1
let pridavaniS = parseInt(localStorage.getItem('pridavaniS')) || 0

let upgradeK1P = parseInt(localStorage.getItem('upgradeK1P')) || 0
let upgradeS1P = parseInt(localStorage.getItem('upgradeS1P')) || 0


function updateDisplay(){
  document.getElementById('pocet').textContent = Math.round(pocet).toLocaleString("cs-CZ");
  document.getElementById('pridavaniPocet').textContent = pridavaniPocet;
  document.getElementById('pridavaniS').textContent = pridavaniS;

  document.getElementById('upgradeK1P').textContent = upgradeK1P;
  document.getElementById('upgradeS1P').textContent = upgradeS1P;


  localStorage.setItem('pocet', pocet);
  localStorage.setItem('pridavaniPocet', pridavaniPocet);
  localStorage.setItem('pridavaniS', pridavaniS);

  localStorage.setItem('upgradeK1P', upgradeK1P);
  localStorage.setItem('upgradeS1P', upgradeS1P);
}

function kliknuti(){
  pocet+=pridavaniPocet;
  updateDisplay()

  pridavaniPocet=1;
  pridavaniS=0;
  upgradeK1P=0;
  upgradeS1P=0;
}

function upgradeK1(){
  if(pocet>=40){
    pocet-=40;
    pridavaniPocet++;
    upgradeK1P++;
  }
  updateDisplay()
}
function upgradeS1(){
  if(pocet>=100){
    pocet-=100;
    pridavaniS++;
    upgradeS1P++;
  }
  updateDisplay()
}

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