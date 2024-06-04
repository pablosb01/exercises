const fs = require('fs');

fs.writeFile('text.txt', 'content in the new txt archive', (err) => {
    if (err) {
        throw err;
    }
    console.log('created')
})