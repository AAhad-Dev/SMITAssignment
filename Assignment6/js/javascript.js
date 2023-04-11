function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

let myObject = { name: "Ahad", age: 20};
saveToLocalStorage("myKey", myObject);