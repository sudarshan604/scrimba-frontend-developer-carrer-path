// fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((response) => response.json())
//   .then((data) => console.log(data[0].name));

fetch("https://jsonplaceholder.typicode.com/todos/", { method: "GET" })
  .then((response) => response.json())
  .then((data) => console.log(data));
