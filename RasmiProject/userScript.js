function saveData() {
    let name = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let adharNumber = document.getElementById("adharNumber").value;
    let dateOfUser = document.getElementById("dateOfUser").value;
    let address = document.getElementById("address").value;
    let userList = [];
    if (localStorage.getItem('userList') && localStorage.getItem('userList').length > 0)
        userList = JSON.parse(localStorage.getItem('userList'));
    let user = { name, email, age, phone, adharNumber, dateOfUser, address };
    userList.push(user);
    localStorage.setItem('userList', JSON.stringify(userList));


}