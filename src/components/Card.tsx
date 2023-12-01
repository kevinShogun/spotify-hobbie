"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { TracksList } from './TracksList'

export const Card = ({ album }: any) => {
    const [show, setShow] = useState(false);

    return (
        <div className="p-3 bg-white dark:bg-zinc-700/30 transition duration-500 ease-in-out mt-6 text-left border rounded-xl backdrop-blur-xl"
            style={{
                backdropFilter: 'blur(20px)',
                width: show ? '80vw' : '380px',
                transition: 'width 0.5s ease-in-out'
            }}
            key={album.id}
        >
            <p className="text-lg font-semibold">
                {album.name}
            </p>
            <div className="grid grid-cols-2 gap-3 mt-2">
                <p className="text-sm">
                    Artist: {album.artists[0].name}
                </p>
                <a href={album.external_urls.spotify} target="_blank" rel="noreferrer"
                    className="text-sm backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 px-2 py-1 rounded-xl flex items-center justify-center gap-3"
                >
                    <Image
                        src="/spotify.svg"
                        alt="Spotify"
                        width={40}
                        height={40}
                    />
                    Ver en Spotify
                </a>
                <p className="text-sm">
                    Relese date: {album.release_date}
                </p>
                <p className="text-sm">
                    Tracks: {album.total_tracks}
                </p>
                <p className="text-sm">
                    Type: {album.album_type}
                </p>
            </div>
            <TracksList album={album} isOpen={setShow} />
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                <Image
                    src={album.images[0].url}
                    alt={album.name}
                    width={180}
                    height={180}
                    className="rounded-xl shadow-xl shadow-slate-600 hover:shadow-2xl hover:scale-105 hover:shadow-blue-700 transition duration-500 ease-in-out flex flex-col gap-2"
                    onClick={() => {
                        window.open(album.external_urls.spotify, "_blank")
                    }}
                />
            </div>
        </div>
    )
}
