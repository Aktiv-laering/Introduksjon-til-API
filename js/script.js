const url = "https://randomuser.me/api/?nat=no";
const container = document.querySelector(".container");

async function getApi() {
    const response = await fetch(url);
    const result = await response.json();

    console.log(result.results);

    // ${JSON.stringify(result.results)}

    container.innerHTML = `
    
    <div>
        <img src=${result.results[0].picture.large} height="200"/>
        <h1>Navn: ${result.results[0].name.first} ${result.results[0].name.last}</h1>
        <h2>${result.results[0].gender}</h2>
        <h3>${result.results[0].phone}</h3>
        <h3>${result.results[0].email}</h3>
        <h4>${result.results[0].location.street.name} ${result.results[0].location.street.number}, ${result.results[0].location.postcode} ${result.results[0].location.state}</h4>
    </div>
    
    
    `;
}

getApi();
