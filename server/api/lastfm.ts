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
      displayText: "Not listening to anything right now",
      track: null,
      artist: null,
      isPlaying: false
    };
  }

  const track = tracks[0];
  
  // Check if actively playing NOW (not just last played)
  const isPlaying = track['@attr']?.nowplaying === 'true';
  
  if (!isPlaying) {
    return {
      displayText: "Not listening to anything right now",
      track: null,
      artist: null,
      isPlaying: false
    };
  }
  
  return {
    displayText: `${track.artist['#text']} - ${track.name}`,
    track: track.name,
    artist: track.artist['#text'],
    image: track.image?.find((img: any) => img.size === 'large')?.['#text'] || null,
    isPlaying: true
  };
};

export default defineEventHandler(async () => {
  try {
    return await getRecentTrack();
  } catch (error) {
    console.error('Error in Last.fm event handler:', error);
    return { 
      displayText: "Not listening to anything right now",
      track: null,
      artist: null,
      isPlaying: false
    };
  }
});