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

updateDisplay()