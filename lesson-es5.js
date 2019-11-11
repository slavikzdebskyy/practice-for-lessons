

// function User() {
//   var userList;
// }


// User.prototype.getUsers = function() {
//   return this.userList;
// }

// User.prototype.setUser = function(array) {
//   this.userList = array;
// }


// User.prototype.showNames = function(count = this.userList.length) {

//  const arr = [1,2,3]; 
//  console.log(arr)
//  if(true) {   
//    const arr = [];
//    console.log(arr)
//  }
//  console.log(arr)

//   return this.userList
//     .slice(0, count)
//     .map(el => el.first_name);
// }




// const users = new User();
// users.setUser(data);

// console.log(users);


// const showName = (array, count = array.length) => array
//   .map(el => el.first_name)          // function(el) { return el.first_name}
//   .sort((a,b) => a > b ? 1 : -1)    // funcytion(a,b) { if(a>b){return 1} return -1}
//   .slice(0, count);

// console.log(showName(users.getUsers(), 15));

// console.log('Users => ', users);
// console.log('get users => ', users.getUsers());



// User.prototype.findById = function(id) {
//   if (!this.userList || !this.userList.length) {
//     console.log(`User with id \"${id}\" undefined`);
//     return;
//   }
//   const user = this.userList.find(el => el.id === id);
//   const msg = user ? user : `User with id \"${id}\" undefined`;
//   console.log(msg);
// }

// users.findById(45);




// obj = {
//   a: 3,
//   b: 100
// }


// obj2 = {
//   ...data[1],
//   foo: function(){return this},
// }

// console.log(obj2.foo())
// const foo = ({first_name, last_name}) => console.log(`My name is ${first_name} ${last_name}`);

// foo(obj2);

// obj2 = Object.assign({}, obj);


// for (const key in obj) {
//   obj2[key] = obj[key];
// }



// obj2.f = 'Vasja';


// console.log('obj => ', obj)
// console.log('obj2 => ', obj2)


// console.log(2 ** 10);


// const array = ['a', 'foo', 20, '4567'];
// console.log(array.includes('f00'));
// const el = array.find(el => el === 'foo');
// if (array.includes('f00')) {

// }



class User {

  constructor() {
    let userList = [];
  }

  setUsers(array) {
    this.userList = array // link
    this.userList = [...array] // this.userList = array.map(el => el);
  }

  getUsers(count = this.userList.length) {
    return this.userList.slice(0, count);
  }

  


}

const user = new User();
user.setUsers(data);
 console.log(user.getUsers(10));

console.log(data);