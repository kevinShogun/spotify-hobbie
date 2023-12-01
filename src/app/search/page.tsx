'use client'
import { useState } from 'react';
import SearchLayout from "./layout";

export default function SearchPage() {

    const [inputValue, setinputValue] = useState("");

    return (
            <main
                className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center py-8"
            >
                <h1 className="text-4xl font-bold">
                    Search
                </h1>

                <div className="flex w-[80%]">
                    <input
                        type="text"
                        className="mt-8 px-4 py-2 border border-gray-300 rounded-l-xl w-full max-w-xl focus:outline-none
                    text-zinc-900 font-medium transition duration-150 ease-in-out sm:text-sm sm:leading-5
                    backdrop-filter backdrop-blur-xl bg-white bg-opacity-80 "
                        placeholder="Search for an artist"
                        style={{
                            backdropFilter: "blur(800px)",
                            fontSize: "1.25rem"
                        }}
                        value={inputValue}
                        onChange={(e) => {
                            setinputValue(e.target.value);
                        }}
                    />
                    <select
                        className="mt-8 px-4 py-2 border border-gray-300 w-28  focus:outline-none 
                    text-zinc-900 font-medium transition duration-150 ease-in-out sm:text-sm sm:leading-5
                    backdrop-filter backdrop-blur-xl bg-white bg-opacity-80 scroll-smooth"
                        multiple
                    >
                        <option value="artist">Artist</option>
                        <option value="album">Album</option>
                        <option value="track">Track</option>
                        <option value="playlist">Playlist</option>
                        <option value="show">Show</option>
                        <option value="episode">Episode</option>
                    </select>
                    <button
                        className="mt-8 px-4 py-2 border border-gray-300 rounded-r-xl w-28  focus:outline-none
                    text-zinc-900 font-medium transition duration-150 ease-in-out sm:text-sm sm:leading-5
                    backdrop-filter backdrop-blur-xl bg-white bg-opacity-80
                    hover:bg-opacity-90 hover:bg-gray-100"
                    >
                        Search
                    </button>
                </div>
                {inputValue && inputValue}
            </main>
    )

}