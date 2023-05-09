function loadStudent() {
  fetch("/data/myInfo.json")
  .then(response => response.json())
  .then(data => {
      let myInfo
       = data.student;
      localStorage.setItem("student", JSON.stringify(myInfo));
  });
}

function loadHeader() {
  const header = document.querySelector("header");
  const student = JSON.parse(localStorage.getItem("student"));
  header.innerHTML = `<h1>Winter 2023 Assignment #2 ${student.name}</br>`;

}

function loadFooter() {
  const footer = document.querySelector("footer");
  const student = JSON.parse(localStorage.getItem("student"));
  footer.innerHTML = `</br><h4>My Login: ${student.login} / My ID: ${student.studentId} / My Program: ${student.program}</h4>`;
}

function loadCountries() {
  const selectBox = document.getElementById("selectBox");
  
  fetch("data/countries.json")
    .then(response => response.json())
    .then(data => {
      let options = "";
      data.forEach(country => {
        options += `<option value="${country.code}">${country.name}</option>`;
      });
      selectBox.innerHTML += options;
    })
    .catch(error => console.log(error));
}




function loadAll() {
  loadStudent();
  loadHeader();
  loadFooter();
  loadCountries();
}
