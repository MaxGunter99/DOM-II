// Your code goes here

// const container = document.querySelector('body');
// container.addEventListener('click', function(eventObject){
//  //console.log(`Event Target: ${eventObject.target}`);
//   eventObject.target.style.color = "red";
// });

//ONE
const vsCode = document.querySelector('html');
vsCode.addEventListener('dblclick' , function(darkMode){
    var vs = alert ("You are now leaving Max's VS code?");
    darkMode.target.style.backgroundColor = "white";
    darkMode.target.style.color = "black";
});

//TWO
const revert = document.querySelector('html body');
revert.addEventListener('keypress' , function(darkMode){
    var vs = alert ("You are now entering Max's VS code?");
    darkMode.target.style.backgroundColor = "#a52222";
    darkMode.target.style.color = "#f0dc4b";
});

//THREE
const activate = document.querySelector('footer');
activate.addEventListener('mouseover', function(develop) {
    alert ('Entering Developer mode');
    
    const de = document.querySelector('html');
    de.addEventListener('mouseover' , function(dev){
        dev.target.style.border = "2px solid orange";
    });
});


//FOUR
const image = document.querySelector('.intro img');
image.addEventListener('mouseover' , function(corners){
    corners.target.style.borderRadius = "0px 0px 70% 70%";
    corners.target.style.transition = "5s";
    corners.target.style.borderBottom = "0";
    corners.target.style.boxShadow = '10px 10px 5px grey';
});

//FIVE
const button = document.querySelector('.btn');
button.addEventListener('click', function(event){
 alert(`Submit button was clicked!`);
  event.preventDefault();
});

//SIX
const image1 = document.querySelector('.img-content');
image1.addEventListener('mouseover' , function(corners1){
    corners1.target.style.borderRadius = "70%";
    corners1.target.style.transition = "5s";
    corners1.target.style.boxShadow = '10px 10px 5px grey';
});

//SEVEN
const nav2 = document.querySelector('nav');
nav2.addEventListener('mouseover' , function(colors2){
    colors2.target.style.fontSize = "25px";
    colors2.target.style.transition = "3s";
    colors2.target.style.textDecoration = "underline";
});

//EIGHT
const image2 = document.querySelector('.home .content-destination img');
image2.addEventListener('mouseover' , function(corners2){
    corners2.target.style.borderRadius = "70%";
    corners2.target.style.transition = "5s";
    corners2.target.style.boxShadow = '10px 10px 5px grey';
});

//NINE
const image3 = document.querySelector('.home .inverse-content .img-content');
image3.addEventListener('mouseover' , function(corners3){
    corners3.target.style.borderRadius = "70%";
    corners3.target.style.transition = "5s";
    corners3.target.style.boxShadow = '10px 10px 5px grey';
});

//TEN
const title = document.querySelector('h1');
title.addEventListener('mouseover', function(spin){
    spin.target.style.transform = "rotateY(1080deg)";
    spin.target.style.transition = "5s";
});

