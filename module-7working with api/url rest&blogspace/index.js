// fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((response) => response.json())
//   .then((data) => console.log(data[0].name));

fetch("https://jsonplaceholder.typicode.com/todos/", {
  method: "POST",
  body: JSON.stringify({
    title: "name",
    completed: false,
  }),
  headers: { "Content-type": "application/json;charset=UTF-8" },
})
  .then((Response) => Response.json())
  .then((data) => console.log(data));
