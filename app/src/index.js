const API_URL = "http://localhost:4000";

/**
 * Registra un usuario
 * @param {object} formData
 * @return {object} resultado del registro
 */
async function registrarUsuario(formData) {
  let response = await fetch(
    `${API_URL}/users`,
    {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    }
  );

  return {
    status: response.status,
    body: await response.json()
  }
}

function obtenerDatos(e) {

  e.preventDefault();

  const form = document.getElementById("form");

  const name = form.name.value;
  const email = form.email.value;
  const username = form.username.value;
  const numberPhone = form.telefono.value;
  const pass = form.pass.value;

  const formData = {
    name: name,
    email: email,
    username: username,
    numberPhone: numberPhone,
    password: pass,
  };

  console.log("registrar usuario");
  registrarUsuario(formData)
    .then((info) => {
      console.log(info);
      if (info.status === 200 || info.status === 201) {
        console.log(`status: ${info.status}`);
        alert("Se ha registrado correctamente");
        const message = document.getElementById("messagge");
        message.innerHTML = "Se ha registrado exitosamente";
      } else {
        const messagge = document.getElementById("messagge");
        messagge.innerHTML = `Error: ${info.body.message}`;
      }
    }).catch((error) => {
      console.log(error);
      const messagge = document.getElementById("messagge");
      messagge.innerHTML = `Error: ${error}`
    })
}

