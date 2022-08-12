const req = new XMLHttpRequest();

req.onload = function () {
    console.log("succes");
    const data = JSON.parse(this.responseText);
    console.log(data);
}

req.onerror = function () {
    console.log("error");
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1/");
req.send();

