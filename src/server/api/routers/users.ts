import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { createTRPCRouter, publicProcedure, type TRPCContext } from '../trpc';

const inputObj = z.object({ name: z.string(), slug: z.string() });

const condGameIsFull = async (
  ctx: TRPCContext,
  input: z.infer<typeof inputObj>
) => {
  const game = await ctx.prisma.game.findUniqueOrThrow({
    where: {
      slug: input.slug,
    },
  });

  const userGames = await ctx.prisma.userGame.findMany({
    where: { gameId: game?.id },
  });

  if (userGames.length > 1) {
    throw new TRPCError({
      code: 'BAD_REQUEST',
      message: 'This game already has 2 players. ☠️',
    });
  }
};

export const usersRouter = createTRPCRouter({
  create: publicProcedure.input(inputObj).mutation(async ({ ctx, input }) => {
    await condGameIsFull(ctx, input);

    const user = await ctx.prisma.user.create({
      data: {
        name: input.name,
      },
    });

    const userGame = await ctx.prisma.userGame.create({
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
    return {
      userId: user.id,
      slug: input.slug,
      userGameId: userGame.id,
    };
  }),
});
