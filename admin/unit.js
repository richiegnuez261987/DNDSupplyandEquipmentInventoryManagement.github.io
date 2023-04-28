
let myitems = {items:[
    {units:'Unit'},{units:'Bottle'},{units:'Box'},{units:'Ream'},{units:'Kilo Gram'},
  ]}
  


  
   myitems = JSON.parse(localStorage.getItem("myunit"));
  function saveitems(){
    let txtUnit = document.getElementById('txtUnit').value;
 
  
    myitems.items.push({units:txtUnit 
    
    });
    load();
   
    
    localStorage.setItem("myunit", JSON.stringify(myitems));
  //console.log(data);
   
  }
  load();
  function load(){
  
    let tblitem = document.getElementById('tblunits');
    let newtr = "";
  
  
    // console.log(myarr);
    myitems.items.forEach(function(item){
      newtr +=  `<tr>
      <td>${item.units}</td>
    
      <td>
      <span class="btn btn-danger">Delete</span></td>
      </tr>`;
    });
  
  
  tblitem.innerHTML = newtr;
  }