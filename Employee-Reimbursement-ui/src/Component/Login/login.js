
let initialLogin = document.getElementById("login-container").innerHTML;
let loginText = document.getElementById("login-text").innerHTML;
const url = "http://localhost:8080/";

function login(form) {
  let username = form.username.value;
  let password = form.password.value;

  fetch(`${url}login`, {
    method: `POST`,
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => {
      console.log(response);
      console.log(response.status);
      if (response.status === 404) {
        throw new Error(response.text().then((body) => console.log(body)));
      }
      console.log(...response.headers);
      loginText =
        "<h3 id = 'login-success'>Successfully Logged In " +
        username +
        "</h3> <a href='../Reimburesments/reimbursements.html'>Reimbursements</a>\
        <a href='../Submit-Ticket/submit-ticket.html'>Submit a Ticket</a>";
        document.getElementById("login-information").innerHTML = loginText;
    })
    .catch((error) => {
      console.error(error);
      initialLogin = `<h1 id="login-error">Incorrect Information</h1>`;
    });
}
