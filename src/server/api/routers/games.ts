import { nanoid } from "nanoid";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const gamesRouter = createTRPCRouter({
  create: publicProcedure.mutation(() => {
    const id = nanoid(10);
    return {
      id,
    };
  }),
});
