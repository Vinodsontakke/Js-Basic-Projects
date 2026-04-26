let sampleData = [
  { id:1,name: "Vinod", email: "vinod@gmail.com" },
  { id:2,name: "Rahul", email: "rahul123@gmail.com" },
];



function readData(){
var tableData = document.querySelector(".table_data")
var tableRow = "";

sampleData.map(obj =>{
  tableRow += `<tr>
    <td>${obj.name}</td>
    <td>${obj.email}</td>
    <td>
      <button onclick="{edit(${obj.id})}">edit</button>
      <button onclick="{deleteRow(${obj.id})}">Delete</button>
    </td>
  </tr>`
})
tableData.innerHTML = tableRow;
}



function create(){
  var name = document.querySelector('.name').value;
  var email = document.querySelector('.email').value;
  var obj = {id:3 , name:name, email:email};

  sampleData.push(obj);

  readData();
  document.querySelector(".name").value = "";
  document.querySelector(".email").value = "";
  
}

function edit(id){
  document.querySelector('.create_form').style.display = "none";
  document.querySelector('.update_form').style.display = "block";

  var object = sampleData.find(obj => obj.id === id);

  document.querySelector('.uname').value = object.name;
  document.querySelector('.uemail').value = object.email;
  document.querySelector('.id').value = object.id;
}

function update(){
  var name = document.querySelector('.uname').value;
  var email = document.querySelector('.uemail').value;
  var id = parseInt(document.querySelector('.id').value);

  var index = sampleData.findIndex( d => d.id === id);
  sampleData[index] = {id ,name, email};
  
  document.querySelector('.create_form').style.display = "block";
  document.querySelector('.update_form').style.display = "none";

  readData();
}

function deleteRow(id){
  sampleData = sampleData.filter(d => d.id !== id);
  readData();
} 
