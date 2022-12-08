const url = "http://localhost:8080/";

document
  .getElementById("get-reimbursements")
  .addEventListener("click", getReimbursements);

async function getReimbursements() {
  try {
    let username = document.getElementById("eUsername").value;
    const response = await fetch(`${url}${username}/tickets/pending`, {
      method: "GET",
      headers: {
        authorization: window.localStorage.getItem("token"),
      },
    });

    const reimbursements = await response.json();

    console.log(reimbursements);
    let table_filler = "<tr>";
    reimbursements.map((element) => {
      for (const key in element) {
        table_filler += `<td>${element[key]}</td>`;
      }
      table_filler += "</tr>";
      console.log(table_filler);
    });

    document.getElementById("reimbursement-table").innerHTML += table_filler;
  } catch (error) {
    console.error(error);
  }
}
