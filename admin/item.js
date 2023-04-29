let addto = {myitems:[
{units:'Unit'},{units:'Bottle'},{units:'Box'},{units:'Ream'},{units:'Kilo Gram'},
]}

let mydata ="";

let selunits =document.getElementById("selunits");
addto.myitems.forEach(function(item){
mydata += `<option value="${item.units}"> ${item.units}</option>`
})

selunits.innerHTML = mydata;
// saveitems();

let myitems = {items:[{itemNmae:"Bond paper",
Description:"A4",
unit:"Ream",
orderpoint:5}]}

// myitems = JSON.parse(localStorage.getItem("myitem"));
function saveitems(){
let txtitem = document.getElementById('txtitem').value;
let txtdescription = document.getElementById('txtdescription').value;
let selunits = document.getElementById('selunits').value;
let txtreorderpoint = document.getElementById('txtreorderpoint').value;

myitems.items.push({itemNmae:txtitem
,Description:txtdescription,
unit:selunits,
orderpoint:txtreorderpoint
});


localStorage.setItem("myitem", JSON.stringify(myitems));
//console.log(data);
load();
}
load();


function load(){

let tblitem = document.getElementById('tblitem');
let newtr = "";

if(myitems.items.length != 1 ){
  myitems = JSON.parse(localStorage.getItem("myitem"));
 

   // console.log(myarr);

} else{
 localStorage.setItem("myitem", JSON.stringify(myitems));
}





// console.log(myarr);
myitems.items.forEach(function(item){
newtr += `<tr>
  <td>${item.itemNmae}</td>
  <td>${item.Description}</td>
  <td>${item.unit}</td>
  <td>${item.orderpoint}</td>
  <td>
    <span class="btn btn-danger">Delete</span></td>
</tr>`;
});

tblitem.innerHTML = newtr;
}


load2();
function load2(){

let tblitem = document.getElementById('tblitem2');
let newtr = "";

// console.log(myarr);
myitems.items.forEach(function(item){
newtr += `<tr class="trrow" id="${item.itemNmae} | ${item.Description}  ">
  <td>${item.itemNmae}</td>
  <td>${item.Description}</td>
  <td>${item.unit}</td>
  <td>${item.orderpoint}</td>

</tr>`;
});

tblitem.innerHTML = newtr;
}

let itemrec = {items:[]};

function saveitemReceive(){
let txtItemname = document.getElementById('txtItemname');
let txtDescription = document.getElementById('txtDescription');
let txtQuantity = document.getElementById('txtQuantity');
if(txtItemname.value === ""){
 alert("Item Name is Required!");
}else if(txtQuantity.value === ""){
  alert("Quantity is Required!");
}else{
      itemrec.items.push({itemname:txtItemname.value,
      description:txtDescription.value,
      quantity:txtQuantity.value
    });
    loaditems();
    txtItemname.textContent = "";
    txtDescription.textContent ="";
  txtQuantity.textContent = "";
}
}

function loaditems(){
  var details = "";
  let tblitems = document.getElementById("tblitems");
  itemrec.items.forEach(function(item,index){
    details += `<tr>
                <td>${item.itemname}</td>
                <td>${item.description}</td>
                <td>${item.quantity}</td> 
                <td><button class="btn btn-danger" onclick="deleteitem('${index}');">Remove</button></td> 
            </tr>`;
  })

  tblitems.innerHTML = details;
}


function deleteitem(index){
  itemrec.items.splice( index, 1);
  loaditems();
}

// Receiving 

let newPo ={myitems:[]};
let newPo1 ={myitems:[]};
newPo = JSON.parse(localStorage.getItem("myReceive"));
let newdeteails = [];
function savetrans(){
let txtsupplier =document.getElementById('txtsupplier');
let txtDr =document.getElementById('txtDr');
let dtpDrDate =document.getElementById('dtpDrDate');
let txtpo =document.getElementById('txtpo');
let dtpPodate =document.getElementById('dtpPodate');
newdeteails.push();
  newPo.myitems.push({txtsupplier:txtsupplier.value,
    txtDr:txtDr.value,
    dtpDrDate:dtpDrDate.value,
    txtpo:txtpo.value,
    dtpPodate:dtpPodate.value,
    details: itemrec.items
  })
 var details = "";
 var tbldel = document.getElementById("tbldel");

//  console.log(newPo.myitems);
  newPo.myitems.forEach(function(item){
 details += `<tr>
              <td>${item.txtsupplier}</td>
              <td>${item.txtDr}</td>
              <td>${item.dtpDrDate}</td>
              <td>${item.txtpo}</td>
              <td>${item.dtpPodate}</td>
              
            </tr>
           
            `;

            item.details.forEach(function(newitem){
              details += `<tr>
              <td colspan="5">
              <table class="table">
                <tr>
                  <td>Item Name</td>
                  <td>Description </td>
                  <td>Quantity</td>
                </tr>
              <tr>
              <td>${newitem.itemname}</td>
              <td>${newitem.description}</td>
              <td>${newitem.quantity}</td>
              </tr>
              </table>

              </td>
             
            </tr>
           
            `;
            })
  })
  tbldel.innerHTML = details;

  localStorage.setItem("myReceive", JSON.stringify(newPo));
}

