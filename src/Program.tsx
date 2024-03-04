import { useEffect, useState } from "react";
import "./Program.css"

interface IProgram {
    description:string,
    programurl:string,
    programimage:string,
    name:string,
    id:number
}

const Program = () => {
    const [programs, setPrograms] = useState<IProgram[]>([])

    async function fetchPrograms () {

        const response = await fetch("http://api.sr.se/api/v2/programs?format=json");
        const data = await response.json();

        const programInfo:IProgram[] = data.programs.map( program => ({
            description:program.description,
            programurl:program.programurl,
            programimage:program.programimage,
            name:program.name,
            id:program.id
        }))
        console.log(data.programs[0].name);
        return programInfo
    }

    useEffect (() => {
    async function fetchData() {
        try {
            const programInfo = await fetchPrograms();
            setPrograms(programInfo);
        } catch (error) {
            console.error('Error fetching programs:', error);
        }
    }

    fetchData();
}, []);


    return ( 
        <>
            <div className='program-container'>
                {/* Loopa genom den nya arrayen av objekt */}
                {programs && programs.map((program, index) => (
                    <div key={index} className='program-div'>
                        
                        <img src={program.programimage} height={"60px"} width={"60px"}/>
                        <p> {program.name}</p>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default Program;