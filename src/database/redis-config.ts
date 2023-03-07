import Redis from 'ioredis';
import config from '../config';

const redis = new Redis({
    host: config.DATABASE.REDIS.HOST,
    // password: process.env.DATABASE_REDIS_PASSWORD,
    // port: 6397,
    // db: 3
});

redis.on("error", (e) => {
	console.log("!!! REDIS Error: Can not connect !!! " + e);
});

redis.on("connect", () => {
	console.log("*** REDIS Info: Connected. ***");
});

export default redis;