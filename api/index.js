const server = require('./src/app.js');
const { conn } = require('./src/db.js');


// Syncing all the models at once.
conn.sync({ force: false }).then(() => { //CAMBIAR A {alter: true} CUANDO TERMINE DE CREAR TODO EL BACKEND
  server.listen(3001, () => {
    console.log(`%s listening at 3001`); // eslint-disable-line no-console
  });
});