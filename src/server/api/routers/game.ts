import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '../trpc'

export const gameRouter = createTRPCRouter({
  create:  publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hi ${input.text}`,
      };
    }),
  attack: publicProcedure.mutation((text: { ctx: z.string() }) => {
    return ctx.prisma.game.update({});
  },

});
