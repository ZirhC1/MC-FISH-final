// Functionize Minecraft Fishing Start Code

//HTML VARIABLES
let resultImg = document.getElementById("result-img");

let numCodSpan = document.getElementById("num-cod");

let numSalmonSpan = document.getElementById("num-salmon");

let numTropicalSpan = document.getElementById("num-tropical");

let numPufferSpan = document.getElementById("num-puffer");

let plus5btn = document.getElementById("fish5");

let plus200btn = document.getElementById("fish200");

let fishAmount = document.getElementById("Amount-fish");

let inventory = document.getElementById("inv");

let sort = document.getElementById("sortFish");

let clear = document.getElementById("clearFish");

//FISH COUNT VARIABLES
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

plus5btn.addEventListener("click", plus5);

plus200btn.addEventListener("click", plus200);

fishAmount.addEventListener("change", FishNumAmount);

sort.addEventListener("click", sortfish)

clear.addEventListener("click", clearfish)


function fishBtnClicked() {
  //Determine selcted character
  let character = document.getElementById("character-select").value;
  console.log(character);

  if (character === "steve") {
    // Steve fish simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      inventory.innerHTML += `<img src= "img/Raw-Cod.png" width="25">`
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      inventory.innerHTML += "<img src= img/Raw-Salmon.png `width: 25px>"
    } else if (randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      inventory.innerHTML += "<img src= img/Tropical-Fish.png `width: 25px>"
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      inventory.innerHTML += "<img src= img/Pufferfish.png `width: 25px>"
    }
  } else if (character === "alex") {
    //Alex fish simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      inventory.innerHTML += `<img src= "img/Raw-Cod.png" width="25">`
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      inventory.innerHTML += "<img src= img/Raw-Salmon.png `width: 25px>"
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      inventory.innerHTML += "<img src= img/Tropical-Fish.png `width: 25px>"
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      inventory.innerHTML += "<img src= img/Pufferfish.png `width: 25px>"
    }
  } else if (character === "villager") {
    //Villager fish simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      inventory.innerHTML += `<img src= "img/Raw-Cod.png" width="25">`
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      inventory.innerHTML += "<img src= img/Raw-Salmon.png `width: 25px>"
    } else if (randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      inventory.innerHTML += "<img src= img/Tropical-Fish.png `width: 25px>"
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      inventory.innerHTML += "<img src= img/Pufferfish.png `width: 25px>"
    }
  }
}

function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishBtnClicked();
  }
}

function plus200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
    count++
  }
}

function FishNumAmount() {
  // read number from input, store it into a variable
  for(let a = 1; a <= fishAmount.value; a++ ){
    console.log(a)
    fishBtnClicked();
  }
}

function sortfish(){
  inventory.innerHTML = ``
//for the cod
  
for(let a = 0; a < numCod; a++ ){
    console.log(a)
    inventory.innerHTML += `<img src= "img/Raw-Cod.png" width="25">`
  } for(let d = 0; d < numSalmon; d++ ){
  console.log(d)
  inventory.innerHTML += `<img src= "img/Raw-Salmon.png" width="25">`}
  for(let c = 0; c < numTropical; c++ ){
  console.log(c)
  inventory.innerHTML += `<img src= "img/Tropical-Fish.png" width="25">`}
  for(let b = 0; b < numPuffer; b++ ){
  console.log(b)
  inventory.innerHTML += `<img src= "img/Pufferfish.png" width="25">`
  console.log(inventory)
}

}

//for the pufferfish

//for the tropical


//for the salmon


function clearfish(){
  inventory.innerHTML = ``
}