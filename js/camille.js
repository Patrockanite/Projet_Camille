(function(){
    var largeurEcran = screen.width ;
    var pour_photoXs = document.getElementById("XSmall");
    var pour_photoXXXs = document.getElementById("XXXSmall");
    var imageSmall = document.createElement("img");

    if(largeurEcran>401 & largeurEcran<768){
        imageSmall.src="../img/slider/XSmall.jpg";
        pour_photoXs.appendChild(imageSmall);
        
        
    }
    if(largeurEcran>10 & largeurEcran<400){
        imageSmall.src="../img/slider/XXSmall.jpg";
        pour_photoXXXs.appendChild(imageSmall);
        
    }
})()
