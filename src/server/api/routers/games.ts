import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const gamesRouter = createTRPCRouter({
  create: publicProcedure.mutation(() => {
    const uuid = 1234;
    return {
      id: uuid,
    };
  }),
});
