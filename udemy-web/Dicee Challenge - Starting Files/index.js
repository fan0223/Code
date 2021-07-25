randoNumber1 = Math.floor(Math.random()*6)+1
randoNumber2 = Math.floor(Math.random()*6)+1
document.querySelector("img.img1").setAttribute("src", "images/dice"+randoNumber1+".png")

document.querySelector("img.img2").setAttribute("src", "images/dice"+randoNumber2+".png")

if (randoNumber1 > randoNumber2){
    document.querySelector("h1").innerHTML="Player1 Win!";
}
else if (randoNumber2>randoNumber1){
    document.querySelector("h1").innerHTML="Player2 Win!";
}
else{
    document.querySelector("h1").innerHTML="平手!";
}