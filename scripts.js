emailjs.init("AQUI VA EL CÓDGIO DE LA API"); 

document.getElementById('personalDataForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  emailjs.send("CODIGO DEL SERVICIO", "CODIGO DE LA PLANTILLA", {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    message: message
  })
  
  .then(() => {
    document.getElementById('status-message').innerText = "Datos enviados con éxito.";
    document.getElementById('personalDataForm').reset();
  })
  .catch((error) => {
    console.error("Error al enviar los datos:", error);
    document.getElementById('status-message').innerText = "Hubo un error al enviar los datos.";
  });
});
