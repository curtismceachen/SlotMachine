const slots = Array.from(document.querySelectorAll(".slot"));


//slots.forEach(function(slot) {
 // let slotsArray = Math.floor(Math.random() * 4) + 1;
//  console.log(slotsArray);
 // let gh = slotsArray[0];
//  console.log(gh);
 // document.getElementById("slot1").innerHTML = slotsArray[0];
//})

//arrayAttempt.forEach(function(slot) {
  //const arrayArray = Math.floor(Math.random() * 4) + 1;
  //console.log(arrayArray)
  //console.log(arrayArray.typeof)
//})

//function render() {
	//renderHands();
	//renderControls();
	//if (winner) {
		//renderWinnerMessage();
	//} else {
		//renderTurnMessage();
	//}
//}

const lever = document.getElementById("lever");

lever.addEventListener("click", leverClicked);

function leverClicked(e) {
  let randomArray=Array.from({length: 9}, () =>
    Math.floor(Math.random() * 4) + 1);
  console.log(randomArray)
  console.log(randomArray[0])
  document.getElementById("slot1").innerHTML = randomArray[0];
  document.getElementById("slot2").innerHTML = randomArray[1];
  document.getElementById("slot3").innerHTML = randomArray[2];
  document.getElementById("slot4").innerHTML = randomArray[3];
  document.getElementById("slot5").innerHTML = randomArray[4];
  document.getElementById("slot6").innerHTML = randomArray[5];
  document.getElementById("slot7").innerHTML = randomArray[6];
  document.getElementById("slot8").innerHTML = randomArray[7];
  document.getElementById("slot9").innerHTML = randomArray[8];

  if(randomArray[0] === randomArray[1] === randomArray[2])
    console.log("congratulations you win")
}




//const slotFour = document.getElementById("slotFour");
//const slotFive = document.getElementById("slotFive");
//const slotSix = document.getElementById("slotSix")
//const slotSeven = document.getElementById("slotSeven")
//const slotEight = document.getElementById("slotEight")
//const slotNine = document.getElementById("slotNine")

//slots.forEach(function(slot) {
  //return Math.floor(Math.random() * 4) + 1;
//})
//console.log(slotNums)
//const array = [slotOne, slotTwo, slotThree, slotFour, slotFive, slotSix, slotSeven, slotEight, slotNine]
//console.log(array)

//function leverPull() {
  
//}
