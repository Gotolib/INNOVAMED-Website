const eyeBtn = document.querySelector("#eyeBtn")
const passwordField = document.querySelector("input[type=password]")
const light = document.querySelector(".light")


passwordField.onkeyup = ()=>{
    let pass = passwordField.value
    if(pass.trim() != ""){
        eyeBtn.style.display = "block"
    }

    else{
        eyeBtn.style.display = "none"
        light.classList.remove('on')
        eyeBtn.className = 'fa fa-eye-slash'
        passwordField.setAttribute('type', 'password')
    }
}

eyeBtn.addEventListener('click', ()=>{
    if(eyeBtn.className == 'fa fa-eye-slash'){
        eyeBtn.className = 'fa fa-eye'
        light.classList.add('on')
        passwordField.type = "text"
    }

    else{
        eyeBtn.className = 'fa fa-eye-slash'
        light.classList.remove('on')
        passwordField.type = "password"
    }
})