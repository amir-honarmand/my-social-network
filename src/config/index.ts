import * as dotEnv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  const configFile: string = `./.env`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

export default {
  PORT: process.env.PORT,
  APP_SECRET: process.env.APP_SECRET as string,
};
