    let vajca = parseInt(localStorage.getItem('vajca')) || 0;
    let kurata = parseInt(localStorage.getItem('kurata')) || 0;
    let slepice = parseInt(localStorage.getItem('slepice')) || 0;
    let kohouti = parseInt(localStorage.getItem('kohouti')) || 0;
    let hody = parseInt(localStorage.getItem('hody')) || 0;
    let vyhry = parseInt(localStorage.getItem('vyhry')) || 0;
    let nejmene = parseInt(localStorage.getItem('nejmene')) || Infinity;

    let gameOver = false;
    document.addEventListener("contextmenu", function(e) {
      e.preventDefault();})

      document.addEventListener("keydown", function(e) {
        
        if (e.key === "F12") {
            e.preventDefault();
            
        }
        
        if (e.ctrlKey && e.key === "u") {
            e.preventDefault();
            
        }
    });

    document.getElementById("slepice-img").addEventListener("click", function() {
      if (nejmene <= 10) {  // Podmínka pro změnu obrázku
          this.src = this.src.includes("slepice.png") ? "kebab.png" : "slepice.png";
      }
  });
  
    document.addEventListener('click', function playMusic() {
        let audio = document.getElementById("bg-music");


        if (audio.paused) {
            audio.play().catch(error => console.log(error));
        }


        document.removeEventListener('click', playMusic)});


    document.addEventListener('click', function playMusic() {
        let audio = document.getElementById("bg-music");

        // Only play if it's not already playing
        if (audio.paused) {
            audio.play().catch(error => console.log(error));
        }

        // Remove the event listener after the first interaction
        document.removeEventListener('click', playMusic)});

    function updateDisplay() {
      document.getElementById('vajca').textContent = vajca;
      document.getElementById('kurata').textContent = kurata;
      document.getElementById('slepice').textContent = slepice;
      document.getElementById('kohouti').textContent = kohouti;
      document.getElementById('hody').textContent = hody;
      document.getElementById('vyhry').textContent = vyhry;
      document.getElementById('nejmene').textContent = nejmene;


      localStorage.setItem('vajca', vajca);
      localStorage.setItem('kurata', kurata);
      localStorage.setItem('slepice', slepice);
      localStorage.setItem('kohouti', kohouti);
      localStorage.setItem('hody', hody);
      localStorage.setItem('vyhry', vyhry);
      localStorage.setItem('nejmene', nejmene);

      

      if (slepice >= 12 && !gameOver) {
        gameOver = true;
        setTimeout(() => {
            alert("Vyhrál jsi!");
            vyhry++;
            if(nejmene>hody&&hody>0){
              nejmene=hody;
            }
            resetGame();
            updateDisplay();
        }, 100);
    }
    }

    function hod_kostkami() {

      
      let die1 = getRandom(1, 6);
      let die2 = getRandom(1, 6);
      
      let message = `Hodil jsi: ${die1} & ${die2}.`;
  
      if (die1 == die2) {
          switch (die1) {
              case 1:
                  message += "<br>Dostáváš 3 vajíčka navíc.";
                  vajca += 5;
                  break;
  
              case 3:
                  message += "<br>Dostáváš 2 kuřata navíc.";
                  kurata += 2;
                  vajca+=2;
                  break;
  
              case 6:
                  message += "<br>Dostáváš 2 slepice navíc.";
                  slepice += 4;
                  break;
                  if (kohouti >= 1) {
                      message += "<br>Kohout tě ochránil před neštěstím.";
                      kohouti--;
                  } else {
                      switch (die1) {
                          case 2:
                              message += "<br>Slepice rozsedly některé vajíčka.";
                              let nahodne_cislo = getRandom(1, 6);
                              vajca = Math.max(0, vajca - nahodne_cislo);
                              break;
                          case 4:
                              message += "<br>Liška ti zabila všechna kuřata.";
                              kurata = 0;
                              break;
                          case 5:
                              if (slepice >= 3) {
                                  message += "<br>Vlk ti sežral 3 slepice.";
                                  slepice -= 3;
                              } else {
                                  message += "<br>Máš tak málo slepic, že by se vlk ani nenajedl a nakonec odešel.";
                              }
                              break;
                      }
                  }
                  break;
          }
      } else {
          
          if (die1 <= 3) vajca++;
          else if (die1 <= 5) kurata++;
          else slepice++;
  
          if (die2 <= 3) vajca++;
          else if (die2 <= 5) kurata++;
          else slepice++;
      }
  
      hody++;
      document.getElementById('message').innerHTML = message;  
      updateDisplay();
  }
  

  function checkPIN() {
    
    var _0x1234 = ["4865"]; let correctPIN = _0x1234[0];
    let userPIN = prompt("Enter PIN:");

    if (userPIN !== correctPIN) {
        alert("Wrong PIN! Access Denied.");
        document.body.innerHTML = ""; // Clear content
    }
    if(userPIN==correctPIN){
      document.body.style.visibility="visible";
    }

    
}
    function vymenaVajicek(){
      if(vajca>=3){
        vajca-=3;
        kurata++;
      }
      updateDisplay();
    }
    function vymenaKurat(){
      if(kurata>=3){
        kurata-=3;
        slepice++;
      }
      updateDisplay();
    }
    function vymenaSlepic(){
      if(slepice>=2){
        slepice-=2;
        kohouti++;
      }
      updateDisplay();
    }

    function resetGame() {
      vajca = 0;
      kurata = 0;
      slepice = 0;
      kohouti = 0;
      hody = 0;
      gameOver = false;

      document.getElementById('message').textContent = "Hodil jsi: 0 & 0";

      updateDisplay();
    }
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    

    updateDisplay();
