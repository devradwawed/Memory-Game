//select The Start Game Button 
document.querySelector(".control-button span").onclick = function () {

  //prompt Window To Ask For Name 
  let youerName = prompt("Whats Your Name? ");

  // if Name Is Empty 
  if(youerName == null ||  youerName == ""){

    //set name To Unknown
    document.querySelector(".name span").innerHTML ='Unknown';

  }
  //name is Not Empty
  else{
    //set name To youerName
    document.querySelector(".name span").innerHTML = youerName;
  }
  //remove splash screen
  document.querySelector(".control-button").remove();
};
//Effect Duration
let duration = 1000;

//select Bloks Container
let blocksContainer = document.querySelector(".memory-geme-blocks");

//create Array From Game Blocks
let blocks = Array.from(blocksContainer .children);

//create Range Of Keys
// let orderRange = [...Array(blocks.length).keys()]

let orderRange = Array.from(Array(blocks.length).keys());
// console.log(orderRange)
Shufle(orderRange)
// console.log(orderRange)
//Add Order Css Property To css Blocks 
blocks.forEach((block , index) =>{
  block.style.order = orderRange[index];

  //add click Event
  block.addEventListener("click" , function () {
    //trigger The  Flip  Block  Function
      flipBlock(block); 
  
    });
})
  //trigger The  Flip  Block  Function
//Flip Block function 

function flipBlock (selectedBlock) {

  //Add class is-flippe
  selectedBlock.classList.add("is-flippe");

  //collect all Filped  cards
  let allFlippedBlocks =  blocks.filter(flipBlock => flipBlock.classList.contains('is-flippe'));

  //if Thers Two Selected Blocks
  if(allFlippedBlocks.length ===2 ){

  //Stop clicking  function
  stopClicking();

  //check matched Block  function
  checkMatchedBlocks(allFlippedBlocks[0] , allFlippedBlocks[1])
  }

}
//stop clickIng function
function stopClicking () {

  //add class no clicking  on main Container
  blocksContainer.classList.add("no-clicking");

  setTimeout( () => {

    //remove class no clicking after The Duration
    blocksContainer.classList.remove("no-clicking");

  } , duration);

}

//check Matched Block 
function checkMatchedBlocks (firstBlock , secondBlock){

  let triesElement = document.querySelector(".tries span");
  if(firstBlock.dataset.technolgy === secondBlock.dataset.technolgy){

  firstBlock.classList.remove("is-flippe");
  secondBlock.classList.remove("is-flippe");

  firstBlock.classList.add("has-match");
  secondBlock.classList.add("has-match");


  document.getElementById("success").play();
  }
  else{

  triesElement.innerHTML = parseInt(triesElement.innerHTML)+1;

  setTimeout(() => {

    firstBlock.classList.remove("is-flippe");

    secondBlock.classList.remove("is-flippe");
    
  }, duration)
  
  document.getElementById("fail").play();
  }


} 




//Shufle Function
function Shufle (array){

  //setting Vars
  let current = array.length,
      temp,
      random;

  while (current > 0) {

    //get Random Number
    random = Math.floor(Math.random() * current);
    
    //Decrease Length By One
    current--;

    //[1] sava Current Element In Stash
    temp = array[current];

    // [2]Current Element = random Element 
    array[current] = array[random];

    //[3]random Element = get Element for Stash
    array[random] = temp;
  }

  return array;

}