import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChannelDetails = () => {

    const {id} = useParams()
    const [episodes, setEpisodes] = useState([])
    const [programs, setPrograms] = useState([])


       async function fetchPrograms (url:string) {
        console.log(url)
        const response = await fetch(url);
        const data = await response.json();
        
        return data
        
    }

        useEffect (() => {
    async function fetchData() {
        try {
            const data = await fetchPrograms(`http://api.sr.se/api/v2/scheduledepisodes?channelid=${id}&format=json`);
             const episodeInfo:[] = data.schedule.map( schedule => ({
            description:schedule.description,
            start:schedule.starttimeutc,
            end:schedule.endtimeutc,
            image:schedule.imageurl,
            title:schedule.title,
            id:schedule.episodeid
        }))
            setEpisodes(episodeInfo);

        } catch (error) {
            console.error('Error fetching programs:', error);
        }
    }

    fetchData();
}, []);

      useEffect (() => {
    async function fetchData() {
        try {
            const data = await fetchPrograms(`http://api.sr.se/api/v2/programs/index?channelid=${id}&format=json`);

             const programInfo:IProgram[] = data.programs.map( program => ({
            description:program.description,
            programurl:program.programurl,
            programimage:program.programimage,
            name:program.name,
            id:program.id
        }))
            setPrograms(programInfo);


        } catch (error) {
            console.error('Error fetching programs:', error);
        }
    }

    fetchData();
}, []);



    // hämta tablå "http://api.sr.se/api/v2/scheduledepisodes?channelid=164&date=2012-09-01" lägg i informationslista

    // hämta program "http://api.sr.se/api/v2/programs/index?channelid=163"
    return ( 
        <>
        <h1>Tablå</h1>
      
        <p>{episodes && episodes.map((episode) => <p>{episode.title}</p>)}</p>

        <h1>Program</h1>

        <p>{programs && programs.map((program) => <p>{program.name}</p>)}</p>
        </>
     );
}
 
export default ChannelDetails;