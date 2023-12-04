import Image from 'next/image'
import React from 'react'

export const ArtistCard = ({ artist }: any) => {
    return (
        <div
            key={artist.id}
            className='bg-gray-800 rounded-lg p-4 shadow-slate-700 
    shadow-lg hover:shadow-xl hover:scale-105 hover:shadow-blue-700
    transition duration-500 ease-in-out flex flex-col gap-2'
        >
            <h2 className='text-2xl font-bold first-letter:uppercase
        font-mono 
    '>{artist.name}</h2>
            <p className='text-sm'>{artist.genres.join(', ')}</p>
            <span className='text-sm'> <b>Popularity: </b>
                {artist.popularity}
            </span>
            <span className='text-sm'> <b>Followers: </b>
                {Number(artist.followers.total).toLocaleString()}
            </span>
            <br />
            <Image
                src={artist.images.length > 0 ? artist.images[0].url : '/spotify.svg'}
                alt={artist.name}
                width={180}
                height={180}
                className='rounded-lg object-cover mx-auto
        hover:rotate-12 transition duration-500 ease-in-out'
            />
            <button
                className='bg-gradient-to-r from-green-500 to-blue-600
            hover:from-pink-500 hover:to-green-500
            text-white font-bold py-2 px-4 rounded
            transition-all duration-500 ease-linear
            mt-2'
            >
                <a
                    href={artist.external_urls.spotify}
                    target='_blank'
                    rel='noreferrer'
                >
                    Go to Spotify
                </a>
            </button>
        </div>
    )
}
