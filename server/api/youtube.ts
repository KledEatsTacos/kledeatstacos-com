const { youtube } = useRuntimeConfig();

const searchYoutubeVideo = async (query: string) => {
  const params = new URLSearchParams({
    part: 'snippet',
    q: query,
    key: youtube.apiKey,
    maxResults: '1',
    type: 'video'
  });

  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?${params}`);
  
  if (!response.ok) {
    console.error('Error fetching YouTube data:', await response.json());
    return null;
  }

  const data = await response.json();
  if (!data.items?.length) {
    return null;
  }

  const videoId = data.items[0].id.videoId;
  return `https://www.youtube.com/watch?v=${videoId}`;
};

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    if (!query.q) {
      return { error: 'No search query provided' };
    }
    
    const videoUrl = await searchYoutubeVideo(query.q as string);
    return { videoUrl };
  } catch (error) {
    console.error('Error in YouTube event handler:', error);
    return { error: 'Failed to fetch YouTube data' };
  }
});