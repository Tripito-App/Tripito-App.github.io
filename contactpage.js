function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "tripito.info@gmail.com",
        Password: "Tr1p1t0!",
        To: 'tripito.info@gmail.com',
        From: document.getElementById('email').value,
        Subject: 'Tripito Contact Form',
        Body: document.getElementById("email").value +
            " has question(s) about " +
            document.getElementById("F").value + ", " +
            document.getElementById("Q").value + ", " +
            document.getElementById("T").value,
    })
    .then(function (message) {
        alert("mail sent successfully")
    });
}
