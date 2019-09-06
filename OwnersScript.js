let tabHead = document.getElementById("tableHead");
let tabBod = document.getElementById("tabBod");


//As a    user    I want    to view all owners in a list
//so that I can see information on all owners at a glance

//http=Address to make request, param=either url params or json params if using post!
function makeRequest(http, param, type="GET", rqstHdrStr="Content-Type", rqstHdrVal="application/json"){
    // Create a promise to test whether the connection was a success
    return new Promise((resolve, reject)=>{
        
        const xhr = new XMLHttpRequest(); // Create xh request!

        xhr.onload = (data) => {

            // If POST then 201 is the indicator of success!
            if(xhr.status == 200 || xhr.status == 201){
                resolve(xhr.response); // Success!
            } else {
                reject(xhr.status); // Failure
            }

        };

    //Changing how we deal with it based on if it is or isn't a post request!
    if(type.toUpperCase() == "POST"){ // If post request!
        xhr.open(type.toUpperCase(), http);
        
        xhr.setRequestHeader(rqstHdrStr, rqstHdrVal);//This is important!

        xhr.send(JSON.stringify(param)); // Send data via json
    } else { //If not a post request!
        
        if(param == null){ // If no params given
            xhr.open(type.toUpperCase(), http);
        } else {
            xhr.open(type.toUpperCase(), http + param);
        }
    
        xhr.send(); // Send request!
    }
    });
}


function buildTable(tableSection, tableData, body=false){
    let container;
    let contInner;
    let contInner1;
    let container1;

    container = document.createElement("tr");
    tableSection.appendChild(container);

    if(body){
        for(let data of tableData){
            contInner = document.createElement("th")
            contInner.innerText = data;
            container.appendChild(contInner);
        }
    } else {
        for(let data of tableData){
            contInner = document.createElement("td");
            contInner.innerText = data;
            container.appendChild(contInner);



        }
        contInner = document.createElement("td");

        //Where the information needs to go
        let link ="ViewPetsByOwner.html";

        //The link plus id!
        //let idLink ="<button onclick=\"location.href='"+link+tableData[0]+"'\""+">"+buttonName+"</button>";
        
        //The link plus id as param
        let idLinkParam = "<button onclick=\"location.href='"+link+"?id="+tableData[0]+"'\""+">Pet Info</button>";

        console.log(idLinkParam);

        contInner.innerHTML = idLinkParam;
        
        container.appendChild(contInner);

        //Make field for View user

        contInner = document.createElement("td");



        link ="ViewSpecificOwnersDetails.html";


        idLinkParam = "<button onclick=\"location.href='"+link+"?id="+tableData[0]+"'\""+">User Info</button>";

        contInner.innerHTML = idLinkParam;
        
        container.appendChild(contInner);
        
    }
}

function toNewUsers(){
    location.href = 'newOwner.html';
}

function handleOwnerList(owners){
    
    let firstTime = true;
    let head = ["id", "First Name", "Last Name", "City", "Telephone Number", "View Pet", "View User"];
    let ownersData = [];
    let ownerData;

    for(let owner of owners){// Each owner
        ownerData = [];

        ownerData.push(owner.id);
        ownerData.push(owner.firstName);
        ownerData.push(owner.lastName);
        ownerData.push(owner.city);
        ownerData.push(owner.telephone);

        ownersData.push(ownerData);
    }

    console.log(head);
    console.log(ownersData);

    buildTable(tabHead, head, true);
    for(let ownDat of ownersData){
        buildTable(tabBod, ownDat);
    }
}




//Get request for owners!

    makeRequest("http://35.239.205.133:9000/petclinic/api/owners")
    .then((data)=>{
        console.log("It worked!" + data);
        let parsedData = JSON.parse(data);
        
        handleOwnerList(parsedData);
    })
    .catch((data)=>{
        console.log("It failed!" + data);
    })





