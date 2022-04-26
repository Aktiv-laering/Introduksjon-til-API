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

//     for (let i = 0; i < 5; i++) {
//         console.log(svar[i].name);
//         resultContainer.innerHTML += `
//         <img src="${svar[i].image_url}" height="200" alt="" />
//         <h1>${svar[i].name}</h1>
//         <p>${svar[i].quote}</p>
//         `;
//     }
// }

// getProducts();

/* 


Hente værdata


*/

// const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=";
// const container = document.querySelector(".container");

// async function getWeather() {
//     const options = {
//         method: "GET",
//         headers: {
//             "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
//             "X-RapidAPI-Key": "afe0dc92f5msh7ad62a30b14e5a9p1a5589jsne11e490d9b55",
//         },
//     };

//     const response = await fetch(url, options);
//     const svar = await response.json();

//     console.log(svar);

//     container.innerHTML = `

//     <h1>${svar.location.name}</h1>
//     <div class="flex">
//     <span>${svar.current.temp_c}&deg;C</span>
//     <img src=${svar.current.condition.icon} height="100"/>
//     <span>Føles som ${svar.current.feelslike_c}&deg;C</span>

//     </div>

//     `;
// }

// getWeather();

/*

Hente værdata med søkefelt

*/
