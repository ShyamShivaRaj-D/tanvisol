function emailSend(){

    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('number').value;
    var address = document.getElementById('address').value;

    var messageBody = "First Name : " + firstName +
    "<br/> Last Name : " + lastName +
    "<br/> Email : " + email +
    "<br/> Mobile Number : " + mobileNumber +
    "<br/> Address : " + address;
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "tanvisol.hyd@gmail.com",
    Password : "79B1B8F30603B7909644E301B9DD114935A4",
    To : 'tanvisol.hyd@gmail.com',
    From : "tanvisol.hyd@gmail.com",
    Subject : "Schedule a Call Submission",
    Body : messageBody
    }).then(
    message => {
        // alert(message);
        // document.getElementById('emailForm').reset();
        if(message=="OK"){
            swal("Successfully!", "you will get a call in 24 hours", "success", {
             button: "OK",});
        }
        else{
            swal("Error", "You not Scheduled call", "error", {
             button: "OK",});
        }
    }
    );

}

function emailSendContact(){
    var fullName = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var city = document.getElementById('city').value;
    var number = document.getElementById('number').value;
    var comment = document.getElementById('comment').value;

    var messageBody = "Full Name : " + fullName +
    "<br/> Email : " + email +
    "<br/> City : " + city +
    "<br/> Number : " + number +
    "<br/> Client Comments : " + comment;
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "tanvisol.hyd@gmail.com",
    Password : "79B1B8F30603B7909644E301B9DD114935A4",
    To : 'tanvisol.hyd@gmail.com',
    From : "tanvisol.hyd@gmail.com",
    Subject : "Comments from Users",
    Body : messageBody
    }).then(
        message => {
        // alert(message);
        // document.getElementById('emailForm').reset();
        if(message=="OK"){
            swal("Successfully!", "Sent your Comment", "success", {
             button: "OK",});
        }
        else{
            swal("Error", "You not Sent", "error", {
             button: "OK",});
        }
    }
    );
}