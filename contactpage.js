function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "tripito.info@gmail.com",
        Password: "Tr1p1t0!",
        To: 'tripito.info@gmail.com',
        From: document.getElementById('email').value,
        Subject: 'Tripito Contact Form',
        Body: document.getElementById("name").value +
            " has question(s) about " + document.getElementById('Subject') + ". Respond to them at: " +
            document.getElementById("email").value + " Body: " + document.getElementById("comments").value,
    })
    .then(
        function (message) {
            alert("Mail sent successfully!")
        }
    );
}
