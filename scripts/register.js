if (localStorage.getItem("currentUser")){
    location.href = "./index.html"
}

let form = document.querySelector("form") // Lấy thể forrm ddaauf tiên ra

form.addEventListener("submit", function(event){
    event.preventDefault() // Dừng toàn bộ chức năng mặc định

    let username = document.getElementById('username').value.trim()
    let password = document.getElementById('password').value.trim()
    let email = document.getElementById('email').value.trim()

    if (password.length < 6){
        alert("Mật khẩu cần trên 6 kí tự")
    } else {
        if (localStorage.getItem('users')) {
            let users = JSON.parse(this.localName.getItem('users'))
            users.push({
                username,
                password,
                email
            })
            localStorage.setItem("users",JSON.stringify(users))
        } else {
            localStorage.setItem("users",
            JSON.stringify(
                username,
                password,
                email
            ))
        }
        alert("Bạn đã đăng ký thành công")
        location.href = "./login.html"
    }

})