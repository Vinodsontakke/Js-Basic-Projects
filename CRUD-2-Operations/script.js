let data = [
  {id:1,name:"vinod",email:"vinod@gmail.com"},
  {id:2,name:"vivek",email:"vivek@gmail.com"}
]

function readAll(){
  localStorage.setItem("Object",JSON.stringify(data));
  var tableData = document.querySelector('.table_data');
  var object = localStorage.getItem("Object");
  var objData = JSON.parse(object);
  var elements = "";

  objData.map(record=>{
    elements +=`<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
            <button onclick="{edit(${record.id})}">Edit</button>
            <button onclick="{deleteRow(${record.id})}">Delete</button>
        </td>
    </tr>`
  })

  tableData.innerHTML = elements;
}

function create(){
  document.querySelector('.create_form').style.display="block";
  document.querySelector('.update_form').style.display="none";
  document.querySelector('.add_div').style.display = "none";
}

function addData(){
  var name = document.querySelector('.name').value;
  var email = document.querySelector('.email').value;

  var newObj = {id:3,name:name,email:email};
  data.push(newObj);

  readAll()
  document.querySelector('.create_form').style.display = "none";
  document.querySelector('.add_div').style.display = "block";
}

function edit(id){
  document.querySelector('.update_form').style.display = "block";
  document.querySelector('.create_form').style.display = "none";
  document.querySelector('.add_div').style.display = "none";

  var obj = data.find(rec => rec.id === id);

  document.querySelector('.uname').value = obj.name;
  document.querySelector('.uemail').value = obj.email;
  document.querySelector('.id').value = obj.id;

}

function update(){

  var id = parseInt(document.querySelector('.id').value);
  var name = document.querySelector('.uname').value ;
  var email = document.querySelector('.uemail').value ;

  var index = data.findIndex(rec => rec.id === id);
  data[index] = {id,name,email};

  readAll();
  document.querySelector('.update_form').style.display = "none";
  document.querySelector('.add_div').style.display = "block";

}

function deleteRow(id){
  data = data.filter(rec => rec.id !== id);
  readAll();
}

