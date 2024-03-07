import React, { useState, useEffect } from 'react';
import "./allChannels.css"
import {IChannel} from "../interfaces"
import ChannelCard from '../ChannelCard';


const AllChanels: React.FC = () => {
    const [channelsData, setChannelsData] = useState<IChannel[]>([]);

    useEffect(() => {
         const abortCont = new AbortController ();


        fetch("http://api.sr.se/api/v2/channels?format=json", {signal: abortCont.signal})
            .then((response) => {
                if(!response.ok){
                    throw Error('Could not fetch the data')
                }
                  return response.json() })

            .then((data) => {
                // Skapa nya objekt med namn och ID från varje kanalobjekt
                const channelsInfo:IChannel[] = data.channels.map(channel => ({
                    name: channel.name,
                    id: channel.id,
                    image: channel.image,
                    siteurl: channel.siteurl,
                    liveaudio: channel.liveaudio.url,
                    tagline: channel.tagline
                }));
                // Uppdatera state med den nya arrayen av objekt
                setChannelsData(channelsInfo);
                console.log(channelsData)
            })
            .catch(error => {
                if(error.name === 'AbortError'){
                    console.log('abort error')
                } else {
                    console.error('Error fetching channels:', error)
                }
            } );

            return () => abortCont.abort()
    }, []);

    return (
        <>
            <div className='channel-container'>
                {/* Loopa genom den nya arrayen av objekt */}
                {channelsData && channelsData.map((channel, index) => (
                    <ChannelCard index={index} id={channel.id} image={channel.image} name={channel.name} tagline={channel.tagline} live={channel.liveaudio}/>
                   
                ))}
            </div>
        </>
    );
}

export default AllChanels;
