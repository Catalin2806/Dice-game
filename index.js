var randomNumber1=Math.floor(Math.random()*6+1);
var randomNumber2=Math.floor(Math.random()*6+1);
var castigator=document.querySelector("h1");
if (randomNumber1===1){
  document.querySelector("img").setAttribute("src","images/dice1.png");
}
if (randomNumber1===2){
  document.querySelector("img").setAttribute("src","images/dice2.png");
}
if (randomNumber1===3){
  document.querySelector("img").setAttribute("src","images/dice3.png");
}
if (randomNumber1===4){
  document.querySelector("img").setAttribute("src","images/dice4.png");
}
if (randomNumber1===5){
  document.querySelector("img").setAttribute("src","images/dice5.png");
}
if (randomNumber2===1){
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
if (randomNumber2===2){
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
if (randomNumber2===3){
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
if (randomNumber2===4){
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
if (randomNumber2===5){
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
if(randomNumber1>randomNumber2){
  castigator.innerHTML="💥 Player 1 Wins!";
}else if (randomNumber1<randomNumber2){
  castigator.innerHTML="Player 2 Wins! 💥";
}else if (randomNumber1===randomNumber2){
  castigator.innerHTML="Draw!";}
