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
      const newHeader = document.getElementById("login-text");
      newHeader.innerText = "Successful Login 😀";

      const reimbursementRedirect = document.createElement("p");
      reimbursementRedirect.innerHTML =
        "<a id = redirect href = '../Reimbursements/reimbursements.html'>This is a paragraph</a>";
      document.body.appendChild(reimbursementRedirect);

      //token authorization to be passed here
      window.localStorage.setItem(
        "token",
        response.headers.get("Authorization")
      );
    })
    .catch((error) => {
      console.error(error);
      const newHeader = document.getElementById("login-text");
      newHeader.innerText = "Login Failed 😡";
    });
}
