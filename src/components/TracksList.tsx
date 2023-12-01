"use client"
import Image from 'next/image';
import React, { useState } from 'react'

export const TracksList = ({ album, isOpen }: any) => {

    const [show, setShow] = useState(false);
    return (
        <div
            className="text-sm mt-2"
        >
            <button
                className='underline text-blue-300 hover:text-blue-500'
                onClick={() => {
                    setShow(!show)
                    isOpen(!show)
                }}
            >
                {show ? 'Hide tracks' : 'Show tracks'}
            </button>
            <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-3 mt-2`}
            >
                {
                    album.tracks.items && album.tracks.items.map((track: any) => {
                        return (
                            <div
                                key={track.id}
                                className={`${show ? 'block' : 'hidden'}`}
                            >
                                <p className="text-sm ml-3">
                                    {track.name} - {Math.floor(Number(track.duration_ms) / 60000)} min
                                </p>
                                {
                                    track.preview_url ?
                                    // create a audio player
                                    <div
                                        className="w-[80%] pl-2 rounded-3xl mt-1 flex justify-center items-center gap-3 bg-[#f1f3f4]"
                                    >
                                        <Image
                                            src="/spotify.svg"
                                            alt="Spotify"
                                            width={80}
                                            height={80}
                                        />
                                        <audio
                                            src={`${track.preview_url}`}
                                            controls
                                        >
                                            Your browser does not support the
                                            <code>audio</code> element.
                                        </audio>
                                    </div>
                                    : <code className='ml-3'>Not aviable</code>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
