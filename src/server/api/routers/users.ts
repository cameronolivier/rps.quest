import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const usersRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input }) => {
      return input;
    }),
});
