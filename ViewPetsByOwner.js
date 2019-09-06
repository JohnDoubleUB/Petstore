
const xhr = new XMLHttpRequest();
const url = new URLSearchParams(location.search);
const id = url.get('id'); //id is just a placeholder til i know the key name
let pets = [];

xhr.onload = () => {
    data = JSON.parse(xhr.response);

    for (let i = 0; i < data.pets.length; i++) {
        pets.push(data.pets[i]);
    }

    //prints the owners name
    ownername = document.createElement('h1');
    ownername.innerHTML = data.firstName + " " + data.lastName;
    document.getElementById('name').append(ownername);

    for (let i = 0; i < pets.length; i++) {

        //accesses and prints all the pet info
        petName = document.createElement('h3');
        petName.innerHTML = pets[i].name;
        document.getElementById('name').append(petName);

        petBirthday = document.createElement('h3');
        petBirthday.innerHTML = pets[i].birthDate;
        document.getElementById('name').append(petBirthday);

        petType = document.createElement('h3');
        petType.innerHTML = pets[i].type.name;
        document.getElementById('name').append(petType);
    }

}

xhr.open('GET', "http://localhost:9966/petclinic/api/owners/" + 3); //id);
xhr.send();

function prevPage(){
    location.href = '';
}