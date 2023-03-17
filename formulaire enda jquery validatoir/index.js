$.validator.addMethod("alphabet", function(value, element) {
    return this.optional(element) || /^[a-zA-Z]+$/.test(value);
}, "Name and prenom should contain only alphabet characters");

$(document).ready(function () {
    $("#f").validate({
        rules: {
            name: {
                required: true,
                alphabet: true
            },
            prenom: {
                required: true,
                alphabet: true
            },
            genre:{
                required:true,
            },
            cin: {
                required: true,
                minlength: 8,
                maxlength: 8
            },
            date: {
                required: true
            },
            job: {
                required: true
            }
        },
        
        //palcment for radio button
        errorPlacement:function( error, element ){
            if(element.is( ":radio" )){
                error.appendTo('.gere-erreor');
                }
            else {
                error.insertAfter(element);
            }
        },
        
        
        
        messages: {
            name: "Merci d'entrer un nom et un prénom valides !    ! الرجاء التثبت من الاسم واللقب",
            prenom: "Merci d'entrer un nom et un prénom valides !    ! الرجاء التثبت من الاسم واللقب",
            cin:"Merci d'entrer un numéro de CIN valide !    ! الرجاء التثبت من رقم بطاقة التعريف الوطنية",
            date: "Merci d'entrer la date de naissance !    ! الرجاء التثبت من تاريخ الميلاد",   
            genre: "Veuillez choisir une réponse !    ! الرجاء إختيار أحد الإقتراحات",
            job: "Veuillez choisir une réponse !    ! الرجاء إختيار أحد الإقتراحات",
        },
    


    });





});

