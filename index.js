
var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;
randomNumber1 = Math.floor(randomNumber1*6)+1;

document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png"); 
document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png"); 

if(randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "<em>🚩</em> Player 1 Wins!";
else if (randomNumber1 < randomNumber2)
    document.querySelector("h1").innerHTML = "Player 2 Wins! <em>🚩</em>";
else
    document.querySelector("h1").innerHTML = "Draw!";
