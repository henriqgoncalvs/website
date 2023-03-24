import { TRPCError } from '@trpc/server';

import {
  type SpotifyApiCurrentPlayingResponse,
  getNowPlaying,
} from '@/lib/spotify';
import {
  createTRPCRouter,
  publicProcedure,
} from '@/server/api/trpc';

export const spotifyRouter = createTRPCRouter({
  getCurrentPlaying: publicProcedure.query(async () => {
    try {
      const track: SpotifyApiCurrentPlayingResponse =
        await getNowPlaying();

      if (!track) {
        throw new Error('No track is currently playing');
      }

      return {
        name: track.item.name,
        artist: track.item.artists[0]?.name,
      };
    } catch (e: any) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: e.message,
      });
    }
  }),
});
