
let initialLogin = document.getElementById("login-container").innerHTML;
const url = "http://localhost:8080/";

function login(form) {
  let username = form.username.value;
  let password = form.password.value;
}

fetch(`${url}login`, {
  method: `POST`,
  body: JSON.stringify({
    username: username,
    password: password,
  }),
})
  .then((response) => {
    console.log(response.status);
  })
  .catch((error) => {
    console.error(error);
    // <h1 id = "login-error">Incorrect Information</h1>
  });

