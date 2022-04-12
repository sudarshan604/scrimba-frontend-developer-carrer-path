var blogstore = document.getElementById("container");

let postArr = [];

function renderPost() {
  blogstore.innerHTML = " ";
  for (let i = 0; i < postArr.length; i++) {
    blogstore.innerHTML += `<h2>${postArr[i].title}</h2>
   <p> ${postArr[i].body}</P>
   <hr/>
  `;
  }
}

fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    postArr = data.slice(0, 5);
    renderPost();
  });

let blog = document.getElementById("blog-contain");

blog.addEventListener("submit", (event) => {
  event.preventDefault();

  let formdata = new FormData(event.target);

  let title = formdata.get("title");
  let postbody = formdata.get("body");

  let body = {
    title: title,
    body: postbody,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
    },
  };

  fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then((response) => response.json())
    .then((data) => {
      postArr.unshift(data);
      renderPost();
      blog.reset();
    });
});
