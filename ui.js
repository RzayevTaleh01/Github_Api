class UI{
      constructor(){
            this.profileDiv = document.getElementById("profile");
            this.repoDiv = document.getElementById("repos");
            this.lastUsers = document.getElementById("last-users")
            this.inputField = document.getElementById("githubname");
      }
      clearInput(){
            this.inputField.value = "";
      }
}