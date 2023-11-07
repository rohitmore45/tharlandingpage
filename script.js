let redBtn = document.getElementById("red");
let greenBtn = document.getElementById("green");
let blackBtn = document.getElementById("black");
let blueBtn = document.getElementById("blue");
let cars = document.getElementById("cars");

blackBtn.onclick = function(){
    cars.style.backgroundImage = "url(./images/pic1.png)"
}
redBtn.onclick = function(){
    cars.style.backgroundImage = "url(./images/pic2.png)"
}
greenBtn.onclick = function(){
    cars.style.backgroundImage = "url(./images/pic3.png)"
}
blueBtn.onclick = function(){
    cars.style.backgroundImage = "url(./images/pic4.png)";
}