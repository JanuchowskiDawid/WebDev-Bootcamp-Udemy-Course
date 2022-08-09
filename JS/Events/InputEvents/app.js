const formCat = document.querySelector('#catName');
const inputElement = document.querySelector('input');
const namesList = document.querySelector('#namesList');

formCat.addEventListener("submit", function (e) {
    e.preventDefault();
    const listItem = document.createElement('LI');
    listItem.innerText = inputElement.value;
    namesList.append(listItem);
    inputElement.value = "";
})

