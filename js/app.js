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
  lastUsers.addEventListener("click", userLinkGetData);
}

//Get data
function getData(e) {
  let username = nameInput.value.trim();

  if (username === "") {
    alert("Username will not be empty!");
  } else {
    getGithubData(username);
  }
  ui.clearInput();
  e.preventDefault();
}
function getGithubData(username) {
  github
    .getGithubData(username)
    .then((response) => {
      if (response.user.message === "Not Found") {
        ui.showError("User is not found!");
      } else {
        ui.addSearchedUserToUI(username);
        Storage.addSearchedUserToStorage(username);
        ui.showUserInfo(response.user);
        ui.showRepoInfo(response.repo,username);
      }
    })
    .catch((err) => ui.showError(err));
}
function userLinkGetData(e) {
  e.preventDefault();
  if (e.target.className === "user-link") {
    getGithubData(e.target.innerText);
  }
}
//Clear all searched
function clearAllSearched() {
  Storage.clearAllSearchedUsersFromStorage();
  ui.clearAllSearchedFromUI();
}

//Get All Searched from local storage
function getAllSearched() {
  let users = Storage.getSearchedUserFromStorage();
  users.forEach((user) => {
    console.log(user);
    ui.addSearchedUserToUI(user, true);
  });
}
