import { useEffect, useState } from "react";
import { IEpisode } from "./interfaces";
import EpisodeCard from "./EpisodeCard";
import "./newEpisodes.css"


const NewEpisodes:React.FC = () => {
    const [episodes, setEpisodes] = useState<IEpisode[]>([])

    async function fetchPrograms (url:string) {
        const response = await fetch(url);
        const data = await response.json();
        return data
    }

         useEffect (() => {
    async function fetchData() {
        try {
            const data = await fetchPrograms(`http://api.sr.se/api/v2/lastpublished?format=json`);
            const episodeInfo:[] = data.shows.map( show => ({


            description:show.description,
            start:dateString(show.starttimeutc),
            end:dateString(show.endtimeutc),
            image:show.imageurl,
            title:show.title,
            id:show.episodeid
        }))
            setEpisodes(episodeInfo);

        } catch (error) {
            console.error('Error fetching programs:', error);
        }
    }

    fetchData();
}, []);

    function dateString (date:string) {
                        
        const cleanedStr = date.replace(/\/|Date|\(|\)/g, ''); // Ersätt "Date", "(" och ")" med tomma strängar
        console.log(cleanedStr); 
        return cleanedStr

    }

  
    return ( 
        <>
        <h1>Nya avsnitt </h1>
        <div className="episode-container" >
            {episodes && episodes.map((episode) => <EpisodeCard
            title={episode.title} description={episode.description} start={episode.start} end={episode.end} image={episode.image} id={episode.id}
            />)}
        </div>
        </>
     );
}
 
export default NewEpisodes;