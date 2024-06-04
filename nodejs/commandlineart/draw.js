const figlet = require("figlet")

figlet('pablito', (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
});