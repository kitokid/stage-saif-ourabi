/*
//Déclaration des messages d'erreur
const msg_nom="Merci d'entrer un nom et un prénom valides !    ! الرجاء التثبت من الاسم واللقب";
const msg_check="Veuillez choisir une réponse !    ! الرجاء إختيار أحد الإقتراحات";
const msg_cin="Merci d'entrer un numéro de CIN valide !    ! الرجاء التثبت من رقم بطاقة التعريف الوطنية";
const msg_datnais="Merci d'entrer la date de naissance !    ! الرجاء التثبت من تاريخ الميلاد";


//Récupération des valeurs des inputs du formulaire
var nom=document.getElementById("t1");
var prenom=document.getElementById("t2");
var homme_check=document.getElementById("h");
var Femme_check=document.getElementById("f");
var dat_nais=document.getElementById("date");
var Emploi=document.getElementById("job");
var cin=document.getElementById("cin");
var button_valider=document.getElementById("b1");




//Stockez les éléments de type div dans une variable
var zone_msg1=document.getElementById("m1");
var zone_msg2=document.getElementById("m2");
var zone_msg3=document.getElementById("m3");
var zone_msg4=document.getElementById("m4");
var zone_msg5=document.getElementById("m5");




//Fonction de vérification des caractères alphabétiques pour une chaîne donnée en prenant en compte les alphabets latins et arabes
function verif_alpha(a)
{
ok=true;
i=0;
while(i<a.length && ok )
{
    if((a[i].toUpperCase()<"A" || a[i].toUpperCase()>"Z") && ((a[i]<"ا"||a[i]>"ي") && (a[i]!='ء') && (a[i]!='ئ') && (a[i]!='ؤ')&&(a[i]!='إ')&&(a[i]!='أ')&&(a[i]!='ٱ')&&(a[i]!='آ')&&(a[i]!='é')&&(a[i]!='è')))
    {
    ok=false;
    }
    else
    {
    i++;
    }
}
return ok;
}




//Ajouter un message d'erreur si le champ nom n'est pas correctement renseigné."
function verif_nom()
{
    if(verif_alpha(nom.value)==false)
    {
        
        zone_msg1.textContent=msg_nom;
    }
    if(verif_alpha(nom.value)==true)
    {
        zone_msg1.textContent="";
    }
}





//Ajouter un message d'erreur si le champ prenom n'est pas correctement renseigné."
function verif_prenom()
{
    if(verif_alpha(prenom.value)==false)
    {
        
        zone_msg2.textContent=msg_nom;
    }
    if(verif_alpha(prenom.value)==true)
    {
    zone_msg2.textContent="";
    }
}




//Ajouter un message d'erreur si le champ cin n'est pas correctement renseigné."
function verif_cin()
{
    if(cin.value.length!=8)
    {
        zone_msg4.textContent=msg_cin;
    }
    if(cin.value.length==8)
    {
    zone_msg4.textContent=""
    }   
}




//Supprimez le message d'erreur lorsqu'un des boutons radio est coché
function genre_verif()
{
if(homme_check.checked==true || Femme_check.checked==true)
{
    zone_msg3.textContent=""
}
}





//Supprimer le message d'erreur lors de l'ajout de date
function dat_verif()
{
if(dat_nais.value!='')
{
    zone_msg5.textContent="";
}
}





	


button_valider.addEventListener("click",function verif_genre_job_date(event)
{
    event.preventDefault();
    if(homme_check.checked==false && Femme_check.checked==false)
    {
    zone_msg3.textContent=msg_check;
    }

    if(dat_nais.value=='')
        {
        zone_msg5.textContent=msg_datnais;
        }


    if(verif_alpha(nom.value)==false || nom.value=="")
        {    
        zone_msg1.textContent=msg_nom;
        }

    if(verif_alpha(prenom.value)==false || prenom.value=="")
        {
        zone_msg2.textContent=msg_nom;
        }

    if(cin.value.length!=8)
        {
    zone_msg4.textContent=msg_cin;
        }

})

*/













