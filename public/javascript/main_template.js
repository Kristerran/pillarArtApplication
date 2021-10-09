var leftWall = document.querySelector(".left_frame_bar");
var rightWall = document.querySelector(".right_frame_bar");




function shiftLeft()
{
    leftWall.style.borderLeft =  "300px solid  var(--darkestwhite )";    
    rightWall.style.borderRight = "100px solid  var(--darkestwhite )";
}

function shiftRight()
{
    leftWall.style.borderLeft =  "100px solid  var(--darkestwhite )"; 
    rightWall.style.borderRight =  "300px solid  var(--darkestwhite )";
}

function center()
{
        leftWall.style.borderLeft =  "200px solid  var(--darkestwhite )";
        rightWall.style.borderRight =  "200px solid  var(--darkestwhite )";
}


