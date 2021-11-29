// Password Hasing Algorithm
let bcrypt = require('bcrypt')

let input = 'dog'
let saltRounds = 8

let salt = bcrypt.genSaltSync(8)
console.log('\nSalt : ' + salt)

bcrypt.hash(input, salt, (error, hash) => {
    // console.log(hash)
    console.log('\n' + hash + '\n')

    bcrypt.compare(input, hash, (error, result) => {
        console.log('Result is ' + result + '\n')
    })

})