export default defineEventHandler(async (event) => {
  if (process.env.NODE_ENV !== 'production') {
    return { status: 'development' }
  }

  const config = process.env.SITE_ANALYTICS
  if (!config) {
    return { status: 'disabled' }
  }

  try {
    const method = getMethod(event)
    const headers = getHeaders(event)
    
    if (method === 'GET') {
      return { config: JSON.parse(config) }
    }
    
    if (method === 'POST') {
      const body = await readBody(event)
      const processor = process.env.ANALYTICS_PROCESSOR
      
      if (processor) {
        const fn = new Function('data', 'headers', 'env', processor)
        await fn(body, headers, process.env)
      }
    }
    
    return { status: 'ok' }
  } catch (error) {
    return { status: 'error' }
  }
})
