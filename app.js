console.log("Hello World")

//TODO: I need to store my images data
//You can use images stored locally or images stored remotely (unsplash...)

const images = [
  {
    url: "./assetFolder/alianceArena.jpg", //relative path for local images OR link to the image
    altText: "Picture of Bayern Stadium",
    className: "img1",
  },
  {
    url: "./assetFolder/anfield.jpg",
    altText: "Picture of Liverpool Stadium",
    className: "img2",
  },
  {
    url: "./assetFolder/benabeu.jpg",
    altText: "Picture of Real Madrid Stadium",
    className: "img3",
  },
];
console.log(images)
//TODO: I need to create my thumbnail images
// function createThumbnails(){
// select the DOM element (thumbnail-container) to contain our thumbnails
//this is a repetitive task --> loop through our array (using the length property)

//Inside our loop we need to do this:
// - create img element
// - update the src and alt attributes of the img element to match those in the array (parameters)
// - give each img a className (img.className)
// - add an event listener to each image --> the event handler of this listener is the function you write to create large images
// - append the created images to the thumbnail-container
// }
function createThumbnails (images){
    const thumbnail = document.getElementById("thumbnail-container");

    for (let i = 0; i < images.length; i++){
    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = images[i].url;
    thumbnailImage.alt = images[i].altText;
    // console.log(thumbnailImage.src)
    // console.log(thumbnailImage.altText)
    thumbnailImage.className = images[i].className;
    thumbnailImage.addEventListener("click", createLargeImagesHandler);
    thumbnail.appendChild(thumbnailImage)
}
}
createThumbnails(images)
// Remeember to call the function

//TODO: I need to create my large images
//this task is the event handler for the thumbnail events
// function createLargeImagesHandler(){
//select the large-image-container
//delete the current image in the large-image-container
// largeImageContainer.innerHTML = null OR ""
// create an image
// update the src and alt values
// add a className for styling
//append the img to the container
// }

//add this event handler to the thumbanil event
//you call the createThumbanils function