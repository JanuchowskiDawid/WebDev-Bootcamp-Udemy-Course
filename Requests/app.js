// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("succes");
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// }

// req.onerror = function () {
//     console.log("error");
//     console.log(this);
// }

// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();
// fetch("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log("RESOLVED", res);
//         return res.json();
//     })
//     .then((data => {
//         console.log(data.name);
//         return fetch("https://swapi.dev/api/people/2/")
//     }))
//     .then(res => {
//         return res.json();
//     })
//     .then((data => {
//         console.log("SECOUND REQUEST RESOLVED!");
//         console.log(data.name);
//     }))
//     .catch((e) => {
//         console.log("ERROR", e);
//     })

const loadStarWarsPPL = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data.name);
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2.name);
    } catch (e) {
        console.log(e);
    }
}
loadStarWarsPPL();