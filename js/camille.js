/*ce code fonctionne en mode inspection mais pas en mode navigateur ! Pourquoi ?*/
/*Je ne sais pas alors je vais essayer avec du JQuery dessous*/
/*(function(){
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
})()*/
/*********** JQuery pour afficher les photos si l'écran est petit *************/
var $window = $(window);
$(document).ready(function(){ 

    /**************** on cache les blocs XSmall et XXXSmall ***********/
    $("#XSmall").hide();
    $("#XXXSmall").hide();
    $windowWidth = $(this).width();


    if($windowWidth>=400 & $windowWidth<768){
        $("#XSmall").show();
    }

    if($windowWidth>10 & $windowWidth<400){
        $("#XXXSmall").show();
        
    }
    
   /* $(window).on('resize', function() {
        $windowWidth = $(this).width();
     
        console.log($windowWidth);
    });*/     
    
    
    
    
}) ; //fin du ready