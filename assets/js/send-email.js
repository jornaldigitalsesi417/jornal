'use strict'

const sendEmail = () => {
    let name = document.getElementById('input_nome')
    let email = document.getElementById('input_email')
    let message = document.getElementById('input_message')
    let password = document.getElementById('input_password')

    Email.send({
        Host: "smtp.gmail.com",
        Username : `${email}`,
        Password : `${password}`,
        To : 'jornaldigitalsesi417@gmial.com',
        From : `${email}`,
        Subject : `Contato por ${name}, via Website`,
        Body : `${message}`
    }).then(
        alert("mail sent successfully")
    );
}