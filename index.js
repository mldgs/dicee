var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber1 === randomNumber2){
  document.querySelector(".header-text").innerHTML ="Draw!";
}
else if (randomNumber1 > randomNumber2){
  document.querySelector(".header-text").innerText ="\u{1F600}Player 1 Wins!";
}
else {
  document.querySelector(".header-text").innerHTML ="Player 2 Wins!\u{1F600}";
}
