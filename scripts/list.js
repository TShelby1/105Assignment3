function displayUsers(users) {
   // travel the array then select the table then tbody section
  $("#userTables tbody").html("")
  let data = " ";
  for (let i = 0; i < users.length; i++) {
    // puts in table structure
    data+= createUser(users[i], i);
  }
  $("#userTables tbody").html(data)
  
}

//getting from the array the index is the location of the items in the array
function createUser(user, index){
    return `<tr> 
                <td> First Name: ${user.firstName} </td> 
                <td> Last Name: ${user.lastName}</td>
                <td> Email: ${user.email}</td>
                <td> Password: ${user.password}</td>
                <td> Card Number: ${user.cardNumber}</td>
                <td> Age: ${user.age}</td>
                <td> Address: ${user.address}</td>
                <td> Phone Number:${user.phoneNumber}</td>
                <td> Payment Method:${user.payment}</td>
                <td> Color:${user.color}</td>
                <td><input type='button' value='remove' onclick='removeUser(${index})'/></td>
            </tr>`;
} 

function removeUser(index){
    remove(index);
    let users = readUsers();
    displayUsers(users);

}

function init() {
  console.log("Listing users");
  let users = readUsers();
  displayUsers(users);
}

window.onload = init;
