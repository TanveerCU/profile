function sendmail() {
    console.log("all is well");
    let form = document.querySelector(".contact-form");
    let name = form.querySelector("#name").value;
    let email = form.querySelector("#email").value;
    let subject =  form.querySelector("#subject").value;
    let message =  form.querySelector("#message").value;

    let Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "cityuniversity303@gmail.com",
        Password: "pbmivfupmfqgpqkz",
        To: 'atanveer712@gmail.com',
        From: "cityuniversity303@gmail.com",
        Subject: "New message on contact from " + name,
        Body: Body
    }).then((message)=>{
        if(message=='OK'){
            alert('Your mail has been send. Thank you for connecting.');
            document.getElementsByTagName("form")[0].reset();
        }else{
            alert('There is error at sending message. ');
            document.getElementsByTagName("form")[0].reset();
        }
    });
}
