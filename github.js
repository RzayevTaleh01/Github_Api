class Github {
  constructor() {
    this.url = "https://api.github.com/users/";
  }
  async getGithubData(username) {
    //The value will be sent from nameInput
    const responseUser = await fetch(this.url + username);
     // like 'users/RzayevTaleh01'

     const responseRepo = await fetch(this.url + username + "/repos")
     // like 'url/users/RzayevTaleh01/repos'

     //data will be added these variables
     const userData = await responseUser.json();
     const repoData = await responseRepo.json();

     //return like object
     return{
           user:userData,
           repo:repoData
     }

  }
}
