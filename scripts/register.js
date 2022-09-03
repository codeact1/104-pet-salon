
let petSalon ={
    name:"The Pet Palace",
    phoneNumber:555-555-5555,
    address:{
      street:"123 Robinson Rd",
        city: "Jackson",
        state:"Mississippi",

},
pets:[]       
  } 

function Pet(name,age,gender,type,service,owner,contactPhone){
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
  let thePet = new Pet(nameInput.value,ageInput.value,genderInput.value,typeInput.value,serviceSelect.value,ownerInput.value,phoneInput.value);
  petSalon.pets.push(thePet);
  console.log(petSalon.pets);
  clearInputs();
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
  petSalon.pets.push(blue);
  petSalon.pets.push(jr);
  petSalon.pets.push(mini);
}


window.onload=init;