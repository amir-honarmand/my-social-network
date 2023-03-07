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
  
  DATABASE: {
    HOST: process.env.DATABASE_HOST,
    USERNAME: process.env.DATABASE_USERNAME,
    PASS: process.env.DATABASE_PASSWORD,
    NAME: process.env.DATABASE_NAME,
    
    REDIS: {
      HOST: process.env.DATABASE_REDIS_HOST
    }
  },

  AUTHENTICATION: {
    USER_SECRET: process.env.USER_SECRET,
    PUBLIC_SECRET: process.env.PUBLIC_SECRET,
    USER_REFRESH_EXPIRE: process.env.USER_REFRESH_EXPIRE,
    USER_ACCESS_EXPIRE: process.env.USER_ACCESS_EXPIRE,
  }
};
