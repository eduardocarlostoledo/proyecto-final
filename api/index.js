const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {PORT} = process.env

// Syncing all the models at once.
conn.sync({ force: false }).then(() => { //CAMBIAR A {alter: true} CUANDO TERMINE DE CREAR TODO EL BACKEND
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});