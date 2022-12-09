
const url = 'http://localhost:8080/';


async function submitTicket(form) {

    //let username = ;
    let description = form.description.value;
    let amount = form.amount.value;
    
    // Footer
    const footer = document.createElement("p");

    fetch(`${url}ticket`, {
        method: "POST",
        headers: {
            authorization: window.localStorage.getItem("token")
        },
        body: JSON.stringify({
            amount: amount,
            description: description
        })}).then(response=> {
            if (response.status === 200) {
                footer.innerHTML = "<p>Ticket submited for " + amount + "<p>";
                document.body.appendChild(footer);
                return response;
            }
        })
        
}