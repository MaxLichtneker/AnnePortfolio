var buttonImgArray = ['Images/Lines.png', 'Images/Cross.png'] 

let previousImages = document.getElementById("Portraits");
let previousButtonString = document.querySelectorAll('.PortraitsItem');

function GalleryButton(clickedElement){

    let clickedButton = clickedElement
    let clickedButtonString = String(clickedButton.split("_").pop());

    CurrentImages = document.getElementById(clickedButtonString);

    if(previousImages != clickedButton){

        previousImages.style.display = "none";
        previousImages.style.visibility = "hidden";

        for(i = 0; i < previousButtonString.length; i++)
        {
            previousButtonString[i].style.display = "none";
        }

        CurrentImages.style.display = "flex";
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

function TabButtonOn(){
    document.getElementById("Cross").style.display="block";
    document.getElementById("Burger").style.display="none";

    document.getElementById("BurgerMenu").style.right = "0px"
}

function TabButtonOff(){
    document.getElementById("Burger").style.display="block";
    document.getElementById("Cross").style.display="none";

       document.getElementById("BurgerMenu").style.right = "-350px"
}

