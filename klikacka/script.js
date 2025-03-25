let vajca = parseInt(localStorage.getItem('vajca')) || 0;


function updateDisplay(){
  document.getElementById('vajca').textContent = vajca;

  localStorage.setItem('vajca', vajca);
}