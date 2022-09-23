const handler = require('./main-handler');
const intervalTime = 0.5 * 60000

function start () {

    setInterval(() => {
        handler.main();
    }, intervalTime);
}

module.exports = { start }