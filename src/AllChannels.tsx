import React, { useState, useEffect } from 'react';

const AllChanels = () => {
    const [channelsData, setChannelsData] = useState([]);

    useEffect(() => {
        fetch("http://api.sr.se/api/v2/channels?format=json")
            .then((response) => response.json())
            .then((data) => {
                // Skapa nya objekt med namn och ID från varje kanalobjekt
                const channelsInfo = data.channels.map(channel => ({
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
            {/* Loopa genom den nya arrayen av objekt */}
            {channelsData.map((channel, index) => (
                <div key={index}>
                    <p> {channel.name}</p>

                    <img src={channel.image} height={"30px"} width={"30px"}/>
                </div>
            ))}
        </>
    );
}

export default AllChanels;
