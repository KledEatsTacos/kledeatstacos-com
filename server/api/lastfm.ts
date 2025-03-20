const { lastfm } = useRuntimeConfig();

const getRecentTrack = async () => {
  const params = new URLSearchParams({
    method: 'user.getrecenttracks',
    user: lastfm.username,
    api_key: lastfm.apiKey,
    format: 'json',
    limit: '1'
  });

  const response = await fetch(`${lastfm.apiUrl}?${params}`);
  
  if (!response.ok) {
    console.error('Error fetching Last.fm data:', await response.json());
    return null;
  }

  const data = await response.json();
  const tracks = data.recenttracks?.track;
  
  if (!tracks?.length) {
    return "No track is currently playing.";
  }

  const track = tracks[0];
  return `${track.artist['#text']} - ${track.name}`;
};

export default defineEventHandler(async () => {
  try {
    return await getRecentTrack();
  } catch (error) {
    console.error('Error in Last.fm event handler:', error);
    return "No track is currently playing.";
  }
});