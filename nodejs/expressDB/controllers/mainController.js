const pgPromise = require("pg-promise");
const joi = require("joi");
const multer = require('multer')

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

//setup multer
/* const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  },
})
const upload = multer({ storage: storage }) */


/* db.connect()
  .then((object) => console.log(object))
  .catch((err) => console.error(err)); */

async function setupDB () {
    await db.none(`
        DROP TABLE IF EXISTS planets;
        CREATE TABLE planets(
        id SERIAL NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        image TEXT)`
    );
    await db.none(`INSERT INTO planets (name) VALUES ('earth')`)
    await db.none(`INSERT INTO planets (name) VALUES ('mars')`)
    const planets = await db.many(`SELECT * FROM planets`)
    console.log(planets)
}

//crea la base de datos
setupDB()

const planetSchema = joi.object({
  id: joi.number().integer().required(),

  name: joi.string().required().trim(),
});

const mainController = {
  getAll: async (req, res) => {
    const planets = await db.many(`SELECT * FROM planets`)
    res.json(planets);
  },

  getPlanetById: async (req, res) => {
    const { id } = req.params;
    const planet = await db.oneOrNone(`SELECT * FROM planets WHERE id=${id}`)
    res.status(200).json(planet);
  },

  create: async(req, res) => {
    const newName = req.body.name;
    await db.none(`INSERT INTO planets (name) VALUES ('${newName}')`)
    /* let result = planetSchema.validate(obj); */
    /* if (result.error) {
      return res.status(400).json({
        msg: "error",
        data: result.error.message,
      });
    } */

    res.status(201).json({
      msg: "planets created",
      data: newName,
    });
  },

  editPlanet: async (req, res) => {
    const newName = req.body.name
    const { id } = req.params
    await db.none(`UPDATE planets SET name=$1 WHERE id=$2`, [newName, id])
    res.status(200).json({
      msg: 'Success', planets: `${newName}`
    })
  },

  destroyPlanet: async (req, res) => {
    const { id } = req.params;
    const planet = db.oneOrNone(`SELECT name FROM planets WHERE id=${id}`)
    await db.none(`DELETE FROM planets WHERE id=$1`, id)
    res.status(200).json({
      msg: "deleted",
      data: planet,
    });
  },

  addImage: async (req, res) => {
    const  { id }  = req.params
    const fileName = req.file.filename
    console.log(req)
    console.log(id)
    if(!req.file) {
      return res.status(400).json({
        msg: 'ERR NO FILE'
      })
    }
    await db.none('UPDATE planets SET image=$2 WHERE id=$1', [id, fileName])
    res.status(200).json({
      msg: 'added',
      data: fileName
    })
  }
};

module.exports = mainController;
