$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var prenom = $("#prenom").val();
    var name = $("#name").val();
    var email = $("#email").val();
    var telephone =$("#telephone").val();
    var msg_subject = $("#msg_subject").val();
    var message = $("#message").val();


    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data:  "&prenom="+ prenom + "&name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&telephone=" + telephone + "&message=" + message ,
        success : function(text,status){
           //alert(status);
           //J'ai évalué le staus plutôt que le text
            if (status=='success'){                
                //alert("ça marche !!!!! ");
                formSuccess();
            } else {
                //alert("ça ne marche pas !");
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message envoyé avec succès!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}