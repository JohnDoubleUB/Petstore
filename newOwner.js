
function submitHandler(form) {
    let pets = [];
    let owner = {};
    for (element of form.elements) {
        if (element.id != "") {
            owner[element.id] = element.value;
        }
    }

    owner.pets = pets
    const req = new XMLHttpRequest();

    req.open("POST", "http://localhost:9966/petclinic/api/owners");

    req.onload = () => {

        console.log(owner);

        if (req.status >= 200 && req.status < 300) {
            console.log("success!!")
        }
        else {
            console.log("fail!!")
        }
    };
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(JSON.stringify(owner));
    
    return false;
}



