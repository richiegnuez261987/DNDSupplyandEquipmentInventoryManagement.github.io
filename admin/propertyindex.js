
function loadEmployee(){
    let newepm = {item:[]}
    let tblitem = document.getElementById('tblemployee2');
    let newtr = "";
   
      newepm = JSON.parse(localStorage.getItem("myemployee"));
  
  
    // console.log(myarr);
  
  
  
  newepm.items.forEach(function(item){
  
  newtr +=  `<tr class="tremployee" id="${item.txtfname}|${item.txtmname}|${item.txtlname}|${item.txtcontact}|${item.txtPosition}">
  
  <td>${item.txtfname}</td>
  <td>${item.txtmname}</td>
  <td>${item.txtlname}</td>
  <td>${item.txtcontact}</td>
  <td>${item.txtPosition}</td>
  
  
  </tr>`;
  });
  
  
  tblitem.innerHTML = newtr; 
  
  }
  loadEmployee();