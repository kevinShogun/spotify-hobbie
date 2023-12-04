import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Spotify hobbie app - Search',
  description: 'Discover a new way to enjoy your favorite music with the Spotify hobbie app - Search. Create playlists, explore new tracks, and enhance your listening experience',
  keywords: 'Spotify, music, app, playlists, discovery, hobbie, listening, tracks, entertainment',
  category: 'website',
  creator: '@gkevinyamil',
  openGraph: {
    title: 'Spotify hobbie app - Search',
    description: 'Discover a new way to enjoy your favorite music with the Spotify hobbie app - Search. Create playlists, explore new tracks, and enhance your listening experience',
    images: '/spotify.svg',
    siteName: 'Spotify hobbie app - Search',
  },
  twitter: {
    card: 'summary_large_image',
    images: '/spotify.svg',
    site: '@gkevinyamil',
    title: 'Spotify hobbie app - Search',
    description: 'Discover a new way to enjoy your favorite music with the Spotify hobbie app - Search. Create playlists, explore new tracks, and enhance your listening experience',
  }
}


export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>
    <Link href='/'>
      <p className='bg-gradient-to-r from-blue-500 to-purple-600 
                    hover:from-pink-500 hover:to-orange-500
                    text-white font-bold py-2 px-4 rounded
                    transition-all duration-500 ease-linear 
                    fixed bottom-0 right-0 m-4'
      >
        Go back
      </p>
    </Link>
    {children}

  </div>
}