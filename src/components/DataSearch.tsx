"use client"
import Image from 'next/image'
import React, { Fragment } from 'react'
import { ArtistCard } from './ArtistCard'
import { Card } from './Card'
import { TrackCard } from './TrackCard'
import { CardPaylist } from './CardPaylist'

export const DataSearch = ({ data }: any) => {
    return (
        <div className='mt-10'>
            {
                // if data contains artists
                data.artists && data.artists.items.length > 0 && (
                    <Fragment>
                        <h2 className='text-6xl font-bold text-gray-100 font-mono'
                            style={{
                                textShadow: '0 0 25px #fff, 0 0 25px #fff, 0 0 25px #fff'
                            }}
                        >
                            Artists
                        </h2>
                        <br />
                        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                            {
                                data.artists.items.map((artist: any) => (
                                    <ArtistCard key={artist.id} artist={artist} />
                                ))
                            }
                        </div>
                    </Fragment>
                )
            }
            <br /> <br />
            {
                // if data contain albums
                data.albums && data.albums.items.length > 0 && (
                    <Fragment>
                        <h2 className='text-6xl font-bold text-gray-100 font-mono'
                            style={{
                                textShadow: '0 0 25px #fff, 0 0 25px #fff, 0 0 25px #fff'
                            }}
                        >
                            Albums
                        </h2>
                        <br />
                        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                            {
                                data.albums.items.map((album: any) => (<Card key={album.id} album={album} />))
                            }

                        </div>
                    </Fragment>
                )
            }
            <br /> <br />

            {
                data.tracks && data.tracks.items.length > 0 && (
                    <Fragment>
                        <h2 className='text-6xl font-bold text-gray-100 font-mono'
                            style={{
                                textShadow: '0 0 25px #fff, 0 0 25px #fff, 0 0 25px #fff'
                            }}
                        >
                            Tracks
                        </h2>
                        <br />
                        <div
                            className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'
                        >
                            {
                                data.tracks.items.map((track: any) => (
                                    <TrackCard key={track.id} track={track} />
                                ))
                            }

                        </div>
                    </Fragment>
                )
            }
            <br /> <br />

            {
                data.playlists && data.playlists.items.length > 0 && (
                    <Fragment>
                        <h2 className='text-6xl font-bold text-gray-100 font-mono'
                            style={{
                                textShadow: '0 0 25px #fff, 0 0 25px #fff, 0 0 25px #fff'
                            }}
                        >
                            Playlists
                        </h2>
                        <br />
                        <div
                            className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'
                        >
                            {
                                data.playlists.items.map((playlist: any) => (
                                    <CardPaylist key={playlist.id} playlist={playlist} />
                                ))
                            }
                        </div>
                    </Fragment>
                )
            }
        </div>
    )
}
