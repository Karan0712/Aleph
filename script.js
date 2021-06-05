function plsClick() {
    userName = document.getElementById("adUsername");
    password = document.getElementById("adPassword");
    if(userName.value == "" || password.value == "") {
        er = document.getElementById("errorLabel")
        er.innerHTML = "Please fill all the fields"
    }
    else if(userName.value != "Aleph" || password.value != "Aleph") {
        er = document.getElementById("errorLabel")
        er.innerHTML = "Invalid credentials"
    }
    else{
        window.location.replace("home.html")
    }
    
    
} 
document.getElementById("loginButton").addEventListener("click", plsClick)

const menuIcon = document.querySelector(".hamburgerMenu")
const navBar = document.querySelector(".navBar")
menuIcon.addEventListener('click', ()=> {
    navBar.classList.toggle("change");
})

