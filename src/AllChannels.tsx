import React, { useState, useEffect } from 'react';
import "./allChannels.css"
import {IChannel} from "./interfaces"



const AllChanels: React.FC = () => {
    const [channelsData, setChannelsData] = useState<IChannel[]>([]);

    useEffect(() => {
        fetch("http://api.sr.se/api/v2/channels?format=json")
            .then((response) => response.json())
            .then((data) => {
                // Skapa nya objekt med namn och ID från varje kanalobjekt
                const channelsInfo:IChannel[] = data.channels.map(channel => ({
                    name: channel.name,
                    id: channel.id,
                    image: channel.image,
                    siteurl: channel.siteurl,
                    liveaudio: channel.liveaudio.url
                }));
                // Uppdatera state med den nya arrayen av objekt
                setChannelsData(channelsInfo);
            })
            .catch(error => console.error('Error fetching channels:', error));
    }, []);

    return (
        <>
            <div className='channel-container'>
                {/* Loopa genom den nya arrayen av objekt */}
                {channelsData && channelsData.map((channel, index) => (
                    <div key={index} className='channel-div'>
                        
                        <img src={channel.image} height={"60px"} width={"60px"}/>
                        <p> {channel.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AllChanels;
