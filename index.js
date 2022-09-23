const init = require('./src/iterator');
process.title = 'cron-trigger'

init.start();


process.on("uncaughtException", (err) => {
  // process.exit(0);
  console.log('ERROR not handled :: ', err);
})

process.on("unhandledRejection", (err) => {
  // process.exit(0);
  console.log('PROMISE ERROR not handled :: ', err);
})