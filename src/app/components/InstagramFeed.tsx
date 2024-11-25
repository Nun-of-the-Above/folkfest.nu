import Image from 'next/image'

type InstagramPost = {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  permalink: string
  caption?: string
  timestamp: string
}

export async function InstagramFeed() {
  const INSTAGRAM_TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN

  if (!INSTAGRAM_TOKEN) {
    return <div className="p-4 text-red-500">Error: Instagram token not found</div>
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${INSTAGRAM_TOKEN}`,
      { next: { revalidate: 3600 } }, // Revalidate every hour
    )

    if (!response.ok) throw new Error('Failed to fetch posts')

    const data = await response.json()
    const posts: InstagramPost[] = data.data

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            {post.media_type === 'VIDEO' ? (
              <video src={post.media_url} className="w-full h-64 object-cover" controls />
            ) : (
              <Image
                src={post.media_url}
                alt={post.caption || 'Instagram post'}
                width={400}
                height={256}
                className="w-full h-64 object-cover"
              />
            )}
            {post.caption && (
              <p className="p-4 text-sm text-gray-700 line-clamp-2">{post.caption}</p>
            )}
          </a>
        ))}
      </div>
    )
  } catch (err) {
    return (
      <div className="p-4 text-red-500">
        Error: {err instanceof Error ? err.message : 'Failed to load Instagram feed'}
      </div>
    )
  }
}
