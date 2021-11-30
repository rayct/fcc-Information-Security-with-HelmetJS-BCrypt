// Password Hasing Algorithm - Hash and Compare Passwords Asynchronously
// let bcrypt = require('bcrypt')

// let input = 'dog'
// let saltRounds = 8

// let salt = bcrypt.genSaltSync(8)
// console.log('\nSalt : ' + salt)

// bcrypt.hash(input, salt, (error, hash) => {
//     // console.log(hash)
//     console.log('\n' + hash + '\n')

//     bcrypt.compare(input, hash, (error, result) => {
//         console.log('Result is ' + result + '\n')
//     })
// })

// Password Hasing Algorithm - Hash and Compare Passwords Synchronously
let bcrypt = require('bcrypt')

let input = 'dog'
let saltRounds = 8

let salt = bcrypt.genSaltSync(8)
console.log('\nSalt : ' + salt)

let hash = bcrypt.hashSync(inputs, saltRounds);
console.log('\nHash : ' + hash)

let result = bcrypt.compareSync(input, hash)
console.log('\n' + result + '\n')