function signup () {
    var login= document.querySelector("#login");
    var signup= document.querySelector("#signup");

    login.style.width="0";
    login.style.transition="0.3s"
    login.style.display="none";
    signup.style.width="100%";
    signup.style.transition="0.3s";
    
}

function login () {
    var login= document.querySelector("#login");
    var signup= document.querySelector("#signup");

    login.style.width="100%";
    login.style.transition="0.3s";
    login.style.display="block";
    signup.style.width="0";
    signup.style.transition="0.3s";
}