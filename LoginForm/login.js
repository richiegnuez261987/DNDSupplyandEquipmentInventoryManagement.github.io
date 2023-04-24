function login(){
  
const usernameInput = document.getElementById("username").value;
const passwordInput = document.getElementById("password").value;


fetch("../admin/Data/account.json")
  .then(response => response.json())
  .then(data => {

    for (const user of data.users) {
      if (user.username === usernameInput && user.password === passwordInput) {
 
    
        if(user.usertype === "Admin"){
            window.location.href = "../admin/home.html";
            sessionStorage.setItem("username", user.username);

        }else
        {
            window.location.href = "user.html";
        
            sessionStorage.setItem("username", user.username);

        }
        break;
      } else {
       
        alert("Incorrect username or password. Please try again.");
        break;
      }
    }
  })
  .catch(error => console.error(error));
}