


const myValue = sessionStorage.getItem("username");
// alert(myValue); // Output: "myValue"

setMenu();
checksession();
function checksession(){
    if(myValue === ""){
        window.location.href = "../LoginForm/login.html";
    }
}
function setMenu(){



 var mymenu = document.getElementById("mymenuSetup");
 var setupmenu =  document.getElementById("setupmenu");

var adminTransaction = document.getElementById("adminTransaction");
var adminreport = document.getElementById("adminreport");
var ddmenutransaction = document.getElementById("ddmenutransaction");
var ddmenureport = document.getElementById("ddmenureport");
fetch("../admin/Data/menus.json")
.then(response => response.json())
.then(data => {
    var menudetails = "";
  for (const user of data.Admintransaction) {


    menudetails +=   `<li><a href="${user.link}" class="dropdown-item">  <i class="${user.icons}"></i> &nbsp;&nbsp; ${user.menu}</a></li>`;
  }


  mymenu.innerHTML = menudetails;
  setupmenu.innerHTML = menudetails;
})
.catch(error => console.error(error));

fetch("../admin/Data/menus.json")
.then(response => response.json())
.then(data => {
    var menudetails = "";
  for (const user of data.AdminSetup) {


    menudetails +=   `<li><a href="${user.link}" class="dropdown-item">  <i class="${user.icons}"></i> &nbsp;&nbsp; ${user.menu}</a></li>`;
  }


  adminTransaction.innerHTML = menudetails;
  ddmenutransaction.innerHTML = menudetails;
})
.catch(error => console.error(error));

fetch("../admin/Data/menus.json")
.then(response => response.json())
.then(data => {
    var menudetails = "";
  for (const user of data.AdminReports) {


    menudetails +=   `<li><a href="${user.link}" class="dropdown-item">  <i class="${user.icons}"></i> &nbsp;&nbsp; ${user.menu}</a></li>`;
  }


  adminreport.innerHTML = menudetails;
  ddmenureport.innerHTML = menudetails;
})
.catch(error => console.error(error));

}

showAccounts();
function showAccounts(){
    var tblaccount = document.getElementById("tblaccount");
    fetch("../admin/Data/account.json")
.then(response => response.json())
.then(data => {
    var menudetails = "";
  for (const user of data.users) {


    menudetails +=   `<tr><td>${user.username}</td>
                        <td>${user.completename}</td>
                        <td><span class="btn btn-warning">Edit</span>
                        <span class="btn btn-danger">Delete</span></td></tr>`;
  }


  tblaccount.innerHTML = menudetails;

})
.catch(error => console.error(error));
}
