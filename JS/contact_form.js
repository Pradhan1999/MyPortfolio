// _____________________________
// Recieves Mail


function sendEmail() {
    var name = $(".name").val();
    var email = $(".email").val();
    var subject = $(".subject").val();
    var msg = $(".msg").val();

    var body = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + msg;

    Email.send({
        SecureToken: "ff4338a8-1f83-48c5-b360-e5f5aab5841a",
        To: "deepakpradhan614@gmail.com",
        From: "pradhan171219@gmail.com",
        Subject: "Portfolio-Contact-Form",
        Body: body
    }).then(
        message => {
            if (message == 'OK') {
                alert("Your email has been sent... Thank You for Connecting :)");
            }
            else {
                console.error(message);
                alert("Uhh.. Your message didn't reached me. Please submit the form again.")
            }
        }
    );
}

form.addEventListener('submit', sendEmail);
