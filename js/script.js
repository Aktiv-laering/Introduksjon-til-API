/* 


Denne koden henter inn EN person fra API'et til randomuser


*/

// const url = "https://randomuser.me/api";
// const container = document.querySelector(".container");

// async function getApi() {
//     const response = await fetch(url);
//     const svar = await response.json();

//     console.log(svar.results[0]);

//     container.innerHTML = `

//     <div>
//         <img src=${svar.results[0].picture.large} height="200"/>
//         <h1>${svar.results[0].name.first} ${svar.results[0].name.last}</h1>
//         <h3>${svar.results[0].email}</h3>
//     </div>

//     `;
// }

// getApi();

/* 


Hente ut 10 personer fra API'et til nokeynoshade 


*/

// const url = "http://www.nokeynoshade.party/api/queens?limit=50";

// const resultContainer = document.querySelector(".container");

// async function getProducts() {
//     const response = await fetch(url);
//     const svar = await response.json();

//     console.log(svar);

//     resultContainer.innerHTML = "";

//     for (let i = 0; i < 10; i++) {
//         console.log(svar[i].name);
//         resultContainer.innerHTML += `
//         <img src="${svar[i].image_url}" height="200" alt="" />
//         <h1>${svar[i].name}</h1>
//         <p>${svar[i].quote}</p>
//         `;
//     }
// }

// getProducts();
