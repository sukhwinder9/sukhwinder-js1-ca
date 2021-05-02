const userId = document.querySelector(".userId");

const qString = document.location.search;
const newParam = new URLSearchParams(qString);

const getId = newParam.get("id");

console.log(typeof getId);

const url = "https:/reqres.in/api/users/" + getId;

if (getId != null) {
    getData()
}

async function getData() {
    setSpinner(true);
    try {
        const response = await fetch(url);
        const details = await response.json();
        const userInfo = details.data;

        console.log("userInfo");

        addDetail(userInfo);


    } catch (error) {
        console.log("error");
    }
}

function addDetail(userInfo) {
    setSpinner(false);

    userId.innerHTML = ` <div class="detailDiv">
    <p>ID: <strong>${userInfo.id}</strong></p> 
    <p>First name: <strong>${userInfo.first_name}</strong></p>
    <p>Last name: <strong>${userInfo.last_name}</strong></p>
    <p>Email: <strong>${userInfo.email}</strong></p></div>`
}

async function getUser() {
    setSpinner(true);
    let userId = document.getElementById("user-id").value;
    try {
        const response = await fetch("https://reqres.in/api/users/" + userId);
        const details = await response.json();
        const userInfo = details.data;
        console.log("userInfo");

        addDetail(userInfo);



    } catch (error) {
        console.log("error");
    }
}

function setSpinner(setspinner) {
    if (setSpinner) {
        `<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`;
    } else {
        detailUsers.innerHTML = "";
    }
}