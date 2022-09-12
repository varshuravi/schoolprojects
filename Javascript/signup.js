$(document).ready(function(){
    
    $("#registerbutton").click(function(e){
        e.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let confirmpassword = $("#confirmpassword").val();


        $(".error").remove();

        if(name.length<1){
            $("#name").after('<span class="error">This field is required</span>');
            return
        }
        
        if(email.length<1){
            $("#email").after('<span class="error">This field is required</span>');
            return
        }
        else {
            let regEx = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            let validEmail = regEx.test(email);
            if(!validEmail){
                $("#email").after('<span class="error">Enter a valid email</span>')
            }
        }
        if(password.length < 8){
            $("#password").after('<span class="error">Password length must be in 8 characters</span>');
            return
        }
        if(password != confirmpassword){
            $("#confirmpassword").after('<span class="error"> password does not match</span>');
          
        }
       

        let result = {name,email,password,confirmpassword};
        console.log(result);

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
        localStorage.setItem("confirmpassword",confirmpassword);
            
           window.location.href="signin.html"; 
        
    });
});