let data = [
  {id:1,todo:"study",done:false},
  {id:2,todo:"read",done:false},
  {id:3,todo:"play",done:false}
]

function display(){
  var ulList = document.querySelector('.ul_list');
  var list ="";

  data.map(d=>{
    list +=`<li><span class="${d.done ? 'check' : '' }" onclick={update(${d.id})}>${d.todo}</span><span onclick={remove(${d.id})} class="close">X</span></li>`
  })
  ulList.innerHTML = list;
}

function update(id){
  var targetData = data.find(d => d.id === id);
  var index = data.findIndex(d => d.id === id);
  data[index] ={
    id:targetData.id, 
    todo:targetData.todo, 
    done:!targetData.done
  };
  display();
}

function remove(id){
  var newData = data.filter(d => d.id !== id)
  data = newData;
  display();
}

function add(){
  var Activity = document.querySelector('.activity').value;
  var newObj = {id:4,todo:Activity, done:false};
  data.push(newObj);
  display();
  document.querySelector('.activity').value = "";
}