// fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((response) => response.json())
//   .then((data) => console.log(data[0].name));

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Kathmandu, NP&appid=ad40b689bbc270059e7ca074b91d0509"
)
  .then((Response) => Response.json())
  .then((data) => console.log(data));
