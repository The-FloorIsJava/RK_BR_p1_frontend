
const url = 'localhost:8080/';


async function submitTicket(form) {

    //let username = ;
    let description = form.description;
    let amount = form.amount;

    try {
        const response = await fetch('${url}/ticket',{
            method: "POST",
            headers: {
                authorization: window.localStorage.getItem("token")
            },
            body: JSON.stringify({
                "amount": amount,
                "description":description
            })
        }
        );
    } catch(Error) {
        console.log("Failure!!!!!!!!!!!!");
    }

}