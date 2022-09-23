var pgClient = require('../config/postgres-config');

async function main() {
    var dateObj = getDate();
    let triggers = await getUpcomingTriggers(dateObj) || [];
}


async function init() {

}
async function getUpcomingTriggers(dateObj) {

    let sql = `SELECT * from cron_triggers where day >= ${dateObj.day} AND hours >= ${dateObj.hours}`;
    pgClient.connect('misc23');

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