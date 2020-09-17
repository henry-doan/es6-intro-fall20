// this - context , Self 
// this
//   Objects: 
//     arrays hashes, functions, classess
//   window object 
//   primary object of your browser

// hierarchy
//   window 
//     global 
//       function call
//         functions called in other functions





// Variable Scopes

// var foo = 'bar';  //Global
// function someFunction(param1, param2) { //param1, param2 are local
//   var foo = 'baz';  // local
//   console.log(foo);
// }

// function myFunction() {
//   console.log(foo);  // referencing global foo
// }

// function whatIsThis() {
//   baz = 'What kind of var is this?';  //global 
// }
// //console.log(baz) this is an error baz has not been defined yet.

// whatIsThis();  // baz gets defined at this point
// console.log(baz);






// var foo = 'bar';  //Global
// var baz
// var foo
// function someFunction(param1, param2) { //param1, param2 are local
//   var foo = 'baz';  // local
//   console.log(foo);
// }

// function myFunction() {
//   console.log(foo);  // referencing global foo
// }

// function whatIsThis() {
//   baz = 'What kind of var is this?';  //global 
// }

// console.log(baz) this is an error baz has not been defined yet.


// whatIsThis();  // baz gets defined at this point

// console.log(baz);



// var x = true
// var xIsTrue;
// var xIsALie;

// if (x)
//   var xIsTrue = true
// else
//   var xIsALie = true
  
function cl(item) {
  console.log(item)
}

// no longer using var for variables
// let const
// let x = true 
// const x = true

// Let 
//   - doesn't hoisted
//   - scope within the code block
// let x = true 
// let x = false 
// x = false

// Const 
//   - constant , you shouldn't change the value
//   - scope with in the code block 
//   - const read-only 

//   - functions
//   - objects and component
//   - module 

// Function

// Before 
// function printName(name) {
//   .
//   .
//   .
// }

// function printName() {
//   .
//   .
//   .
// }

// printName('bob')
// printName()
// function countColors(colors) {
//   return colors.length
// }

// // console.log(countColors(['blue', 'red', 'pink']))
// console.log(countColors())

// default params
// function countColors(colors = []) {
//   return colors.length
// }

// console.log(countColors(['blue', 'red', 'pink']))
// console.log(countColors())

// function showUserInfo(name, options = {}) {
//   let likes = options.likes
//   let followers = options.followers
//   let following = options.following
// }
function cl(item) {
  console.log(item)
}

// function showUserInfo(name, { likes, followers, following } = {} ) {
//   cl(likes)
//   cl(followers)
//   cl(following)
//   cl(name)
// }

// showUserInfo('bob', { likes: 3, followers: 10, following: 20 })

// Rest Params - accepts infinite amounts of args.   ... name, works with function

// function logColors(firstColor, ...colors) {
//   cl(firstColor)
//   for(let i in colors) {
//     cl(colors[i])
//   }
// }

// logColors('blue')
// logColors('blue', 'pink', 'black', 'grey')
// logColors('blue', 'pink')

// function getMovies("/movies", function(data) {
//   let movies = data.movies;
//   displayMovies(...movies);
// });

// Spread Operator , spread out everything the object has   ... name
// let person = {
//   name: 'bob',
//   age: 53,
//   email: 'bob@53.com'
// }

// let colors = ['blue', 'pink', 'black', 'grey']
// cl(person.name)
// cl(person.age)
// cl(person.email)
// cl(...colors)

// function hello() {
//   cl('hello')
// }

// const hello => {
//   cl('hello')
// }

// const hello => cl('hello')

// const hello = (name) => {
//   cl('hello' + name)
//   // string interpolation
//   cl(`hello ${name}`)
// }

// hello = () => {
  
// }

// hello('bob')

// Objects

// function officerInfo(first, last, rank, email) {
//   let fullName = first + " " + last
//   return({ first: first, last: last, rank: rank, email: email })
// }

// let o = officerInfo('bob', 'smith', 'chief', 'bob@email.com')
// cl(o.first)
// cl(o.last)
// cl(o.rank)
// cl(o.email)

// function officerInfo(first, last, rank, email) {
//   let fullName = first + " " + last
//   return({ first, last, rank, email })
// }

// let o = officerInfo('bob', 'smith', 'chief', 'bob@email.com')
// cl(o.first)
// cl(o.last)
// cl(o.rank)
// cl(o.email)

// object destructuring 

// let { first, last, rank, email } = officerInfo('bob', 'smith', 'chief', 'bob@email.com')
// let first = officerInfo('bob', 'smith', 'chief', 'bob@email.com').first
// let last = officerInfo('bob', 'smith', 'chief', 'bob@email.com').last

// state = { post: { title: 'post title', body: 'afdasdf' }}

// let { title } = this.state.post

// `
//   hello
//   on a 
//   multi line
// `

// **
// cl(7 ** 2)
// for in
//  for of

// for (person in ppl)
//  for (person of ppl)

// Array.find
// let users = [
//   { name: 'Dave', role: 'Instructor' },
//   { name: 'Brad', role: 'TA' },
//   { name: 'Parker', role: 'TA' },
//   { name: 'Sara', role: 'Student'},
//   { name: 'Jill', role: 'Student'},
//   { name: 'Greg', role: 'Student'}
// ];

// let student = users.find( (user) => {
//   return user.role == "Student";
// });

// Promise
// - asking for something, resolve or and error 

// new Promise( resolve => {
//     setTimeout( () => {
//       resolve(serverPayload.data.find( u => u.id === id ))
//     }, 1000)
//   })
// }


// .then( user => console.log(user) )
//  .catch( err => console.log(err) )

// race conditions, you are asking for some info and using the info before it is back. 
// Async & Await

// const fetchUserData = async (id, auth) => {
//   const authStatus = await checkAuth(auth);
//   const user = await getUser(authStatus.auth, id);
//   console.log(user);
//   console.log(authStatus);
// }

// loader - loading bar 

class Person React.Component {

}

const Num_users = 10
const default_color = 'blue'

export { Person, Num_users, default_color};
export Num_users

export default Person;