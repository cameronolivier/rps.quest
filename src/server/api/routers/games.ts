import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const gamesRouter = createTRPCRouter({
  create: publicProcedure
    .mutation((ctx) => {
      return ctx.prisma.game.create({
        data: {}
      });
    }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
