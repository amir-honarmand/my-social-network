import * as dotEnv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  const configFile: string = `./.env`;
  dotEnv.config({ path: configFile });
} else {
  const configFile: string = `./.env.prod`;
  dotEnv.config({ path: configFile });
}

export default {
  PORT: process.env.PORT,
  APP_SECRET: process.env.APP_SECRET as string,
  DATABASE: {
    HOST: process.env.DATABASE_HOST,
    USERNAME: process.env.DATABASE_USERNAME,
    PASS: process.env.DATABASE_PASSWORD,
    NAME: process.env.DATABASE_NAME
  }
};
