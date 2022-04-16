const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users")
const github = new Github();

eventListeners();

function eventListeners() {
      githubForm.addEventListener("submit",getData);
      clearLastUsers.addEventListener("click",clearAllSearched);
      document.addEventListener("DOMContentLoaded",getAllSearched);
}

//Get data

function getData(e) {
      let username = nameInput.value.trim();
      if(username === ''){
            alert("Username will not be empty!")
      }else{
            github.getGithubData(username)
            .then(response => console.log(response))
            .catch(err => console.log(err))
      }
      e.preventDefault();      
}

//Clear all searched
function clearAllSearched(){
}


//Get All Searched from local storage
function getAllSearched(){

}