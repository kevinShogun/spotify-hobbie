"use client"
import { Card } from '@/components/Card';
import Head from 'next/head';
import Link from 'next/link';
import { useState, Fragment } from 'react';

export default function Albums() {

    const [data, setData] = useState<any>(null)

    const getAccessToken = async () => {
        const authOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(process.env.NEXT_PUBLIC_CLIENT_ID + ':' + process.env.NEXT_PUBLIC_SECRET_ID)
            },
            body: 'grant_type=client_credentials'
        };

        try {
            const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
            if (response.ok) {
                const data = await response.json();
                return data;
            }
            throw new Error('Failed to get access token');
        } catch (error) {
            console.error('Error getting access token:', error);
            throw error;
        }
    };

    const getData = async () => {
        const dataAuth = await getAccessToken();
        const res = await fetch('https://api.spotify.com/v1/albums?ids=4SeaFQDKygggRW9lrmwAhy,3p7m1Pmg6n3BlpL9Py7IUA,5mlDG9NLNDK2z7ywl0S9Tu,2qLUbpegALjk479sfnPGso,3q3DB4fElKDIDE2bXTLFlb,4PEABR7YvIEbmrtdBXl8H9,7qAcXJgt1PWnxwUgxMdyuk', {
            headers: {
                'Authorization': 'Bearer ' + dataAuth.access_token
            }
        })
        const data = await res.json();
        setData(data);
        console.log(data);
    }

    return (
        <Fragment>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 py-8 text-center">
                <h1 className="text-6xl font-bold">
                    Albums
                </h1>
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
                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    {
                        data && data.albums.map((album: any) => {
                            if (album) {
                                return (
                                    <Card key={album.id} album={album} />
                                )
                            }
                        })
                    }
                </div>
                <br />
                <button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 
                    hover:from-pink-500 hover:to-orange-500
                    text-white font-bold py-2 px-4 rounded z-50
                    transition-all duration-500 ease-linear"
                    onClick={getData}
                    disabled={data}
                >
                    Get albums
                </button>
            </main>

        </Fragment>
    )
}