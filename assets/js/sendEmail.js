function sendMail(contactForm) {
    emailjs.send("gmail", "georgia", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectSummary.value
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
    return false; //to block from loading a new page  
}

