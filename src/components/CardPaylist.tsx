/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

export const CardPaylist = ({playlist}:any) => {

  return (
    <div className='relative'> 
        <div className='glass
            w-72 h-72 rounded-xl shadow-xl
            md:w-80 md:h-80 pt-3
            2xl:w-96 2xl:h-96 overflow-hidden
            
        '>
            <p className='px-3 text-lg md:text-2xl font-semibold text-gray-100 font-mono line-clamp-1'>
                {playlist.name}
            </p>
            <p className='px-3 text-sm md:text-base text-gray-100 font-sans font-bold'>
                <b>Owner:</b> {playlist.owner.display_name}
            </p>
            <p className='px-3 text-sm md:text-base text-gray-100 font-sans font-bold'>
                {playlist.tracks.total} Tracks
            </p>
            <p className='px-3 text-sm md:text-base text-gray-100 font-sans italic line-clamp-2 text-justify'>
                {
                  // decode html entities
                    <div dangerouslySetInnerHTML={{__html: playlist.description}}
                    className='dgHtml'
                    ></div>
                }
            </p>
            <img
                src={playlist.images[0].url}
                alt={playlist.name}
                className='mt-3 w-36 h-36 rounded-xl shadow-2xl
                hover:shadow-3xl hover:scale-105
                transition duration-300 ease-in-out
                m-auto object-cover'
                onClick={() => {
                    window.open(playlist.external_urls.spotify)
                }}
            />
        </div>
    </div>
  )
}


