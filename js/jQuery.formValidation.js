$(document).ready(function(){

    $('#email').focus();
    // contact us form validation
    $("#contact-form").validate({
        rules:{
            email:{
                required:true,
                email:true
            },
            query:{
                required:true
            }
        }
    });
});