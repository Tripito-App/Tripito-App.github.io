function sendEmail() {
    var f = "a";
    var q = "b";
    var t = "c";
    if (document.getElementById('F').value == 'on'){
        f = "Feedback";
    }
    if (document.getElementById('Q').value == 'on'){
        q = "Questions";
    }
    if (document.getElementById('T').value == 'on'){
        t = "Typos";
    }
    Email.send({
        Host: "smtp.gmail.com",
        Username: "tripito.info@gmail.com",
        Password: "Tr1p1t0!",
        To: 'tripito.info@gmail.com',
        From: document.getElementById('email').value,
        Subject: 'Tripito Contact Form',
        Body: document.getElementById("name").value +
            " has question(s) about " + f + ", " + q + ", " + t + ". Respond to them at: " +
            document.getElementById("email").value,
    })
    .then(function (message) {
        alert("Mail sent successfully!")
    });
}