showReceive();
function showReceive(){
  var details = "";
  var tbldel = document.getElementById("tbldel");
 
 //  console.log(newPo.myitems);
   newPo.myitems.forEach(function(item){
  details += `<tr>
               <td>${item.txtsupplier}</td>
               <td>${item.txtDr}</td>
               <td>${item.dtpDrDate}</td>
               <td>${item.txtpo}</td>
               <td>${item.dtpPodate}</td>
               
             </tr>
            
             `;
 
             item.details.forEach(function(newitem){
               details += `<tr>
               <td colspan="5">
               <table class="table">
                 <tr style="background-color: rgb(166, 204, 241); color: rgb(8, 8, 8);">
                   <td>Item Name</td>
                   <td>Description </td>
                   <td>Quantity</td>
                 </tr>
               <tr>
               <td>${newitem.itemname}</td>
               <td>${newitem.description}</td>
               <td>${newitem.quantity}</td>
               </tr>
               </table>
 
               </td>
              
             </tr>
            
             `;
             })
   })
   tbldel.innerHTML = details;
 

 }


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
  



const records = [
  { artist: 'The Beatles', album: 'Abbey Road', year: 1969 },
  { artist: 'Pink Floyd', album: 'Dark Side of the Moon', year: 1973 },
  { artist: 'Led Zeppelin', album: 'IV', year: 1971 },
  // ... 97 more records
];

// Criteria to search for
const searchCriteria = {
  artist: 'Pink Floyd',
  year: 1973
};

// Filter records based on search criteria
const filteredRecords = records.filter(record => {
  return Object.keys(searchCriteria).every(key => {
    return record[key] === searchCriteria[key];
  });
});

// Output filtered records
// console.log(filteredRecords);

loadEmployee();


newPo1 = JSON.parse(localStorage.getItem("myIssuaance"));
function showIssue(){

  if(newPo1.myitems.length != 1 ){
    newPo1 = JSON.parse(localStorage.getItem("myIssuaance"));
   
 
     // console.log(myarr);
 
 } else{
   localStorage.setItem("myIssuaance", JSON.stringify(newPo1));
 }
  var details = "";
  var tbldel = document.getElementById("tblIssuance");
 
 //  console.log(newPo.myitems);
 newPo1.myitems.forEach(function(item){
  details += `<tr>
               <td>${item.txtfname}</td>
               <td>${item.txtmname}</td>
               <td>${item.txtlname}</td>
               <td>${item.txtcontact}</td>
               <td>${item.txtPosition}</td>
               
             </tr><tr>
             <td colspan="5">
             <table class="table">
                 <tr style="background-color: rgb(166, 204, 241); color: rgb(8, 8, 8);">
                 <td>Item Name</td>
                 <td>Description </td>
                 <td>Quantity</td>
               </tr>
            
             `;
 
             item.details.forEach(function(newitem){
               details += `
               <tr>
               <td>${newitem.itemname}</td>
               <td>${newitem.description}</td>
               <td>${newitem.quantity}</td>
               </tr>
             
            
             `;
             })


             details +=`  </table>
 
             </td>
            
           </tr>`;
   })
   tbldel.innerHTML = details;
 

 }

 function saveIssuance(){
  let  txtfname = document.getElementById("txtfname");
  let  txtmname = document.getElementById("txtmname");
  let  txtlname = document.getElementById("txtlname");
  let  txtcontact = document.getElementById("txtcontact");
  let  txtPosition = document.getElementById("txtPosition");
  alert("Successfully issued");
  // newdeteails.push();
  newPo1.myitems.push({
      txtfname:txtfname.value,
      txtmname:txtmname.value,
      txtlname:txtlname.value,
      txtcontact:txtcontact.value,
      txtPosition:txtPosition.value,
      details: itemrec.items
    })
   var details = "";
   var tbldel = document.getElementById("tblIssuance");
  
  //  console.log(newPo.myitems);
  newPo1.myitems.forEach(function(item){
   details += `<tr>
                <td>${item.txtfname}</td>
                <td>${item.txtmname}</td>
                <td>${item.txtlname}</td>
                <td>${item.txtcontact}</td>
                <td>${item.txtPosition}</td>
                
              </tr><tr>
              <td colspan="5">
              <table class="table">
              <tr style="background-color: rgb(166, 204, 241); color: rgb(8, 8, 8);">
                  <td>Item Name</td>
                  <td>Description </td>
                  <td>Quantity</td>
                </tr>
             
              `;
  
              item.details.forEach(function(newitem){
                details += `
                <tr>
                <td>${newitem.itemname}</td>
                <td>${newitem.description}</td>
                <td>${newitem.quantity}</td>
                </tr>
              
             
              `;
              })


              details +=`  </table>
  
              </td>
             
            </tr>`;
    })
    tbldel.innerHTML = details;
  
    localStorage.setItem("myIssuaance", JSON.stringify(newPo1));
  }

  showIssue();