const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleForm);

function handleForm(event) {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);
  }
  formEl.reset();
}
