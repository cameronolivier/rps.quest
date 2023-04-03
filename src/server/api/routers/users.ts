import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const usersRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string(), slug: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.create({
        data: {
          name: input.name,
        },
      });
      await ctx.prisma.userGame.create({
        data: {
          user: {
            connect: {
              id: user.id,
            },
          },
          game: {
            connect: {
              slug: input.slug,
            },
          },
        },
      });
      return input;
    }),
});
