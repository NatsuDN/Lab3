function my() {
  this.src = 'https://img.favpng.com/19/8/2/tic-tac-toe-oxo-holiday-tic-tac-toe-game-png-favpng-AitKmCrC03Nq4a3d8kZeSM43q_t.jpg';
  this.id = 'x'
  k++;
  if(k>4){
    check3();
  }
  check1();
  this.removeEventListener("click",my);
  if(j<4 && e === true){
    bot();
  }
}

function bot() {
  rand = Math.floor(Math.random() * 9);
  for (i = 0;;i++) {
    if(image[rand].id === 'o' || image[rand].id === 'x'){
      rand = Math.floor(Math.random() * 9);
    }
    else {
      break;
    }
  }
  image[rand].src = 'https://www.clipartmax.com/png/middle/137-1377540_letter-o-png-black-and-white-circle-png.png';
  image[rand].id = 'o'
  image[rand].removeEventListener("click",my);
  check2();
  j++;
}

const image = document.querySelectorAll('img');
var rand;
var i;
var j = 0;
var k = 0;
let e = true;
for (let index = 0; index < image.length; index++) {
  image[index].addEventListener("click", my);
}

function check1(){
  if((image[0].id === 'x' && image[1].id === 'x' && image[2].id === 'x') || 
  (image[3].id === 'x' && image[4].id === 'x' && image[5].id === 'x') || 
  (image[6].id === 'x' && image[7].id === 'x' && image[8].id === 'x') || 
  (image[0].id === 'x' && image[3].id === 'x' && image[6].id === 'x') || 
  (image[1].id === 'x' && image[4].id === 'x' && image[7].id === 'x') || 
  (image[2].id === 'x' && image[5].id === 'x' && image[8].id === 'x') || 
  (image[0].id === 'x' && image[4].id === 'x' && image[8].id === 'x') || 
  (image[2].id === 'x' && image[4].id === 'x' && image[6].id === 'x')){
    document.getElementById("win").innerHTML = "X WIN!!";
    e = false;
    for (let index = 0; index < image.length; index++) {
      image[index].removeEventListener("click", my);
    }
  }
}

function check2(){
  if((image[0].id === 'o' && image[1].id === 'o' && image[2].id === 'o') || 
  (image[3].id === 'o' && image[4].id === 'o' && image[5].id === 'o') || 
  (image[6].id === 'o' && image[7].id === 'o' && image[8].id === 'o') || 
  (image[0].id === 'o' && image[3].id === 'o' && image[6].id === 'o') || 
  (image[1].id === 'o' && image[4].id === 'o' && image[7].id === 'o') || 
  (image[2].id === 'o' && image[5].id === 'o' && image[8].id === 'o') || 
  (image[0].id === 'o' && image[4].id === 'o' && image[8].id === 'o') || 
  (image[2].id === 'o' && image[4].id === 'o' && image[6].id === 'o')){
    document.getElementById("win").innerHTML = "O WIN!!";
    e = false;
    for (let index = 0; index < image.length; index++) {
      image[index].removeEventListener("click", my);
    }
  }
}

function check3(){
  document.getElementById("win").innerHTML = "Draw!!";
}