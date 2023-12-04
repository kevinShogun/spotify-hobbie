'use client'
import { useState } from 'react';
import { MagicMotion } from "react-magic-motion";
import { getAccessToken } from '../lib/data';
import { DataSearch } from '@/components/DataSearch';

export default function SearchPage() {

    const [inputValue, setinputValue] = useState("");
    const [selectValue, setSelectValue] = useState<string[]>(["artist"]);
    const [data, setdata] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const onSearch = async () => {
        if (inputValue === "") return;
        console.log(inputValue, selectValue);
        setIsLoading(true);
        let query = "";
        selectValue.forEach((value) => {
            query += value + ",";
        })
        query = query.slice(0, -1);
        console.log(query);
        const dataAuth = await getAccessToken();
        const res = await fetch(`https://api.spotify.com/v1/search?q=${inputValue}&type=${query}&limit=5&include_external=audio`, {
            headers: {
                'Authorization': 'Bearer ' + dataAuth.access_token
            }
        });
        const data = await res.json();
        setdata(data);
        setIsLoading(false);

    }

    return (
        <main
            className="flex flex-col items-center justify-center w-full flex-1 px-5 md:px-20 text-center py-8"
        >
            <h1 className="text-4xl font-bold">
                Search
            </h1>

            <div className="flex justify-center items-center w-full md:w-[80%]">
                <input
                    type="text"
                    className="mt-8 px-4 py-2 h-10 border border-gray-300 rounded-l-xl w-full max-w-xl focus:outline-none
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
                    className="mt-8 px-4 h-10 border border-gray-300 w-28  focus:outline-none 
                    text-zinc-900 font-medium transition duration-150 ease-in-out sm:text-sm sm:leading-5
                    backdrop-filter backdrop-blur-xl bg-white bg-opacity-80 scroll-smooth"
                    onChange={(e) => {
                        setSelectValue((prev) => {
                            if (prev.includes(e.target.value)) {
                                return [...prev]
                            } else {
                                return [...prev, e.target.value]
                            }

                        })
                    }}
                >
                    <option value="artist">Artist</option>
                    <option value="album">Album</option>
                    <option value="track">Track</option>
                    <option value="playlist">Playlist</option>
                    <option value="show">Show</option>
                    <option value="episode">Episode</option>
                </select>
                <button
                    className="mt-8 px-4 py-2 h-10 border border-gray-300 rounded-r-xl w-28  focus:outline-none
                    text-zinc-900 font-medium transition duration-150 ease-in-out sm:text-sm sm:leading-5
                    backdrop-filter backdrop-blur-xl bg-white bg-opacity-80
                    hover:bg-opacity-90 hover:bg-gray-100"
                    onClick={onSearch}
                >
                    Search
                </button>
            </div>
            <div
                className="flex flex-wrap items-center justify-center w-full mt-3 gap-2"
            >
                {selectValue.map((value) => {
                    return (
                        <MagicMotion key={value}>
                            <div
                                className='px-4 relative py-2 ring-1 rounded-md w-28  
                                        focus:outline-none ring-gray-300 first-letter:uppercase'
                            >
                                {value}
                                <button
                                    className='absolute right-1 top-1 
                                            rounded-full text-xs px-[4px] border border-white bg-red-500'
                                    onClick={(e) => {
                                        setSelectValue((prev) => {
                                            return prev.filter((val) => {
                                                return val !== value
                                            })
                                        })
                                    }}
                                >
                                    &times;
                                </button>
                            </div>
                        </MagicMotion>
                    )
                })}
            </div>
            {
                isLoading && (
                    <div className="mt-10">
                        <MagicMotion>
                            <h2 className="text-2xl font-bold">
                                Loading...
                            </h2>
                        </MagicMotion>
                    </div>
                )
            }
            {data && !isLoading && <DataSearch data={data} />}
        </main>
    )

}