import { type Weapons } from '@prisma/client';
import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

const schema = z.object({
  userGameId: z.string(),
  weapon: z.custom<Weapons>(),
});
export const userGamesRouter = createTRPCRouter({
  getGameUsers: publicProcedure.query(async ({ ctx, input }) => {
    return await ctx.prisma.userGame.findUnique({
      where: {
        game: input.gameId,
      },
    });
  }),
  update: publicProcedure.input(schema).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.userGame.update({
      where: {
        id: input.userGameId,
      },
      data: {
        weapon: input.weapon as Weapons,
      },
    });
  }),
});
