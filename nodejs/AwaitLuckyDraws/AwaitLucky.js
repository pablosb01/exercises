const { get } = require("http");

const players = ['Joe', 'Caroline', 'Sabrina'];
const players2 = ['Tina', 'Jorge', 'Julien'];

function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
}

function getResults(array) {
    array.forEach(async (player) => {
        try{
            let result =  await luckyDraw(player)
            console.log(result)
        } catch (err) {
            console.error(err);
        }
    })
}

getResults(players2);

/* players.forEach(player => {
    luckyDraw(player)
        .then(res => console.log(res))
        .catch(err => console.error(err));
}) */