const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {
  githubForm.addEventListener("submit", getData);
  clearLastUsers.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllSearched);
}

//Get data

function getData(e) {
  let username = nameInput.value.trim();

  if (username === "") {
    alert("Username will not be empty!");
  } else {
    github
      .getGithubData(username)
      .then((response) => {
        if (response.user.message === "Not Found") {
          ui.showError("User is not found!")
        } else {
              ui.showUserInfo(response.user)
        }
      })
      .catch((err) => ui.showError(err));
  }
  ui.clearInput();
  e.preventDefault();

}


//Clear all searched
function clearAllSearched() {}

//Get All Searched from local storage
function getAllSearched() {}
