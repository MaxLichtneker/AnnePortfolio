let previousImages;


function GalleryButton(clickedElement){
    if(previousImages){
        previousImages.visibility = "hidden";
    }

    let clickedButton = clickedElement
    let clickedButtonString = String(clickedButton.split("_").pop());

    previousImages = document.getElementById(clickedButtonString).style.visibility = "visible";

    let previousImagesArray = document.querySelectorAll("."+clickedButtonString.concat("Item"));

    for(i = 0; i < previousImagesArray.length; i++)
    {
        previousImagesArray[i].style.display = "block"
    }
}