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

    /* 
        HOW IT WORKS 
        - getUpcomingTriggers() ---> gets called every 30 seconds ---> we used setInterval() in iterator.js
        - from this cron_table23... 
            we get list of events
        - Based on that, we call eventTrigger() endpoint in "games-for-sustainability" repo
        - inside the eventTrigger() method ---> we send FCM notification & stuff 
            whether event changed ----->    from one mode to another
                                    --->    whether we moved to next round
                                    --->    whether game time is over (or) not

    */

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