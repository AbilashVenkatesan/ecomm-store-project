//FILTER FUNCTION---------------


const forImage = document.querySelector('#mainGallery')
const forGallery = document.querySelector('#gallery')

/* Changing the attributes */

const forSetGal = function(event){
    const whichOneImage =event.target

  if(whichOneImage.matches('.gall-img'))  {

    let srcImage = whichOneImage.getAttribute('src')
    let altImage = whichOneImage.getAttribute('alt')

    forImage.setAttribute('src', srcImage)
    forImage.setAttribute('alt', altImage)

  }

}

forGallery.addEventListener('click', forSetGal)
