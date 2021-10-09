const getWomanUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=woman"
const apiLink = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"


// Get woman art IDs
fetch(`${getWomanUrl}`)  
  .then(response => response.json())
  .then(data => {
    // console.log('1:', data.objectIDs);
    return data;
  })
  .then(data => {
    let objectIDs = data.objectIDs; // Get ObjectIds
    // let objectID = objectIDs[Math.floor(Math.random() * objectIDs.length)]; // Select a random Id
    console.log(objectIDs);
    var htmlArray = []

    for (i = 0; i < 10; i++) {
      fetch(`${apiLink}` + objectIDs[i]) // Fetch url for the random selected artwork
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
  
          // Output
          htmlArray.push( `<div class="container"><h4 id="title">The Metropolitan Museum of Art</h4><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><div class="photo"><img src='${data.primaryImage}'></img></div><div class="flip-card-back"><h4 class="title">${data.title}</h4><p class="username font-weight-bold">${data.artistDisplayName}</p><p class="artistDisplayBio">${data.artistDisplayBio}</p><p class="objectEndDate pb-5"> Date: ${data.objectEndDate}</p><p class="show-id"></p></div>`)
        })
    }
    console.log(htmlArray)
    
    let button = document.getElementById('nextButton')
    button.addEventListener('click', () => {
        window.setTimeout(() => {
            window.location.reload(true)
        }, 200)
    })
      
  })