let checkbox = document.querySelector("#checkbox");
let name = document.querySelector("#username");
let password = document.querySelector("#password");
checkbox.addEventListener("change",function(){
    if(this.checked){
        if(name && password){
            localStorage.setItem("name",username.value);
            localStorage.setItem("password",password.value);
        }else{
            alert("Fill the Empty Fields");
        }
    }else{
        localStorage.removeItem("name");
        localStorage.removeItem("password");
    }
})