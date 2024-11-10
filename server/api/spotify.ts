const { spotify } = useRuntimeConfig();

const getAccessToken = async () => {
  const response = await fetch(spotify.tokenApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${spotify.clientToken}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: spotify.refreshToken,
    }),
  });
  
  const data = await response.json();
  console.log("Access Token Response:", data);
  return data;
};

const getCurrentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken();

  const response = await fetch(`${spotify.playerApi}/player/currently-playing`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      console.error("No active playback found");
      return null;
    }
    console.error("Error fetching currently playing song:", await response.json());
    return null;
  }

  return response.json();
};

export default defineEventHandler(async (event) => {
  const { player } = getQuery(event);

  if (player === "currently-playing") {
    try {
      const { item } = await getCurrentlyPlayingSong();
      
      if (!item) {
        return "No song is currently playing.";
      }

      const { artists, name } = item;
      const player_message = `${artists[0].name} - ${name}`;

      return player_message;
    } catch (error) {
      console.error("Error in event handler:", error);
      return "No song is currently playing.";
    }
  }
});
