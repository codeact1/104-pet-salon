let pet ={
    name:"Taz",
    age:"20",
    type:"cat",
    owner:"Tod",
}

let petSalon ={
    name:"The Pet Palace",
    phoneNumber:555-555-5555,
    address:{
      street:"123 Robinson Rd",
        city: "Jackson",
        state:"Mississippi"
    },
    pets:[]       
};

let c=0;
function Pet(name,age,gender,type,service,owner,contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.type=type;
    this.service=service;
    this.owner=owner;
    this.phone=contactPhone;
    this.id=c++;

}
//conductor//



function register(){
  let nameInput=document.getElementById("petName");
  let ageInput=document.getElementById("petAge");
  let genderInput=document.getElementById("petGender");
  let typeInput=document.getElementById("petType");
  let ownerInput=document.getElementById("petOwner");
  let phoneInput=document.getElementById("ownerPhone");
  let serviceSelect = document.getElementById("petService");   
  console.log(nameInput.value,ageInput.value,genderInput.value,typeInput.value,serviceSelect.value,ownerInput.value,phoneInput.value);
  let thePet = new Pet(nameInput.value,ageInput.value,genderInput.value,typeInput.value,serviceSelect.value,ownerInput.value,phoneInput.value);

  if(isvalid(thePet)){
    petSalon.pets.push(thePet);
    clearInputs();
    displayPetTable();
    deletePet
  }else{
    alert("Plese enter required information");
   
  };
};

function clearInputs(){

  nameInput.value="";
  ageInput.value="";
  genderInput.value="";
  typeInput.value="";
  serviceSelect.value="";
  ownerInput.value="";
  phoneInput.value="";
  petSearch.value="";
};

function deletePet(petId){
  let removeIndex; //searching the pet id into the array
  for(let i=0; i<petSalon.pets.length; i++){ //traveling the array
  let pet = petSalon.pets[i];//get a pet values
  if(pet.id==id){//compare the id with pets id's on the array
    removeIndex = i;//get the location of the pet
  }
  }
petSalon.pets.splice(removeIndex,1);  //remove the pet from the array
document.getElementById(id).remove();//remove the pet from the html
}

function search(){
  let searchString = document.getElementById("petSearch").value;
  let searchIndex; //searching the pet id into the array
  for(let i=0; i<petSalon.pets.length; i++){ //traveling the array
    let pet = petSalon.pets[i];//get a pet values
   if(pet.name==searchString){//compare the id with pets id's on the array
       searchIndex = i;//get the location of the pet
      console.log("Found item");
  }
}
}
function init(){
  console.log("Registering...");
  displaySalonInfo();
  displayPetTable();
}



window.onload=init;