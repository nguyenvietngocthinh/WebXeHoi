function dangky(){
    let ho = document.getElementById("Ho").value
    let errorHo = document.getElementById("errorHo")
    let regexHoTen = /^[A-Z].*$/
    if(ho.trim()==""||!regexHoTen.test(ho)){
        errorHo.innerHTML="Vui lòng nhập họ!"
        return false
    }
    errorHo.innerHTML=""
    
    let ten= document.getElementById("Ten").value
    let errorTen= document.getElementById("errorTen")

    if(ten.trim()==""||!regexHoTen.test(ten)){
        errorTen.innerHTML="Vui lòng nhập tên!"
        return false
    }
    errorTen.innerHTML=""

    let email = document.getElementById("Email").value
    let regexEmail =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    let erroremail = document.getElementById("errorEmail")
    if(email.trim()==""||!regexEmail.test(email)){
        erroremail.innerHTML= "Vui lòng nhập lại email"
        return false
    }
    erroremail.innerHTML=""

    let check_email= document.getElementById("check_email").value
    let errorcheck_email = document.getElementById("errorcheck_email")
    if(check_email.trim()==""){
        errorcheck_email.innerHTML="Vui lòng nhập lại email!"
        return false
    }
    else if(check_email.trim()!=email.trim()){
        errorcheck_email.innerHTML="Email không khớp, vui lòng nhập lại!"
        return false
    }
    errorcheck_email.innerHTML=""

    let pass= document.getElementById("pass").value
    let regexpass =/^[a-zA-Z0-9]{6,}.*$/
    let errorpass = document.getElementById("errorPass")
    if(pass.trim()==""||!regexpass.test(pass)){
        errorpass.innerHTML="Vui lòng nhập mật khẩu!"
        return false
    }
    errorpass.innerHTML=""

    let namsinh= document.getElementById("Nam_Sinh").value
    let errordate = document.getElementById("errorDate")
    let regexnamsinh = /^\d+$/
    let temp = eval(namsinh)
    if(namsinh.trim()==""){
        errordate.innerHTML="Vui lòng nhập năm sinh"
        return false
    }
    else if(!regexnamsinh.test(namsinh)){
        errordate.innerHTML="Năm sinh phải nhập bằng số"
        return false
    }
    else if(temp>2002){
        errordate.innerHTML="Năm sinh phải lớn hơn 2002"
        return false
    }
    errordate.innerHTML=""

    return true
}