var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li"); // creates an element "li"

    li.appendChild(document.createTextNode(input.value));
    // makes text from input field the li text
    ul.appendChild(li) //adds the li to the ul
    input.value = ""; // reset text input field

    //start strikethrough
    //because its in the function, it only adds it for new items
    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);
    //end strikethrough

    //start and delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteListItem);
    //end add delete button

    //add class delete(display: none)
    function deleteListItem() {
        li.classList.add("delete");
    }
    //end add class delete

}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) { // looks to see if you hit enter/return
    //13 is the enter key's keycode
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);