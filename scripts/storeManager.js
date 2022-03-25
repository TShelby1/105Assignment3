const LS_KEY = "users";

function saveUser(user) {
  //load old data
  let data = readUsers();
  //merge old data and new user
  data.push(user);
  //save it
  let val = JSON.stringify(data); //parse into a JSON String
  localStorage.setItem(LS_KEY, val); //send to the local storage
}

function readUsers() {
  let data = localStorage.getItem(LS_KEY); //getting data from the local storage
  console.log(data);
  if (!data) {
    //is it not data?
    return []; //create the array
  } else {
    let list = JSON.parse(data); //obj
    return list;
  }
}
function remove(index){
     //load old data
  let data = readUsers();
  //we remove the user in the given index from the array data
  data.splice(index, 1);
  //save it
  let val = JSON.stringify(data); //parse into a JSON String
  localStorage.setItem(LS_KEY, val); //send to the local storage

}