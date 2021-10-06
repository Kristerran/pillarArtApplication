const images = 
[
         "https://media.giphy.com/media/aFTt8wvDtqKCQ/giphy.gif",
         "https://media.giphy.com/media/IcifS1qG3YFlS/giphy.gif",
         "https://media.giphy.com/media/2nrr1SrkVEdpK/giphy.gif",
         "https://media.giphy.com/media/10qHEa7ShsJ8I0/giphy.gif",
         "https://media.giphy.com/media/eCGTfFtjcp928/giphy.gif",
         "https://media.giphy.com/media/ErZ8hv5eO92JW/giphy.gif",
         "https://media.giphy.com/media/UZpw1AwQhPsHK/giphy.gif",
         "https://media.giphy.com/media/12XsHmJxR5c8QU/giphy.gif",
         "https://media.giphy.com/media/JCakjZnyrPeYE/giphy.gif",
         "https://media.giphy.com/media/dCFptKvuhxaZa/giphy.gif",
         "https://media.giphy.com/media/QxZQ7dSV4j6GQ/giphy.gif",
         "https://media.giphy.com/media/7Uj0tJ6r2CeOs/giphy.gif",
         "https://media.giphy.com/media/12LwwLbyMZ0LqE/giphy.gif",
         "https://media.giphy.com/media/KbqNVz8IGddRYPFOfl/giphy.gif",
         "https://media.giphy.com/media/yU6hCIV6clBSOj3Q1Y/giphy.gif",
         "https://media.giphy.com/media/xUOxf8EQfGMcxgo7w4/giphy.gif",
         "https://media.giphy.com/media/3o6nV3whKsbIIcZ0FW/giphy.gif",
         "https://media.giphy.com/media/NsBeF6OlZuermZUv9u/giphy.gif",  
         "https://media.giphy.com/media/13p77tfexyLtx6/giphy.gif",
         "https://media.giphy.com/media/Gp32KJtqe08Lu/giphy.gif",
         "https://media.giphy.com/media/7TdN6y8lUl5Qs/giphy.gif",
         "https://media.giphy.com/media/1jy3pev2Eu5Ve/giphy.gif",
         "https://media.giphy.com/media/nEXmNl3uha5YA/giphy.gif",
         "https://media.giphy.com/media/N35rW3vRNeaDC/giphy.gif",
         "https://media.giphy.com/media/lFmmcqA4VBhMQ/giphy.gif",
         "https://media.giphy.com/media/kMkTJV4a32ba8/giphy.gif",
         "https://media.giphy.com/media/12J6nIC1FJ7i00/giphy.gif",
         "https://media.giphy.com/media/7JsQ5EQTZlgHe/giphy.gif",
         "https://media.giphy.com/media/uG3lKkAuh53wc/giphy.gif",
         "https://media.giphy.com/media/BSx6mzbW1ew7K/giphy.gif"
];

var total = images.length;
var imageIdecies = new Array(total);
console.log(imageIdecies);
for (let i = 0; i < total; i++)
  {imageIdecies[i] = i;}
console.log(imageIdecies)

var currentSet = new Array(9);
console.log(currentSet);
resetIndecies();
console.log(currentSet);


var carousel = document.querySelector('.carousel');
var cells = document.querySelectorAll(".carousel__cell");

var cellCount = 9;
var rotationIndex = 0;

var prevImage = 29;
var imageIndex = 0;
var nexImaget = 1;

resetStyles();
populateCells();

function rotateCarousel() {
  var angle = rotationIndex/ cellCount * -360;
  carousel.style.transform = 'translateZ(-866px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  rotationIndex--;
  swapPositionsBkwd();
  swapIndexBkwd();
  rotateCarousel();
  resetStyles();
  resetIndecies();
  swapPrevious();
  console.log(cells);
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  rotationIndex++;
  swapPositionsFwd();
  swapIndexFwd();
  rotateCarousel();
  resetStyles();
  resetIndecies()
  console.log(cells);
  swapNext();
});


