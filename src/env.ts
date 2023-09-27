import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DB_URI: z.string().regex(new RegExp("mysql://.*")),
});

export default envSchema.parse(process.env);
