let userInformation = document.getElementById("Email-Collector");

userInformation.addEventListener("submit", (event) => {
  event.preventDefault();

  let formObject = new FormData(event.target);

  let firstName = formObject.get("firstName");

  let mainContent = document.getElementById("updateB");

  let updateData = `
  <h2>congratulation ${firstName}</h2>
    <p>you're on your way to becoming a BBQ master</P>           
      <p class="fine-print">
    We'll never share your information without your permission
  </p>
      `;

  mainContent.innerHTML = updateData;
});
