import * as mysql from "mysql";
import config from "../config";

const connection = mysql.createConnection(config.mysqlConnection);

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    });
}

import chirps from "./chirps";

// this becomes db object in routes/chirps.js
export default {
    chirps
}