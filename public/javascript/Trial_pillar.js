//Get all user images
const getImages = async () => {
  let imageUrls
  let imageData = await fetch('/api/artwork/imageurls',
  {
    method: 'GET'
  })
  .then
  (response => response.json())
  .then
  (data => { imageUrls = Object.values(data) })
  return imageUrls
}
//Get Api Images
const htmlArray = []
const getApiImages = async () => {
  
  const getWomanUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=woman"
  const apiLink = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"
  // Get woman art IDs
  fetch(`${getWomanUrl}`)
  .then(response => response.json())
  .then(data => {
    let objectIDs = data.objectIDs;
    
    for (i = 0; i < 10; i++) {
      fetch(`${apiLink}` + objectIDs[i])
      .then(resp => resp.json())
      .then(data => {
        htmlArray.push(`<div class="container"><h4 id="title">The Metropolitan Museum of Art</h4><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><div class="photo"><img src='${data.primaryImage}'></img></div><div class="flip-card-back"><h4 class="title">${data.title}</h4><p class="username font-weight-bold">${data.artistDisplayName}</p><p class="artistDisplayBio">${data.artistDisplayBio}</p><p class="objectEndDate pb-5"> Date: ${data.objectEndDate}</p><p class="show-id"></p></div>`)
        if(htmlArray.length == 10){
          startCarousel()
        }
      })
    }
  })
}

const startCarousel = async () => {
console.log(htmlArray)
    var total = htmlArray.length;
    var imageIdecies = new Array(total);
    console.log(imageIdecies);
    for (let i = 0; i < total; i++) { imageIdecies[i] = i; }
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
      var angle = rotationIndex / cellCount * -360;
      carousel.style.transform = 'translateZ(-866px) rotateY(' + angle + 'deg)';
    }
  
    var prevButton = document.querySelector('.previous-button');
    prevButton.addEventListener('click', function () {
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
    nextButton.addEventListener('click', function () {
      rotationIndex++;
      swapPositionsFwd();
      swapIndexFwd();
      rotateCarousel();
      resetStyles();
      resetIndecies()
      console.log(cells);
      swapNext();
    });
  
  
    function swapPositionsBkwd() {
      let first = cells[0].dataset.placement;
      for (let i = 0; i < 8; i++) {
        cells[i].dataset.placement = cells[i + 1].dataset.placement;
      }
      cells[8].dataset.placement = first;
      console.log(cells[0].dataset.placement, " ", cells[1].dataset.placement, " ",
        cells[2].dataset.placement, " ", cells[3].dataset.placement, " ",
        cells[4].dataset.placement, " ", cells[5].dataset.placement, " ",
        cells[6].dataset.placement, " ", cells[7].dataset.placement, " ",
        cells[8].dataset.placement);
    }
  
    function swapPositionsFwd() {
      let last = cells[8].dataset.placement;
      for (let i = 8; i > 0; i--) {
        cells[i].dataset.placement = cells[i - 1].dataset.placement;
      }
      cells[0].dataset.placement = last;
      console.log(cells[0].dataset.placement, " ", cells[1].dataset.placement, " ",
        cells[2].dataset.placement, " ", cells[3].dataset.placement, " ",
        cells[4].dataset.placement, " ", cells[5].dataset.placement, " ",
        cells[6].dataset.placement, " ", cells[7].dataset.placement, " ",
        cells[8].dataset.placement);
    }
  
    function resetStyles() {
      for (let i = 0; i < 9; i++) {
        cells[i].classList.remove("reset");
        switch (cells[i].dataset.placement) {
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
  
    function swapIndexFwd() {
      let first = imageIdecies[0];
      for (let i = 0; i < total - 1; i++) {
        imageIdecies[i] = imageIdecies[i + 1];
      }
      imageIdecies[total - 1] = first;
      console.log(imageIdecies);
    }
  
    function swapIndexBkwd() {
      let last = imageIdecies[total - 1];
      for (let i = total - 1; i > 0; i--) {
        imageIdecies[i] = imageIdecies[i - 1];
      }
      imageIdecies[0] = last;
      console.log(imageIdecies);
    }
  
  
    function resetIndecies() {
      currentSet[0] = imageIdecies[0];
      currentSet[1] = imageIdecies[1];
      currentSet[2] = imageIdecies[2];
      currentSet[3] = imageIdecies[3];
      currentSet[4] = imageIdecies[4];
      currentSet[5] = imageIdecies[total - 4];
      currentSet[6] = imageIdecies[total - 3];
      currentSet[7] = imageIdecies[total - 2];
      currentSet[8] = imageIdecies[total - 1];
      console.log(currentSet);
    }
  
    function populateCells() {
      for (i = 0; i < cellCount; i++) {
        var current = document.createElement('div');
        current.innerHTML = htmlArray[currentSet[i]];
        cells[i].appendChild(current);
      }
    }
  
    function swapPrevious() {
      var currentBacks = document.querySelectorAll(".reset");
      var pending = 0;
      if (currentBacks[pending].dataset.placement != "backR") { pending++; }
      var currentImg = currentBacks[pending].getElementsByTagName("img");
      console.log(currentImg);
      currentImg[0].src = images[currentSet[5]];
    }
  
    function swapNext() {
      var currentBacks = document.querySelectorAll(".reset");
      var pending = 0;
      if (currentBacks[pending].dataset.placement != "backL") { pending++; }
      var currentImg = currentBacks[pending].getElementsByTagName("img");
      console.log(currentImg);
      currentImg[0].src = images[currentSet[4]];
    }
  }
  
  getApiImages()

/* get gallery api search url
  fetch search url
  push object id data into objectIds array
  for each object id, append object id to gallery object get fetch url
  fetch from gallery object url
  push object data into html template literal 
  push template into htmlArray
  return to external variable (Also htmlArray)

 */