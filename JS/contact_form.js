// _____________________________
// Recieves Mail


const form = document.querySelector('.contact_form');

function sendEmail(e){
    e.preventDefault();


    const name = document.querySelector('.name').value,
        email = document.querySelector('.email').value,
        subject = document.querySelector('.subject').value,
        msg = document.querySelector('.msg').value;

    var body = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + msg;

    Email.send({
        SecureToken : "ff4338a8-1f83-48c5-b360-e5f5aab5841a",
        To : 'deepakpradhan614@gmail.com',
        From : email,
        Subject : "Portfolio-Contact-Form",
        Body : body
    }).then(
        message =>{
            if(message == 'OK'){
                alert("Your email has been sent... Thank You for Connecting :)");
            }
            else{
                console.error(message);
                alert("Uhh.. Your message didn't reached me. Please submit the form again.")
            }
        }
    );
}

form.addEventListener('submit', sendEmail);
