console.log("Hello World")

const images = [
  {
    url: "./assetFolder/alianceArena.jpg", 
    altText: "Picture of Bayern Stadium",
    className: "small-image",
    
  },
  {
    url: "./assetFolder/anfield.jpg",
    altText: "Picture of Liverpool Stadium",
    className: "small-image",
  },
  {
    url: "./assetFolder/benabeu.jpg",
    altText: "Picture of Real Madrid Stadium",
    className: "small-image",
  },
];
const largeContainer = document.getElementById("large-image-container")

let imageIndex = 0;

window.onload = function(){
  const largeImage = document.createElement("img");
  largeImage.src = images[imageIndex].url
  largeImage.alt = images[imageIndex].altText;
  largeImage.classList.add("large-image-class");
  largeContainer.appendChild(largeImage)
}

function createThumbnails (images){
    const thumbnail = document.getElementById("thumbnail-container");

    for (let i = 0; i < images.length; i++){
    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = images[i].url;
    thumbnailImage.alt = images[i].altText;
   

    thumbnailImage.className = images[i].className;
    thumbnailImage.addEventListener("click", createLargeImagesHandler);
    thumbnail.appendChild(thumbnailImage);
     
}
}
createThumbnails(images)


function createLargeImagesHandler(event){
    largeContainer.innerHTML = "";
    const largeImage = document.createElement("img");
    largeImage.src = event.target.src;
    largeImage.alt = event.target.alt;
    largeImage.classList.add("large-image-class");
    largeContainer.appendChild(largeImage);
    
}

function showImage (index){
  if (index >= images.length){
    imageIndex = 0;
  }else if (index < 0){
    imageIndex = images.length - 1;
  }

  largeContainer.innerHTML = "";
  const largeImage = document.createElement("img");
  largeImage.src = images[imageIndex].url
  largeImage.alt = images[imageIndex].altText;
  largeImage.classList.add("large-image-class");
  largeContainer.appendChild(largeImage)

}

function next(){
  imageIndex++;
  showImage(imageIndex);
  
}

function prev(){
  imageIndex--;
  showImage(imageIndex)
}
