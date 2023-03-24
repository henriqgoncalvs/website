import { stringify } from 'querystring';

import fetch from 'isomorphic-unfetch';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(
  `${client_id}:${client_secret}`
).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const SPOTIFY_BASE_ENDPOINT = `https://api.spotify.com/v1`;

export const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  const response = await fetch(
    `${SPOTIFY_BASE_ENDPOINT}/me/player/currently-playing`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  if (response.status === 200) {
    const data = await response.json();

    return data;
  }

  return null;
};

export type SpotifyApiCurrentPlayingResponse = {
  item: {
    artists: {
      name: string;
    }[];
    name: string;
  };
};