function swapPositionsBkwd()
{
  let first = cells[0].dataset.placement;
  for( let i = 0; i < 8; i++)
  {
    cells[i].dataset.placement = cells[i+1].dataset.placement;
  }
  cells[8].dataset.placement = first;
  console.log(cells[0].dataset.placement, " ",cells[1].dataset.placement, " ",
  cells[2].dataset.placement, " ",cells[3].dataset.placement, " ",
  cells[4].dataset.placement, " ",cells[5].dataset.placement, " ",
  cells[6].dataset.placement, " ",cells[7].dataset.placement, " ",
  cells[8].dataset.placement);
}

function swapPositionsFwd()
{
  let last  = cells[8].dataset.placement;
  for (let i = 8; i > 0; i--)
  {
    cells[i].dataset.placement  = cells[i-1].dataset.placement;
  }
  cells[0].dataset.placement = last;
  console.log(cells[0].dataset.placement, " ",cells[1].dataset.placement, " ",
  cells[2].dataset.placement, " ",cells[3].dataset.placement, " ",
  cells[4].dataset.placement, " ",cells[5].dataset.placement, " ",
  cells[6].dataset.placement, " ",cells[7].dataset.placement, " ",
  cells[8].dataset.placement);
}

function resetStyles()
{
  for (let i = 0; i < 9; i++)
  {
    cells[i].classList.remove("reset");
    switch(cells[i].dataset.placement)
      {
        case "upfront":
          cells[i].style.opacity = 1;
          cells[i].style.filter = "brightness(1)";
          break;
        case "front":
          cells[i].style.opacity = 1;
          cells[i].style.filter = "brightness(.5)";
          break;
        case "backL":
          cells[i].style.opacity = 0;
          cells[i].style.filter = "brightness(0)";
          cells[i].classList.add("reset");
          break;
        case "backR":
          cells[i].style.opacity = 0;
          cells[i].style.filter = "brightness(0)";
          cells[i].classList.add("reset");
          break;
        default:
          cells[i].style.opacity = 0;
          cells[i].style.filter = "brightness(0)";
          break;
      }
  }
}

function swapIndexFwd()
{
  let first = imageIdecies[0];
  for( let i = 0; i < total-1; i++)
  {
    imageIdecies[i] = imageIdecies[i+1];
  }
  imageIdecies[total-1] = first;
  console.log(imageIdecies);
}

function swapIndexBkwd()
{
  let last  = imageIdecies[total-1];
  for (let i = total-1; i > 0; i--)
  {
    imageIdecies[i]  = imageIdecies[i-1];
  }
  imageIdecies[0] = last;
  console.log(imageIdecies);
}


function resetIndecies()
{
  currentSet[0] =  imageIdecies[0];
  currentSet[1] =  imageIdecies[1];
  currentSet[2] =  imageIdecies[2];
  currentSet[3] =  imageIdecies[3];
  currentSet[4] =  imageIdecies[4];
  currentSet[5] =  imageIdecies[total-4];
  currentSet[6] =  imageIdecies[total-3];
  currentSet[7] =  imageIdecies[total-2];
  currentSet[8] =  imageIdecies[total-1];
  console.log(currentSet);
}

function populateCells()
{
  for ( i = 0; i < cellCount; i++)
  {
    var current = document.createElement('img');
    current.src = images[currentSet[i]];
    cells[i].appendChild(current);
  }
}

function swapPrevious()
{
  var currentBacks = document.querySelectorAll(".reset");
  var pending = 0;
  if(currentBacks[pending].dataset.placement != "backR")
    {pending++;}
  var currentImg = currentBacks[pending].getElementsByTagName("img");
  console.log(currentImg);
  currentImg[0].src = images[currentSet[5]];
}

function swapNext()
{
  var currentBacks = document.querySelectorAll(".reset");
  var pending = 0;
  if(currentBacks[pending].dataset.placement != "backL")
    {pending++;}
  var currentImg = currentBacks[pending].getElementsByTagName("img");
  console.log(currentImg);
  currentImg[0].src = images[currentSet[4]];
}

