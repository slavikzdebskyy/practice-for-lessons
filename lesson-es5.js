

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



// class User {

//   constructor() {
//     let userList = [];
//   }

//   setUsers(array) {
//     this.userList = array // link
//     this.userList = [...array] // this.userList = array.map(el => el);
//   }

//   getUsers(count = this.userList.length) {
//     return this.userList.slice(0, count);
//   }

  


// }

// const user = new User();
// user.setUsers(data);
//  console.log(user.getUsers(10));

// console.log(data);

// const count = new countUser();

// count.setUsers(data);

// class UserAdd {
//   constructor() {
//     const newUser = {};
//   }
  // setUsers(firstName, lastName, count = Math.floor(Math.random() * 200) + 100)  {
  //   console.log(`Hi everyone, im ${firstName} ${lastName}`);
  //   Object.assign(newUser,
  //       {id: co



// class User {

//   userList = [];

//   constructor() {
//     // const newUser = {};
    
//   }

//   setUser(first_name, last_name, id = Math.floor(Math.random() * 200) + 100)  {

//     const newUser = {
//       id,
//       first_name,
//       last_name, 
//     }

//     this.userList.push(newUser); 
//     console.log(`Hi everyone, im ${first_name} ${last_name}`);
//   }

//   setUsers(array) {
//     this.userList = [...this.userList, ...array];

//     // *********************

//     // const arr = [];
//     // this.userList.forEach(el => arr.push(el));
//     // array.forEach(el => arr.push(el));
//     // this.userList = arr;

//     // ***********************
//   }

//   getUsersCount() {
//     return this.userList.length;
//   }

//   getUsers() {    
//     return this.userList;
//   }

//   getUserById(id) {
//     const user =  this.userList.find(el => el.id === id);

//     if (user) {
//       return user;
//     }
//     console.error(`User with ID ${id} not found`);
//   }

// }

// const users = new User();

// console.log('data', data);
// console.log('newUser', users);
// debugger

// console.log(users.userList[0]);


// users.setUser('Anatoliy', 'Drozdov');
// users.setUsers(data.slice(0,4));
// users.setUser('Anatoliy', 'Drozdov');
// users.setUser('Anatoliy', 'Drozdov');
// newUser.getUsers(data)

// console.log(users.getUserById(3345));

// console.log('newUser', users);
// console.log('data', data)

// setTimeout(() => users.setUser('Anatoliy', 'Drozdov'), 3000);



// class User {

//   constructor(firstName, lastName, id) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.id = id
//   } 

// }

// // const users = [new User('Ptro', 'Ivanov', 123), new User('Ptro', 'Ivanov', 13)]

// const users = data.map(el => new User(el.first_name, el.last_name, el.id));


// console.log(users)
// // console.log(data.slice(0,4))


// class Car {

//   constructor(brand, model, type, fuel, year) {
//     this.brand = brand;
//     this.model = model;
//     this.type = type;
//     this.fuel = fuel;
//     this.year = year;   
//   }

// }

// const audi = new Car('Audi', 'A6', 'sedan', 'Diesel', 2018);



// class Track extends Car {

//   constructor (brand, model, type, fuel, year, weghtNetto, weghtBrutto) {
//     super(brand, model, type, fuel, year)
//     this.weghtNetto = weghtNetto;
//     this.weghtBrutto = weghtBrutto;
//   }

// }


// console.log(new Track(...audi, 100, 200));

