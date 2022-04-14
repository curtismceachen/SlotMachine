const leverSound = new Audio("https://freesound.org/data/previews/348/348503_321967-lq.mp3");
const winSound = new Audio("https://freesound.org/data/previews/588/588234_8646358-lq.mp3");
const lever = document.getElementById("leverButton");

function youWin() {
  document.getElementById("jackpot").innerHTML = "Jackpot!";
  document.getElementById("playAgain").innerHTML = "";
}

function playAgain() {
  document.getElementById("jackpot").innerHTML = "";
  document.getElementById("playAgain").innerHTML = "Play Again!";
}

lever.addEventListener("click", leverClicked);

function leverClicked(e) {
  
  let randomArray=Array.from({length: 10}, () =>
    Math.floor(Math.random() * 4) + 1);
  document.getElementById("slot1").innerHTML = randomArray[0];
  document.getElementById("slot2").innerHTML = randomArray[1];
  document.getElementById("slot3").innerHTML = randomArray[2];
  document.getElementById("slot4").innerHTML = randomArray[3];
  document.getElementById("slot5").innerHTML = randomArray[4];
  document.getElementById("slot6").innerHTML = randomArray[5];
  document.getElementById("slot7").innerHTML = randomArray[6];
  document.getElementById("slot8").innerHTML = randomArray[7];
  document.getElementById("slot9").innerHTML = randomArray[8];

  if (randomArray[0] === randomArray[1] && randomArray[0] === randomArray[2]) {
    youWin();
    winSound.play();
    document.getElementById("slot1").style.boxShadow = "0px 0px 20px 15px #cdf4cd";
    document.getElementById("slot2").style.boxShadow = "0px 0px 20px 15px #cdf4cd";
    document.getElementById("slot3").style.boxShadow = "0px 0px 20px 15px #cdf4cd";
  
  } else if (randomArray[3] === randomArray[4] && randomArray[3] === randomArray[5]) {
    youWin()
    winSound.play();
    document.getElementById("slot4").style.boxShadow = "0px 0px 20px 15px #cdf4cd";
    document.getElementById("slot5").style.boxShadow = "0px 0px 20px 15px #cdf4cd";
    document.getElementById("slot6").style.boxShadow = "0px 0px 20px 15px #cdf4cd";
    
  } else if (randomArray[6] === randomArray[7] && randomArray[6] === randomArray[8]) {
    youWin()
    winSound.play();
    document.getElementById("slot7").style.boxShadow = "0px 0px 20px 15px #cdf4cd";
    document.getElementById("slot8").style.boxShadow = "0px 0px 20px 15px #cdf4cd";
    document.getElementById("slot9").style.boxShadow = "0px 0px 20px 15px #cdf4cd";
  } else {
    playAgain();
    leverSound.play();
    document.getElementById("slot1").style.boxShadow = null;
    document.getElementById("slot2").style.boxShadow = null;
    document.getElementById("slot3").style.boxShadow = null;
    document.getElementById("slot4").style.boxShadow = null;
    document.getElementById("slot5").style.boxShadow = null;
    document.getElementById("slot6").style.boxShadow = null;
    document.getElementById("slot7").style.boxShadow = null;
    document.getElementById("slot8").style.boxShadow = null;
    document.getElementById("slot9").style.boxShadow = null;
  }
}

