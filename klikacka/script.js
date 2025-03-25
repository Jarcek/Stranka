let pocet = parseInt(localStorage.getItem('pocet')) || 0;


function updateDisplay(){
  document.getElementById('pocet').textContent = pocet;

  localStorage.setItem('pocet', pocet);
}

function kliknuti(){
  pocet++
  updateDisplay()
}

updateDisplay()