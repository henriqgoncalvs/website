import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '@/server/api/trpc';
import { prisma } from '@/server/db';
import { type GuestbookMessage } from '@/types';

export const guestbookRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    try {
      const messages: GuestbookMessage[] =
        await prisma.guestbookMessage.findMany({
          take: 30,
          include: {
            author: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        });

      return messages;
    } catch (e: any) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: e.message,
      });
    }
  }),

  create: protectedProcedure
    .input(
      z.object({
        message: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const { message } = input;
        const userId = ctx.session.user.id;

        await prisma.guestbookMessage.create({
          data: {
            message: message,
            author: {
              connect: {
                id: userId,
              },
            },
          },
        });
      } catch (e: any) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: e.message,
        });
      }
    }),
});
