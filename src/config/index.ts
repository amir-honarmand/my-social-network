import * as dotEnv from "dotenv";

if (process.env.NODE_ENV !== "prod") {
  const configFile: string = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

export default {
  PORT: process.env.PORT,
  APP_SECRET: process.env.APP_SECRET as string,
};
