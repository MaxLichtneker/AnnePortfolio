let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function(){

        const currentScrollPos = this.window.scrollY;

        if(prevScrollPos > currentScrollPos){
            document.getElementById("navBar").style.top = "0px";
        }else{
            document.getElementById("navBar").style.top = "-200px";
        }

        prevScrollPos = currentScrollPos;

});
