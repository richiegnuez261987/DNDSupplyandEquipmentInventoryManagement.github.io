
let myitems = {items:[
    {
        txtfname:"Richie",
txtmname:"Gwapo",
txtlname:"Nuez",
txtcontact:"0101010101",
txtPosition:"IT"
    },
  ]}
  

//  localStorage.removeItem("myemployee");
  

  function saveemployee(){
    let txtfname = document.getElementById("txtfname");
    let txtmname = document.getElementById("txtmname");
    let txtlname = document.getElementById("txtlname");
    let txtcontact = document.getElementById("txtcontact");
    let txtPosition = document.getElementById("txtPosition");
 
    myitems.items.push({
        txtfname:txtfname.value,
        txtmname:txtmname.value,
        txtlname:txtlname.value,
        txtcontact:txtcontact.value,
        txtPosition:txtPosition.value
    });

  
    
    localStorage.setItem("myemployee", JSON.stringify(myitems));
     load();
     //console.log(data);

  }
   load();
  function load(){
  
    let tblitem = document.getElementById('tblemployee');
    let newtr = "";
    if(myitems.items.length != 1 ){
   myitems = JSON.parse(localStorage.getItem("myemployee"));
  

    // console.log(myarr);

} else{
  localStorage.setItem("myemployee", JSON.stringify(myitems));
}


myitems.items.forEach(function(item){
  newtr +=  `<tr>
  
  <td>${item.txtfname}</td>
  <td>${item.txtmname}</td>
  <td>${item.txtlname}</td>
  <td>${item.txtcontact}</td>
  <td>${item.txtPosition}</td>

  <td>
  <span class="btn btn-danger">Delete</span></td>
  </tr>`;
});


tblitem.innerHTML = newtr; 

  }