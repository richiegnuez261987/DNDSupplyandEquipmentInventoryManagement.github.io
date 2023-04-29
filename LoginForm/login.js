function login(){
  
const usernameInput = document.getElementById("username").value;
const passwordInput = document.getElementById("password").value;


fetch("../admin/Data/account.json")
  .then(response => response.json())
  .then(data => {



    const searchCriteria = {
      username: usernameInput,
      password: passwordInput
    };
    const filteredRecords = data.users.filter(record => {
      return Object.keys(searchCriteria).every(key => {
        return record[key] === searchCriteria[key];
      });
    });
// console.log(filteredRecords);


    for (const user of data.users) {

      if (user.username === usernameInput && user.password === passwordInput) {
 
     
        if(user.usertype === "Admin"){
            window.location.href = "../admin/home.html";
            sessionStorage.setItem("username", user.username);

        }else
        {
            window.location.href = "../admin/home.html";
        
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