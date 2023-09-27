import type { Config } from "drizzle-kit";
import env from "./src/env";

export default {
  dbCredentials: { connectionString: env.DB_URI },
  schema: "./src/db/schema/index.ts",
  driver: "mysql2",
  breakpoints: true,
  out: "./drizzle",
} satisfies Config;
