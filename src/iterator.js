const handler = require('./main-handler');
// const intervalTime = 0.5 * 60 * 1000

function start () {

    // because it is setInterval ---> It calls the handler.main() every 500ms
    setInterval(() => {
        handler.main();
    }, 3000);
}

module.exports = { start }