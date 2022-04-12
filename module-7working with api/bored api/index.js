// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((Response) => Response.json())
//   .then(
//     (data) =>
//       (document.getElementById(
//         "img"
//       ).innerHTML = `<img src="${data.message}" alt="">`)
//   );

let btnClick = document.getElementById("btn");
let writeText = document.getElementById("p");

let title = document.getElementById("title");
btnClick.addEventListener("click", function () {
  fetch("http://www.boredapi.com/api/activity/")
    .then((Response) => Response.json())
    .then(
      (data) => (
        (writeText.innerText = data.activity),
        (title.textContent = "🙂 Happy Bot 🙂"),
        document.body.classList.add("fun")
      )
    );
});
