var leftWall = document.querySelector(".left_frame_bar");
var rightWall = document.querySelector(".right_frame_bar");

//leftWall.addEventListener(onclick, shiftLeft);
//rightWall.addEventListener(onclick, shiftRight);


function shiftLeft()
{
    leftWall.style.height =  610;
    leftWall.style.borderLeft =  "300px solid teal";
    leftWall.style.borderTop = "150px solid transparent";
    leftWall.style.borderBottom = "150px solid transparent";
    
    
    rightWall.style.height =  650;
    rightWall.style.borderRight =  "100px solid teal";
    rightWall.style.borderTop = "130px solid transparent";
    rightWall.style.borderBottom = "130px solid transparent";
}

function shiftRight()
{
    leftWall.style.height =  650;
    leftWall.style.borderLeft =  "100px solid teal";
    leftWall.style.borderTop = "130px solid transparent";
    leftWall.style.borderBottom = "130px solid transparent";
    
    
    rightWall.style.height =  610;
    rightWall.style.borderRight =  "300px solid teal";
    rightWall.style.borderTop = "150px solid transparent";
    rightWall.style.borderBottom = "150px solid transparent";
}


