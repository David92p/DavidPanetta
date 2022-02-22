
function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("nome").value,
        to_email: document.getElementById("email").value,
        message: document.getElementById("messaggio").value
    };

    emailjs.send('service_e5d2bp9', 'template_lvsg95j', tempParams)
    .then(function(res){
        console.log('success', res.status);
    })
}