const mysql = require('mysql');
const config = require('../config/configDB.json');

const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password
});

module.exports.vonatEsemenyLista = function (vId, callback) {
    myQuery = `SELECT vNev, allId, ora, perc, jelleg FROM esemeny INNER JOIN vonat on vonat.vId=esemeny.vId WHERE vonat.vId=${vId}`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}

module.exports.vonatLista = function (callback) {
    myQuery = `SELECT vId, vNev FROM vonat`;
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })
}

