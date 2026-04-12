async  function  getData(){
  
try{
  const data = await fetch('https://dummyjson.com/users');
  const formedData = await data.json();
  
  let tr = "";
  formedData.users.forEach(function (user){
    tr +=`<tr>
          <td><img src="${user.image}"/></td>
          <td>${user.firstName} ${user.maidenName} ${user.lastName}</td>
          <td>${user.gender}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
        </tr>`;
  });
  document.getElementById("tableBody").innerHTML = tr;
  }catch (error){
    console.error("Error fetching data:", error);
  }
  
}