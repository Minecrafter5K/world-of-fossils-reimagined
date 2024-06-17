import { type Config } from "drizzle-kit";

import { env } from "wof/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["world-of-fossils-reimagined_*"],
} satisfies Config;
