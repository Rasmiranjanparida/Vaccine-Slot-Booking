var userLists = JSON.parse(localStorage.getItem('userList'));
var tableData = userLists.map(user => (
    `
    <tr>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.age}</td>
    <td>${user.phone}</td>
    <td>${user.adharNumber}</td>
    <td>${user.dateOfUser}</td>
    <td>${user.address}</td>
    </tr>
  `
)).join('');

var tbody = document.querySelector('#body');
tbody.innerHTML = tableData;
