import { userGamesRouter } from '~/server/api/routers/userGames';

import { gamesRouter } from './routers/games';
import { usersRouter } from './routers/users';
import { createTRPCRouter } from './trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  games: gamesRouter,
  users: usersRouter,
  userGames: userGamesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
