var marg = 0;

function identifyById() {
console.log(document.getElementById('para1'));

}

function identifyByClass() {
console.log(document.getElementsByClassName('class1'));
}

function byTag() {
console.log(document.getElementsByTagName('p element'));
}

function changeBackground() {
console.log("hiii");
 document.getElementById("block1").style.backgroundColor = "lightblue";
}

function increaseFont() {
document.getElementById("block2").style.fontSize = "xx-large";

}

function changeFontColor() {
document.getElementById("block3").style.color = "red";
}

function revertColor() {
  document.getElementById("block3").style.color = "black";
}

function hide() {

}

function changeBackColor(color, className) {
document.getElementsByClassName("box1").style.color = "green";
}

function numbersOnly(e) {


}

function addAdjacent() {

}

function removePara() {
  var parent = document.getElementById("p3");
  var child = document.getElementById("p4");
  parent.removeChild(child);
}



function myFunction() {

}

function changeOn() {
document.getElementById("fname1").style.textTransform = "uppercase";
}

function preferedBrowser() {
  var x = document.getElementById("browsers").value;
      document.getElementById("browsers").innerHTML = "You selected: " + x;
}

function color(elem) {
}

function inputxt() {
document.getElementById("demo").innerHTML = "You selected some text!";
}

function confirmInput() {
document.getElementById("Form").submit();
}

function message() {
document.getElementById("Form").reset();
}

function keydown(n) {
}

function keypress(n) {
}

function keyup() {

}

function writeMessage() {
}
