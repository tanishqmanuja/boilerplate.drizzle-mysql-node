import db from "./db";

const users = await db.query.users.findMany();

console.log(users);
