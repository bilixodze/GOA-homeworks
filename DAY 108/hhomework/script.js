document.getElementById('search-btn').addEventListener('click', function () {
    const username = document.getElementById('username').value.trim();
  
    // Check if input is not empty
    if (username === "") {
      alert("Please enter a GitHub username.");
      return;
    }
  
    // Fetch GitHub user data
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then(data => {
        // Display user info
        const userInfo = document.getElementById('user-info');
        userInfo.innerHTML = `
          <div class="profile">
            <img src="${data.avatar_url}" alt="${data.login}'s avatar">
            <h2>${data.login}</h2>
            <p>${data.bio || "No bio available"}</p>
            <p>Public Repositories: ${data.public_repos}</p>
            <a href="${data.html_url}" target="_blank">Visit GitHub Profile</a>
          </div>
        `;
      })
      .catch(error => {
        // Display error message if user not found
        document.getElementById('user-info').innerHTML = `<p class="error">${error.message}</p>`;
      });
  });
  