let item=prompt("Enter Items");
addListItem(item);

function addListItem(text) {
    // get the unordered list element
    let list = document.querySelector('ul');
  
    // create a new list item element
    let listItem = document.createElement('li');
  
    // set the text content of the new list item element
    listItem.textContent = text;
  
    // add the new list item element to the unordered list
    list.appendChild(listItem);
  }