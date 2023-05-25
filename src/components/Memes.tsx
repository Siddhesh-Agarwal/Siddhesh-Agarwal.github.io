import React from "react";
import axios from "axios";


type ResponseType = {
    url: string,
    sourceUrl: string,
    thumbnail: string,
    media: string,
    upvotes: number,
    title: string,
    permalink: string,
    source: string,
    posted: string,
}

async function getMeme(): Promise<string> {
    const options = {
        method: 'GET',
        url: 'https://programmer-humor.p.rapidapi.com/api/reddit',
        params: {
            timeframe: 'today',
            subreddit: 'programmerhumor',
            sorting: 'best',
            limit: '1'
        },
        headers: {
            'X-RapidAPI-Key': 'e19f8cc367msh35b2dc94e345c7ep185b36jsn5751c67a0e57',
            'X-RapidAPI-Host': 'programmer-humor.p.rapidapi.com'
        }
    };
    const { data } = await axios.request<ResponseType>(options);
    return data.media;
}

export default function showMeme() {
    const meme = getMeme();
    return (
        <div className="bg-white rounded-3 border shadow d-grid center">
            <img src={meme} alt="Meme" className="img-fluid md:w-1/2" />
        </div>
    )
}
