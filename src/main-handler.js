var pgInterface = require('../config/postgres-config');

async function main() {
    var dateObj = getDate();
    let triggers = await getUpcomingTriggers(dateObj) || [];
}


async function init() {
    return Promise.all([
        pgInterface.connect()
    ]);
}

async function getUpcomingTriggers(dateObj) {
    console.log('upcoming triggers');
    // let sql1 = `SELECT * from cron_table23 where day >= ${dateObj.day} AND hours >= ${dateObj.hours}`;
    // let sql2 = `SELECT * from cron_table23 limit 2`;
    // await init();
    // await pgInterface.execute(sql2);
}

async function callEventTriggerHandler(eventId, type) {}


/***************************************************************************** */

function getDate() {
    let date     = new Date();
    let dateObj = {
        date: date,
        minutes: date.getMinutes().toString(),
        hours: date.getHours().toString(),
        day: (date.getDate()).toString(),
        month: (date.getMonth() + 1).toString(),
        year: date.getFullYear().toString(),
    }
    return dateObj
}
/******************************************************************************** */
module.exports = { main }