import { migrate } from "drizzle-orm/mysql2/migrator";
import config from "../drizzle.config";
import db from "~/db";

migrate(db, { migrationsFolder: config.out })
  .then(() => {
    console.log("Migration Done!");
    process.exit(0);
  })
  .catch((err) => {
    console.log("Migration Failed :(");
    console.log(err);
    process.exit(1);
  });
