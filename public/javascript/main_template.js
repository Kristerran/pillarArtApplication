var leftWall = document.querySelector(".left_frame_bar");
var rightWall = document.querySelector(".right_frame_bar");

//leftWall.addEventListener(onclick, shiftLeft);
//rightWall.addEventListener(onclick, shiftRight);


function shiftLeft()
{
    leftWall.style.borderLeft =  "300px solid teal";    
    rightWall.style.borderRight = "100px solid teal"
    
   /* rightWall.style.height =  610;
    rightWall.style.borderRight =  "10px solid teal";
    rightWall.style.borderTop = "150px solid transparent";
    rightWall.style.borderBottom = "130px solid transparent";*/
}

function shiftRight()
{

    leftWall.style.borderLeft =  "100px solid teal"; 
    rightWall.style.borderRight =  "300px solid teal";

}

function center()
{
    {
    
        leftWall.style.borderLeft =  "200px solid teal";

        rightWall.style.borderRight =  "200px solid teal";

    }

}


