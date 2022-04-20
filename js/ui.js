class UI {
  constructor() {
    this.profileDiv = document.querySelector(".profile");
    this.repoDiv = document.querySelector(".r-1 article");
    this.lastUsers = document.getElementById("last-users");
    this.inputField = document.getElementById("githubname");
    this.formArticle = document.querySelector(".form-article");
  }
  clearInput() {
    this.inputField.value = "";
  }
  showUserInfo(user) {
    this.profileDiv.innerHTML = `
    <div class="info">Profile</div>
    <section class="p-1">
    <div class="img container">
      <img
        src="${user.avatar_url}"
        alt=""
      />
    </div>
    <h1>${user.name}</h1>
    <p>${user.bio}</p>
    <div class="count container">
      <div class="follower-count">
        <p>${user.followers}</p>
        <p>Follower</p>
      </div>
      <div class="following-count">
        <p>${user.following}</p>
        <p>Following</p>
      </div>
      <div class="repo-count">
        <p>${user.public_repos}</p>
        <p>Repositories</p>
      </div>
    </div>
  </section>
  <section class="p-2 container">
    <ul>
      <li>
        <i class="fa-solid fa-user"></i>
        <p>${user.login}</p>
      </li>
      <li>
        <i class="fa-solid fa-envelope"></i>
        <p>${user.email}</p>
      </li>
      <li>
        <i class="fa-solid fa-location-dot"></i>
        <p>${user.location}</p>
      </li>
    </ul>
  </section>   `;
  }
  showRepoInfo(repos) {
    this.repoDiv.innerHTML = "";
    if (repos.length == 0) {
      this.repoDiv.innerHTML = `<p class="empty-repo">${repos.login} doesn't have any public repositories yet.</p>`;
    } else {
      let random = Math.floor(Math.random() * repos.length);
      console.log("random: " + random);
      for (let i = 0; i < 4; i++) {
        let index = i + random;
        console.log("index: " + index);
        this.repoDiv.innerHTML += ` <div class="repo-item">
      <div class="repo-head">
        <h1><a href="${repos[index].html_url}">${repos[index].name}</a></h1>
        <p>${repos[index].description}</p>
      </div>

      <div class="repo-icons">
        <ul>
          <li>
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-star mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
              ></path>
            </svg>
            <strong>${repos[index].stargazers_count}</strong>
          </li>
          <li>
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-eye mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"
              ></path>
            </svg>
            <strong>${repos[index].watchers_count}</strong>
          </li>
          <li>
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-repo-forked mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
              ></path>
            </svg>
            <strong>${repos[index].forks_count}</strong>
          </li>
        </ul>
      </div>
    </div>`;
      }
      console.log(repos.length);
    }
  }

  //write the error messages to ui
  showError(message) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.className = "error-message";
    p.textContent = message;
    div.appendChild(p);
    if(message != "TypeError: Cannot read properties of undefined (reading 'html_url')"){
    this.formArticle.appendChild(div);}
    setTimeout(() => {
      div.remove();
    }, 9000);
  }

  addSearchedUserToUI(username, x) {
    //send username getGithubData function for username
    //send (true) value getAllSearched function for x
    let users = Storage.getSearchedUserFromStorage();
    if (users.indexOf(username) === -1 || x == true) {
      // <li>
      //   <a class="user-link" href="#">
      //     <p class="user-link">RzayevTaleh01</p>
      //   </a>
      //   <a href="#">
      //     <ion-icon
      //       name="close-outline"
      //     ></ion-icon>
      //   </a>
      // </li>;
      let li = document.createElement("li");
      let a1 = document.createElement("a");
      a1.className = "user-link";
      a1.setAttribute("href", "#");
      let p = document.createElement("p");
      p.className = "user-link";
      p.textContent = username;
      let a = document.createElement("a");
      a.setAttribute("href", "#");
      let icon = document.createElement("ion-icon");
      icon.setAttribute("name", "close-outline");
      li.appendChild(a1);
      a1.appendChild(p);
      li.appendChild(a);
      a.appendChild(icon);
      this.lastUsers.appendChild(li);
    }
  }

  clearAllSearchedFromUI() {
    while (this.lastUsers.firstElementChild) {
      this.lastUsers.firstElementChild.remove();
    }
  }
}