//Déclaration des messages d'erreur
const msg_nom="Merci d'entrer un nom et un prénom valides !    ! الرجاء التثبت من الاسم واللقب";
const msg_check="Veuillez choisir une réponse !    ! الرجاء إختيار أحد الإقتراحات";
const msg_cin="Merci d'entrer un numéro de CIN valide !    ! الرجاء التثبت من رقم بطاقة التعريف الوطنية";
const msg_datnais="Merci d'entrer la date de naissance !    ! الرجاء التثبت من تاريخ الميلاد";



//Fonction de vérification des caractères alphabétiques pour une chaîne donnée en prenant en compte les alphabets latins et arabes
function verif_alpha(a)
{
ok=true;
i=0;
while(i<a.length && ok )
{
    if((a[i].toUpperCase()<"A" || a[i].toUpperCase()>"Z") && ((a[i]<"ا"||a[i]>"ي") && (a[i]!='ء') && (a[i]!='ئ') && (a[i]!='ؤ')&&(a[i]!='إ')&&(a[i]!='أ')&&(a[i]!='ٱ')&&(a[i]!='آ')&&(a[i]!='é')&&(a[i]!='è')))
    {
    ok=false;
    }
    else
    {
    i++;
    }
}
return ok;
}

/************************************************************************************************************************************************************************/



//Récupération des valeurs des inputs du formulaire
var nom=$('#t1')
var prenom=$('#t2')
var homme_check=$("#h");
var Femme_check=$("#f");
var dat_nais=$("#date");
var Emploi=$("#job");
var cin=$("#cin");
var button_valider=$("#b1");
/************************************************************************************************************************************************************************/


//Stockez les éléments de type div dans une variable
var zone_msg1=$('#m1');
var zone_msg2=$('#m2');
var zone_msg3=$('#m3');
var zone_msg4=$('#m4');
var zone_msg5=$('#m5');


/************************************************************************************************************************************************************************/

//Ajouter un message d'erreur si le champ nom n'est pas correctement renseigné.
nom.on("input",function() { 
    if(verif_alpha(this.value)==false)
    {
        zone_msg1.text(msg_nom);
    }
    else
    {
        zone_msg1.text("");
    }
    
});

/************************************************************************************************************************************************************************/

//Ajouter un message d'erreur si le champ prenom n'est pas correctement renseigné
prenom.on("input",function() { 
    if(verif_alpha(this.value)==false)
    {
        zone_msg2.text(msg_nom);
    }
    else
    {
        zone_msg2.text("");
    }
    
});

/************************************************************************************************************************************************************************/



//Supprimez le message d'erreur lorsqu'un des boutons radio est coché
Femme_check.change(function () { 
    {
    zone_msg3.text("");
    }
    
});


/************************************************************************************************************************************************************************/


//Supprimez le message d'erreur lorsqu'un des boutons radio est coché
homme_check.change(function () { 
    {
    zone_msg3.text("");
    }
    
});

/************************************************************************************************************************************************************************/


//Ajouter un message d'erreur si le champ cin n'est pas correctement renseigné
cin.on("input",function() { 
    if(this.value.length!=8)
    {
        zone_msg4.text(msg_cin);
    }
    else
    {
        zone_msg4.text("");
    }
    
});

/************************************************************************************************************************************************************************/



//Supprimer le message d'erreur lors de l'ajout de date
dat_nais.change(function () { 
    zone_msg5.text("");
});



//Ajouter un événement de type clic sur le bouton "Valider" pour vérifier tous les champs
button_valider.click(function (e) { 
    e.preventDefault();
    if(verif_alpha(nom.val()==false))
    {
        zone_msg1.text(msg_nom);
    }

    if(verif_alpha(prenom.val()==false))
    {
        zone_msg2.text(msg_nom);
    }


    if(cin.val().length!=8)
    {
        zone_msg4.text(msg_cin);
    }
    
    if(Femme_check.prop("checked")==false && homme_check.prop("checked")==false)
    {
    zone_msg3.text(msg_check)
    }

    if(dat_nais.val()=="")
    {
    zone_msg5.text(msg_datnais);
    }



});

/************************************************************************************************************************************************************************/