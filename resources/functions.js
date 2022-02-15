function Send(){
    let name = document.querySelector("#txtName").value;
    let lastname = document.querySelector("#txtLastname").value;
    let email = document.querySelector("#txtEmail").value;
    let phone = document.querySelector("#txtPhone").value;
    if(name != "" && lastname != "" && email != "" && phone != ""){
        alert("Sending...");
    }else{
        alert("Please fill the information...");
    }
}

let changeBackground = () => {
    document.querySelector("body").style.background = "black";
}

setTime