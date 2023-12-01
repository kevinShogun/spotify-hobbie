
"use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { getData } from '../lib/data';

export default async function page() {

    let data = await getData();

    return (
        <Fragment>
            <Head>
                <title>Artist</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
                <meta property="og:title" content="Artist" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://Artist.com" />
                <meta property="og:image" content="/spotify.svg" />
                <meta property="og:description" content="Artist" />
                <meta property="og:site_name" content="Artist" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Artist" />
                <meta name="twitter:description" content="Artist" />
                <meta name="twitter:image" content="/spotify.svg" />
                <meta name="twitter:site" content="@Artist" />
                <meta name="twitter:creator" content="@Artist" />

            </Head>
            <main className="flex min-h-screen flex-col items-center justify-between px-10 py-20 md:p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <p className="fixed left-0 top-0 flex w-full justify-center 
                    border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 
                    pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 
                    dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border
                     lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        Get artists &nbsp;
                        <code className="font-mono font-bold">src/app/Artist/page.tsx</code>
                    </p>
                </div>
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
                <div
                    className={`${data && 'min-h-[80vh]'} w-full flex flex-col items-center justify-center gap-5`}
                >
                    {
                        data ? (
                            <div
                                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
                            >
                                {
                                    data.artists.map((artist: any) => (
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
                                                src={artist.images[0].url}
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
                                    ))
                                }
                            </div>
                        )
                            : (
                                <h1 className='text-3xl font-bold font-mono'>No data</h1>
                            )
                    }
                </div>

                <button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 
                    hover:from-pink-500 hover:to-orange-500
                    text-white font-bold py-2 px-4 rounded z-50
                    transition-all duration-500 ease-linear"
                    onClick={getData}
                    disabled={!!data}
                >
                    Get artists
                </button>
            </main>
        </Fragment>
    )
}