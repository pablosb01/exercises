const crypto = require('crypto')
/* console.log(Object.keys(crypto)) */
const id = crypto.randomBytes(16).toString('hex')
console.log(id)