import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify hobbie app',
  description: 'Discover a new way to enjoy your favorite music with the Spotify hobbie app. Create playlists, explore new tracks, and enhance your listening experience',
  keywords: 'Spotify, music, app, playlists, discovery, hobbie, listening, tracks, entertainment',
  category: 'website',
  creator: '@gkevinyamil',
  openGraph: {
    title: 'Spotify hobbie app',
    description: 'Discover a new way to enjoy your favorite music with the Spotify hobbie app. Create playlists, explore new tracks, and enhance your listening experience',
    images: '/spotify.svg',
    siteName: 'Spotify hobbie app',
  },
  twitter: {
    card: 'summary_large_image',
    images: '/spotify.svg',
    site: '@gkevinyamil',
    title: 'Spotify hobbie app',
    description: 'Discover a new way to enjoy your favorite music with the Spotify hobbie app. Create playlists, explore new tracks, and enhance your listening experience',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
