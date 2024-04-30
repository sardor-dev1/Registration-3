const form = document.querySelector(".form");
const inputName = document.querySelector(".input__name");
const inputUser = document.querySelector(".input__username");
const inputEmail = document.querySelector(".input__email");
const inputphone = document.querySelector(".input__phoneNum");
const inputpasword = document.querySelector(".input__pasword");
const inputConf = document.querySelector(".input__confirm");
const table = document.querySelector("table");

form.addEventListener("submit", (element) => {
  element.preventDefault();

  const Name = document.createElement("td");
  Name.innerHTML = `${inputName.value}`;
  Name.className = "table__dawn";

  const User = document.createElement("td");
  User.innerHTML = `${inputUser.value}`;
  User.className = "table__dawn";

  const Email = document.createElement("td");
  Email.innerHTML = `<a href="${inputEmail.value}">${inputEmail.value}</a>`;
  Email.className = "table__dawn";

  const phone = document.createElement("td");
  phone.innerHTML = `<a href="tel:${inputphone.value}">${inputphone.value}</a>`;
  phone.className = "table__dawn";

  const password1 = document.createElement("td");
  password1.innerHTML = `${inputpasword.value}`;
  password1.className = "table__dawn";

  const password2 = document.createElement("td");
  password2.innerHTML = `${inputConf.value}`;
  password2.className = "table__dawn";

  if (!inputName.value.trim()) {
    return alert("to'liq kiriting");
  }

  if (inputpasword.value !== inputConf.value) {
    return alert("Parol kiritishda xatolik mavjud");
  }
  const tr = document.createElement("tr");
  table.appendChild(tr);
  alert("Malumot qoshilsinmi");

  tr.appendChild(Name);
  tr.appendChild(User);
  tr.appendChild(Email);
  tr.appendChild(phone);
  tr.appendChild(password1);
  tr.appendChild(password2);

  inputName.value = "";
  inputUser.value = "";
  inputEmail.value = "";
  inputphone.value = "";
  inputpasword.value = "";
  inputConf.value = "";
});
