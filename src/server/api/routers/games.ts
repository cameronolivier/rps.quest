import { nanoid } from 'nanoid';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const gamesRouter = createTRPCRouter({
  create: publicProcedure.mutation(async ({ ctx }) => {
    const slug = nanoid(10);
    await ctx.prisma.game.create({
      data: {
        slug,
      },
    });
    return {
      slug,
    };
  }),
});
