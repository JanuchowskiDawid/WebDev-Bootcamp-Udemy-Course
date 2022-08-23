const fs = require("fs");
const { argv } = require("process");
const name = process.argv[2] || 'Projekct';
// fs.mkdir('Dog', { recursive: true }, (err) => {
//     console.log("In the callback");
//     if (err) throw err;
// });
try {
    fs.mkdirSync(name);
    fs.writeFileSync(`${name}/index.html`, '');
    fs.writeFileSync(`${name}/app.js`, '');
    fs.writeFileSync(`${name}/app.css`, '');
}
catch (e) {
    console.log('ERROR:');
    console.log(e);
}
//output
// C:\Users\MMAlpa\Documents\WEB DEVELOPER BOOTCAMP\NODE>node boilerplate.js project3
// created folder with 3 files