
function displayPetCards(){
    const petsDiv = document.getElementById("petTable");
    petsDiv.innerHTML=``;
    for(let i = 0; i < petSalon.pets.length; i++) {
    let pet=petSalon.pets[i];
let tmp = `
      <div class="pet">
            <p> Name : ${pet.name} </p>
            <p> Gender : ${pet.gender} </p>
           <p> Type : ${pet.type} </p>
           <p> Owner : ${pet.owner} </p>
            <p> Contact : ${pet.phone} </p>
           <p> Service : ${pet.service} </p>
       </div>
    `;
  petsDiv.innerHTML+=tmp;   
   }    
}

function displayPetTable(){
    const petTable = document.getElementById("petTable");
    petTable.innerHTML=``;
    for(let i = 0; i < petSalon.pets.length; i++) {
        let pet=petSalon.pets[i];
    let tr=`
    <tr id="${pet.id}">
        <td>${pet.name} </td>
        <td>${pet.age} </td>
        <td>${pet.gender} </td>
        <td>${pet.type} </td>
        <td>${pet.owner} </td>
        <td>${pet.phone} </td>
        <td>${pet.service} </td>
        <td><button onclick="deletePet(${pet.id})">🗑️</button></td>
    </tr>
    `
    petTable.innerHTML+=tr;
    }
}