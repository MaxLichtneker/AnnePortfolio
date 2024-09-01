let previousImages = document.getElementById("Portraits");
let previousButtonString = document.querySelectorAll('.PortraitsItem');;

function GalleryButton(clickedElement){

    let clickedButton = clickedElement
    let clickedButtonString = String(clickedButton.split("_").pop());

    CurrentImages = document.getElementById(clickedButtonString);

    if(previousImages != clickedButton){

        previousImages.style.visibility = "hidden";

        for(i = 0; i < previousButtonString.length; i++)
        {
            previousButtonString[i].style.display = "none";
        }

        CurrentImages.style.visibility = "visible";

        let CurrentImagesArray = document.querySelectorAll("."+clickedButtonString.concat("Item"));
    
        for(i = 0; i < CurrentImagesArray.length; i++)
        {
            CurrentImagesArray[i].style.display = "block";
        }
        
        previousImages = CurrentImages;
        previousButtonString = CurrentImagesArray;

    }else{
       return;
    }
}