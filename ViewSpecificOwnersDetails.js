const xhr = new XMLHttpRequest();
const url = new URLSearchParams(location.search);
const id = url.get('id'); //id is just a placeholder til i know the key name
// let pets = [];

xhr.onload = () => {
    data = JSON.parse(xhr.response);

    //prints the owners name
    ownerid = document.createElement('h1');
    ownerid.innerHTML = data.id;
    document.getElementById('name').append(ownerid);

    firstname = document.createElement('h1');
    firstname.innerHTML = data.firstName;
    document.getElementById('name').append(firstname);

    lastname = document.createElement('h1');
    lastname.innerHTML = data.lastName;
    document.getElementById('name').append(lastname);

    address = document.createElement('h1');
    address.innerHTML = data.address;
    document.getElementById('name').append(address);

    city = document.createElement('h1');
    city.innerHTML = data.city;
    document.getElementById('name').append(city);

    telephone = document.createElement('h1');
    telephone.innerHTML = data.telephone;
    document.getElementById('name').append(telephone);
}

xhr.open('GET', "http://localhost:9966/petclinic/api/owners/" + 3);//id);
xhr.send();

function prevPage() {
    location.href = '';
}