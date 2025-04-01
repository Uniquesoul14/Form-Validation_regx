$("#btn").on("click" , function() {
    console.log("press !")

    let isvalid = true;


    let userName = $("#user_name").val();
    let user_Regx = /^[a-zA-Z][a-zA-Z0-9-_]{3,32}$/
    if(! user_Regx.test(userName))
    {
        $("#err_1").text("*Invalid user name !")
        isvalid = false;
    }

    
    let email = $("#email").val();
    let email_Regx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(! email_Regx.test(email))
    {
        $("#err_2").text("*Invalid gmail use : '.@gmail.com & numbers' ")
        isvalid = false;
    }


    let password = $("#pass").val();
    let password_Regx = /^^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    if(! password_Regx.test(password))
    {
        $("#err_3").text("*Invalid password !")
        isvalid = false;
    }

    let con_pass = $("#con-pass").val();
    if(password !== con_pass)
    {
        $("#err_4").text("*Password do not match !")
        isvalid = false;
    }
 

    if(isvalid){
        document.writeln("Login successful !");
    }
});