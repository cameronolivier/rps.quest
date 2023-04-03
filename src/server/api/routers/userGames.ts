import { type Prisma } from '@prisma/client';
import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

const schema = z.object({
  userGameId: z.string(),
  weapon: z.enum(['ROCK', 'PAPER', 'SCISSORS']),
});
export const userGamesRouter = createTRPCRouter({
  update: publicProcedure.input(schema).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.userGame.update({
      where: {
        id: input.userGameId,
      },
      data: {
        weapon: input.weapon as Prisma.UserGameUpdateInput['weapon'],
      },
    });
  }),
});
