$(document).ready(function(){

    $("#danger").hide();
    $("#success").hide();
    $("#btn").click(function(){
        let pratique = parseFloat($("#pratique").val());
        let theorique = parseFloat($("#theorique").val());
        let Passge = parseFloat($("#Passge").val());
        let moyenne = parseFloat($("#moyenne").val());


            if((Validation().valid)){

                    let toltal  = (pratique+theorique+Passge+moyenne)/9;
                    $("#success").text("EFF = "+toltal+" / 20");
                    $("#danger").hide();
                    $("#success").show();

            }else{
                $("#danger").text(Validation().msg);
                $("#success").hide();
                $("#danger").show();
            }

            

        


    });


});

/* 
        pratique : greater or equle 0 and less or equle 60
        theorique : great or equle 0 and less or equle 40
        Passge : great or equle 0 and less or equle 20
        moyenne : great or equle 0 and less or equle 60



*/

function Validation(){

    let pratique = parseFloat($("#pratique").val());
    let theorique = parseFloat($("#theorique").val());
    let Passge = parseFloat($("#Passge").val());
    let moyenne = parseFloat($("#moyenne").val());


    if(!(pratique >= 0  && pratique <= 60)){
        return  {valid : false ,  msg  :"doit être supérieur ou égal à 0 et inférieur ou égal à 60"};
    }
    if(!(theorique >= 0  && theorique <= 40)){
        return  {valid : false ,  msg  : "doit être supérieur ou égal à 0 et inférieur ou égal à 40"};
    }
    if(!(Passge >= 0  && Passge <= 20)){
        return  {valid : false ,  msg : "doit être supérieur ou égal à 0 et inférieur ou égal à 20"};
    }
    if(!(moyenne >= 0  && moyenne <= 60)){
        return  {valid : false ,  msg : "doit être supérieur ou égal à 0 et inférieur ou égal à 60"};
    }

    return {valid : true , msg : ""};




}