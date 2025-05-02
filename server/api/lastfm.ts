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
    return { 
      displayText: "No track is currently playing.",
      track: null,
      artist: null
    };
  }

  const track = tracks[0];
  return {
    displayText: `${track.artist['#text']} - ${track.name}`,
    track: track.name,
    artist: track.artist['#text'],
    image: track.image?.find(img => img.size === 'large')?.['#text'] || null
  };
};

export default defineEventHandler(async () => {
  try {
    return await getRecentTrack();
  } catch (error) {
    console.error('Error in Last.fm event handler:', error);
    return { 
      displayText: "No track is currently playing.",
      track: null,
      artist: null
    };
  }
});