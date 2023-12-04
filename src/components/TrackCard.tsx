import Image from 'next/image'
import React from 'react'

export const TrackCard = ({ track }: any) => {
    return (
        <div className='relative'>
            <div
                className='flex flex-col items-center justify-center rounded-xl p-5 
            w-72 h-72 lg:w-80 xl:w-[380px] xl:h-[380px]
             bg-cover bg-center bg-no-repeat bg-opacity-50'
                style={{
                    backgroundImage: `url(${track.album.images[0].url})`,
                }}
            >
            </div>

            <div className='absolute z-10 top-0 backdrop-blur-md bg-white/10 w-72 h-72
            lg:w-80 lg:h-80 xl:w-[380px] xl:h-[380px] rounded-xl p-5'>
                
                <h2 className='text-xl font-bold text-gray-900 font-mono'
                            style={{
                                textShadow: '0 0 25px #fff, 0 0 25px #fff, 0 0 25px #fff'
                            }}
                        >
                            {track.name}
                        </h2>
                <br />
                <div
                    className='w-full scrollbar-hide bg-white rounded-md opacity-50 px-3'
                >
                    <p className='text-gray-900 opacity-100 text-start text-xs md:text-sm'
                        style={{
                            lineHeight: '1.5rem',
                        }}
                    >
                        <b>Artist: </b> {track.artists.map((artist: any) => artist.name).join(', ')}
                        <br />
                        <b>Album: </b>{track.album.name}
                        <br />
                        <b>Release Date: </b>{track.album.release_date}
                        <br />
                        <b>Popularity: </b>{track.popularity}
                        <br />
                        <b>Duration: </b>{Math.floor(Number(track.duration_ms) / 60000)} min
                    </p>
                </div>

                <div>
                    {
                        track.preview_url ?
                            // create a audio player
                            <div
                                className="w-full pl-2 rounded-3xl mt-3 flex justify-center items-center gap-3 bg-[#f1f3f4]"
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
                <button
                    className='px-4 py-2 h-10 mt-2
                    bg-gradient-to-r from-green-400 to-blue-500 rounded-xl w-full
                    focus:outline-none text-white font-medium transition duration-150 ease-in-out
                    backdrop-filter backdrop-blur-xl bg-white bg-opacity-80
                    hover:bg-opacity-50 hover:bg-gray-100
                    hidden lg:block
                    '
                >
                    <a
                        href={track.external_urls.spotify}
                        target='_blank'
                        rel='noreferrer'
                    >
                        Open in Spotify
                    </a>
                </button>
            </div>
        </div>
    )
}
