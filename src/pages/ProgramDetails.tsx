import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import ProgramCard from '../ProgramCard';
import {IProgram} from '../interfaces'

const ProgramDetails = () => {
    const {id} = useParams()
    
    const [program, setProgram] = useState<IProgram|null>(null)

      async function fetchPrograms (url:string) {
        console.log(url)
        const response = await fetch(url);
        const data = await response.json();
        
        return data
        
    }

    useEffect (() => {
    async function fetchData() {
        try {
            const data = await fetchPrograms(`http://api.sr.se/api/v2/programs/${id}?format=json`);
            console.log(data.program)

            const programInfo = {
            description:data.program.description,
            programurl:data.program.programurl,
            image:data.program.programimage,
            name:data.program.name,
            id:data.program.id,
            broadcastinfo:data.program.broadcastinfo,
            //haspod:program.haspod,
        }
            setProgram(programInfo);

        } catch (error) {
            console.error('Error fetching programs:', error);
        }
    }

    fetchData();
}, []);

    //  get the pod:  const url = `http://api.sr.se/api/v2/podfiles?programid=${id}`

    
    // hämta avsnitt { (episodes.) id title description }
    // sändningar podd avsnitt ???
    
    return ( 
        <>
        <h1>Program details</h1>

       {program && <ProgramCard id={program.id} image={program.image} name={program.name} description={program.description} broadcastinfo={program.broadcastinfo}/>}
             
       
        </>
     );
}
 
export default ProgramDetails;