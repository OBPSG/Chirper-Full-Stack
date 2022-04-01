import { Query } from "./index";

const all = () => Query("select chirps.id, users.name, chirps.content, chirps._created from chirps join users on chirps.userid = users.id");

const one = (id) => Query("select * from chirps where chirps.id = ?", [id]);

const destroy = (id) => Query("delete from chirps where chirps.id = ?", [id]);

const insert = (username, message, location) => Query("insert into chirps (userid, content, location) values ((select users.id from users where users.name = ?), ?, ?)", [username, message, location]);

const edit = (id, content) => Query("UPDATE chirps SET content = ? WHERE chirps.id = ?", [content, id])

// this becomes chirps in db/index.js and routes/chirps.js
export default {
    all,
    one,
    destroy,
    insert,
    edit
}