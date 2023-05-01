import { type Weapons } from '@prisma/client';
import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

const updateSchema = z.object({
  userGameId: z.string(),
  weapon: z.custom<Weapons>(),
});

const getGameUsersSchema = z.object({
  userGameId: z.string(),
  playerId: z.string(),
});
export const userGamesRouter = createTRPCRouter({
  getGameUsers: publicProcedure
    .input(getGameUsersSchema)
    .query(async ({ ctx, input }) => {
      const playerGame = await ctx.prisma.userGame.findFirstOrThrow({
        where: {
          id: input.userGameId,
        },
      });

      const opponentGame = await ctx.prisma.userGame.findFirst({
        where: {
          gameId: playerGame.gameId,
          id: { not: input.userGameId },
        },
      });

      const playerUser = await ctx.prisma.user.findFirstOrThrow({
        where: {
          id: playerGame.userId,
        },
      });

      const opponentUser =
        !!opponentGame &&
        (await ctx.prisma.user.findFirst({
          where: {
            id: opponentGame.userId,
          },
        }));

      const player = {
        name: playerUser.name,
        weapon: playerGame.weapon,
      };

      const opponent =
        opponentUser && opponentGame
          ? {
              name: opponentUser.name || '',
              weapon: opponentGame.weapon || undefined,
            }
          : undefined;

      return {
        player,
        opponent,
      };
    }),
  update: publicProcedure
    .input(updateSchema)
    .mutation(async ({ ctx, input }) => {
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
