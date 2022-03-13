import * as connectRedis from 'connect-redis';
import * as session from 'express-session';
import * as redis from 'redis';

const redisStore = connectRedis(session);
const RedisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT as unknown as number,
});
RedisClient.auth(process.env.REDIS_PASSWORD);

const redisSessionConfig = {
  store: new redisStore({ client: RedisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    maxAge: 30 * 60 * 1000,
    httpOnly: true,
  },
};

export const createRedisSession = () => {
  return session(redisSessionConfig);
};
