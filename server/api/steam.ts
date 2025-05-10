interface SteamGame {
  appid: number;
  name: string;
  playtime_2weeks?: number;
  playtime_forever?: number;
  img_icon_url: string;
  img_logo_url: string;
}

interface RecentlyPlayedGamesResponse {
  response?: {
    total_count: number;
    games: SteamGame[];
  };
}

const { steam } = useRuntimeConfig();

const formatPlaytime = (minutes?: number): string => {
  if (minutes === undefined) {
    return 'N/A';
  }
  if (minutes === 0) {
    return 'Less than 1 hour';
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (hours > 0 && remainingMinutes > 0) {
    return `${hours}h ${remainingMinutes}m`;
  }
  if (hours > 0) {
    return `${hours}h`;
  }
  return `${remainingMinutes}m`;
};

export default defineEventHandler(async () => {
  if (!steam.apiKey || !steam.steamId) {
    console.error('Steam API key or SteamID is not configured.');
    return {
      error: 'Steam API key or SteamID is not configured.',
      games: [],
    };
  }

  const params = new URLSearchParams({
    key: steam.apiKey,    steamid: steam.steamId,
    format: 'json',
    count: '3'
  });

  const apiUrl = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?${params}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `Error fetching Steam data: ${response.status} ${response.statusText}`,
        errorText
      );
      return {
        error: `Failed to fetch Steam data. Status: ${response.status}`,
        games: [],
      };
    }

    const data: RecentlyPlayedGamesResponse = await response.json();

    if (!data.response || !data.response.games || data.response.games.length === 0) {
      return {
        message: 'No recently played games found or profile is private.',
        games: [],
      };
    }

    const games = data.response.games.slice(0, 3).map((game) => ({
      appId: game.appid,
      name: game.name,
      playtime_2weeks: formatPlaytime(game.playtime_2weeks),
      playtime_forever: formatPlaytime(game.playtime_forever),
      // Constructing image URLs
      header_image: `https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/header.jpg`,
      capsule_image_small: `https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/capsule_184x69.jpg`,
      capsule_image_large: `https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/capsule_616x353.jpg`,
      library_hero_image: `https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/library_hero.jpg`,
      store_link: `https://store.steampowered.com/app/${game.appid}`
    }));

    return { games };
  } catch (error: any) {
    console.error('Error in Steam event handler:', error.message, error.stack);
    return {
      error: 'Failed to fetch Steam data due to a network or parsing error.',
      games: [],
    };
  }
});
