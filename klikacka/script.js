let pocet = parseInt(localStorage.getItem('pocet')) || 0;


function updateDisplay(){
  document.getElementById('pocet').textContent = pocet;

  localStorage.setItem('pocet', pocet);
}

function kliknuti(){
  pocet++
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
updateDisplay()