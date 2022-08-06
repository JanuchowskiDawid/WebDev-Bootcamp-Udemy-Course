let toDoList = [];
let item = null;
let choice = prompt("What would you like to do?");
while (choice !== "quit") {
    switch (choice) {
        case "new":
            item = prompt("What would you like to add?");
            toDoList.push(item);
            console.log(item);
            choice = prompt("Item added! What to do next?");
            break;
        case "list":
            for (let obj of Object.entries(toDoList)) { console.log(obj) };
            choice = prompt("Here is your list! What to do next?");
            break;
        case "delete":
            item = prompt("What index would you like to delete?");
            toDoList.splice(item, 1);
            console.log("item deleted");
            choice = prompt("Item deleted! What to do next?");
            break;
        default:
            choice = prompt("I don't know that command, try again");
            break;
    }
}
alert("Bye");