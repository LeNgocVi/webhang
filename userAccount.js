function switchAuthModal() {
    var modalLogin = $('#logIn');
    var modalSignUp = document.getElementById("signUp");
    $('#logIn').modal("toggle");
    $('#signUp').modal("toggle");
}

var users = [
    {
        id: "user1",
        name: "Hung Vuong",
        username: "vuong1",
        password: "123456",
        rpassword: "123456",
        sdt: "0379377162",
        email: "vuong@gmail.com",
        role: "admin"
    },
    {
        id: "user2",
        name: "Dinh Long",
        username: "long1",
        password: "123456",
        rpassword: "123456",
        sdt: "0379377162",
        email: "long@gmail.com",
        role: "admin"
    },
    {
        id: "user3",
        name: "Trung Quan",
        username: "quan1",
        password: "123456",
        rpassword: "123456",
        sdt: "0379377162",
        email: "quan@gmail.com",
        role: "User"
    },
    {
        id: "user4",
        name: "Ngoc Vi",
        username: "ngocvi1",
        password: "123456",
        cpassword: "123456",
        sdt: "0379377162",
        email: "ngocvi1@gmail.com",
        role: "admin"
    }
]

function saveUser() {
    localStorage.setItem('listUser', JSON.stringify(users))
}

function loadUser() {
    users = JSON.parse(localStorage.getItem('listUser'));
}

if (localStorage.getItem('listUser')) {
    loadUser();
} else
    saveUser();

var signUp = function() {
    var user = {
        id: "User" + parseInt(users.length + 1),
        username: document.getElementById("usernamed").value,
        name: document.getElementById("hotend").value,
        password: document.getElementById("passwordd").value,
        rpassword: document.getElementById("cpasswordd").value,
        sdt: document.getElementById("sdtd").value,
        email: document.getElementById("emaild").value,
        address: "",
        role: "User",
    }

    var exist = users.find(u => u.username === user.username)

    if (exist) {
        alert('Tên tài khoản đã tồn tại!');
        return;
    }
    users.push(user);
    localStorage.setItem('listUser', JSON.stringify(users));
    window.location.reload();
}

var login = function() {
    // var data = JSON.parse(JSON.stringify(users));
    // console.log(data);
    const username = document.getElementById('login_username').value
    const password = document.getElementById('login_password').value
        // console.log("🚀 ~ file: userAccount.js ~ line 100 ~ login ~ users", users)
    const user = users.find(u => u.username === username && u.password === password)
    console.log(username, password);
    if (user) {
        // Save user to localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user))
        alert('Đăng nhập thành công');
        window.location.reload()
        return;
    }
    alert("Đăng nhập không thành công!");
}

var loadData = function() {
    const arr1 = document.getElementsByClassName('is-logged-in');
    const arr2 = document.getElementsByClassName('is-not-logged-in');
    if (localStorage.getItem('loggedInUser')) {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        document.getElementById('logged-in-username').innerHTML = user.username;
        for (const element of arr1) {
            element.setAttribute('style', 'display: none');
        }
        for (const element of arr2) {
            element.setAttribute('style', 'display: block');
        }
    } else {
        for (const element of arr1) {
            element.setAttribute('style', 'display: block');
        }
        for (const element of arr2) {
            element.setAttribute('style', 'display: none');
        }
    }
}

var logOut = function() {
        localStorage.removeItem("loggedInUser");
        const arr1 = document.getElementsByClassName('is-logged-in');
        const arr2 = document.getElementsByClassName('is-not-logged-in');
        if (localStorage.getItem('loggedInUser')) {
            const user = JSON.parse(localStorage.getItem('loggedInUser'));
            document.getElementById('logged-in-username').innerHTML = user.username;
            for (const element of arr1) {
                element.setAttribute('style', 'display: block');
            }
            for (const element of arr2) {
                element.setAttribute('style', 'display: none');
            }
        } else {
            for (const element of arr1) {
                element.setAttribute('style', 'display: none');
            }
            for (const element of arr2) {
                element.setAttribute('style', 'display: block');
            }
        }
        return loadData();
    }
    //over riding loadData function