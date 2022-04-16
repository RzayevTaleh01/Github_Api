class Storage{
      //get all user from storage
      static getSearchedUserFromStorage(){

            let users;
            if(localStorage.getItem("searched")=== null){
                  users = [];
            }
            else{
                  users = JSON.parse(localStorage.getItem("searched"));
            }
            return users;

      }

      //add User to storage
      static addSearchedUserToStorage(username){
            let users = this.getSearchedUserFromStorage();
            //add if the array does not have this username
            if(users.indexOf(username) === -1){
                  users.push(username)
            }
            localStorage.setItem("searched",JSON.stringify(users));
      }

      //clear all users from storage
      static clearAllSearchedUsersFromStorage(){
            localStorage.removeItem("searched");
      }
}