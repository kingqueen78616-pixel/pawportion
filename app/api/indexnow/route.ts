export async function POST(request: Request) {
  const { url } = await request.json()
  const apiKey = process.env.INDEXNOW_API_KEY

  if (!apiKey) {
    return Response.json({ error: 'IndexNow API key not configured' }, { status: 500 })
  }

  if (!url) {
    return Response.json({ error: 'URL is required' }, { status: 400 })
  }

  try {
    // Ping Bing
    await fetch(
      `https://www.bing.com/indexnow?url=${encodeURIComponent(url)}&key=${apiKey}`
    )

    // Ping Yandex
    await fetch(
      `https://yandex.com/indexnow?url=${encodeURIComponent(url)}&key=${apiKey}`
    )

    return Response.json({ success: true, url })
  } catch (error) {
    return Response.json({ error: 'IndexNow ping failed' }, { status: 500 })
  }
}
