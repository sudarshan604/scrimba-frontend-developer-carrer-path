var blogstore = document.getElementById("container");

fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    let postArr = data.slice(0, 10);

    for (let i = 0; i < postArr.length; i++) {
      blogstore.innerHTML += `<h2>${postArr[i].title}</h2>
       <p> ${postArr[i].body}</P>
       <hr/>
      `;
    }
  });

let blog = document.getElementById("blog-contain");

blog.addEventListener("submit", (event) => {
  event.preventDefault();

  let formdata = new FormData(event.target);

  let title = formdata.get("title");
  let titleDes = formdata.get("body");

  let body = {
    title: title,
    description: titleDes,
  };

  console.log(body);
});
