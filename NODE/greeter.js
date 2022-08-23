const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`Hi there, ${arg}`);
}

// $ node greeter.js dawid cj nate
// Hi there, dawid
// Hi there, cj
// Hi there, nate
