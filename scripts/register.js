
let petSalon ={
    name:"The Pet Palace",
    phoneNumber:555-555-5555,
    address:{
      street:"123 Robinson Rd",
        city: "Jackson",
        state:"Mississippi",

},
pet:[]       
  } 

function pet(name,age,gender,type,service,owner,contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.type=type;
    this.service=service;
    this.owner=owner;
    this.phone=contactPhone;
}

let nameInput=document.getElementById("petName");
let ageInput=document.getElementById("petAge");
let genderInput=document.getElementById("petGender");
let typeInput=document.getElementById("petType");
let ownerInput=document.getElementById("petOwner");
let phoneInput=document.getElementById("ownerPhone");
let serviceSelect = document.getElementById("petService"); 


function register(){
  console.log(nameInput.value,ageInput.value,genderInput.value,typeInput.value,serviceSelect.value,ownerInput.value,phoneInput.value);
  document.getElementById(petInfo).innerHTML=`  
 <p> Name : ${pet.name} </p>
 <p> Age : ${pet.age} </p>
 <p> Gender : ${pet.gender} </p>
 <p> Type : ${pet.type} </p>
 <p> Owner : ${pet.owner} </p>
 <p> Contact : ${pet.phone} </p>
 <p> Service : ${pet.service} </p>
 `;
  let thePet = newPet(nameInput.value,ageInput.value,genderInput.value,typeInput.value,serviceSelect.value,ownerInput.value,phoneInput.value);
 
  clearInputs();
  
function isValid(thePet){
  let valid= true;
  if(nameInput.value == "" || aPet.service==""){
    valid=false;
  }
  return valid;
}



  function displayPet(){
    const petsDiv = document.getElementById("pets");
    petsDiv.innerHTML=``;
    for(let i = 0; i < petSalon.pet.length; i++) {
        let pet=petSalon.pet[i];
        let tmp = `
      document.getElementById(petInfo).innerHTML=`  
            <p> Name : ${pet.name} </p>
            <p> Age : ${pet.age} </p>
            <p> Gender : ${pet.gender} </p>
            <p> Type : ${pet.type} </p>
            <p> Owner : ${pet.owner} </p>
            <p> Contact : ${pet.phone} </p>
            <p> Service : ${pet.service} </p>
            displayPet();
        `;
      petsDiv.innerHTML+=tmp;    
    }    
}

function displayPetTable(){}


 if(isValid(thePet)){
 petSalon.pet.push(thePet);
 console.log(petSalon.pet);
  

 }else{
  alert("Please add a necassary information.");
 }
  
}

function clearInputs(){
  nameInput.value="";
  ageInput.value="";
  genderInput.value="";
  typeInput.value="";
  serviceSelect.value="";
  ownerInput.value="";
  phoneInput.value="";
}

function init(){
  console.log("Registering...");
  let jr = new Pet("Jr.","6","male","cat","9dayCheckin","Douglas","321-987-9876");
  let blue = new Pet("Blue","2","male","dog","daycare","Tammy","123-456-1234");
  let mini = new Pet("Mini","2","female","cat","nailtrim","TJ","123-456-1278");
  petSalon.pet.push(blue);
  petSalon.pet.push(jr);
  petSalon.pet.push(mini);

  displayPetTable();
}


window.onload=init;