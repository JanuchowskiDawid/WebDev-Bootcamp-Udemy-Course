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
fetch("https://swapi.dev/api/people/1/")
    .then(res => {
        console.log("RESOLVED", res);
        return res.json();
    })
    .then((data => {
        console.log(data.name);
        return fetch("https://swapi.dev/api/people/2/")
    }))
    .then(res => {
        return res.json();
    })
    .then((data => {
        console.log("SECOUND REQUEST RESOLVED!");
        console.log(data.name);
    }))
    .catch((e) => {
        console.log("ERROR", e);
    })