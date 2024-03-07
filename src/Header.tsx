import {Link} from 'react-router-dom'
import { IRoute } from "./interfaces";
import "./Header.css"
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { SearchResultsList } from './SearchResultList';

interface IHeaderProps {
    links:IRoute[]
}

export function Header(props: IHeaderProps): JSX.Element {
     const [input, setInput] = useState<string>("");
     const [programs, setPrograms] = useState([]);

    async function fetchPrograms (url:string) {
        console.log(url)
        const response = await fetch(url);
        const data = await response.json();
        
        return data
        
    }

   
    async function fetchData() {
        try {
            const data = await fetchPrograms(`http://api.sr.se/api/v2/episodes/search/?query=${input}&format=json`);

            console.log(data.episodes)
            
            
            const episodeInfo = data.episodes.map( episode => ({
            
            programimage:episode.imageurl,
            name:episode.title,
            id:episode.id
        }))
            setPrograms(episodeInfo);
            console.log(programs)
            

        } catch (error) {
            console.error('Error fetching programs:', error);
        }
    }

    


   

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        setInput(event.target.value)
        fetchData();
    }

    return (
        <>
        <header className="header">
            <div className="input-wrapper">

           <input
        placeholder="sök avsnitt..."
        value={input}
        onChange={(event) => handleChange(event)}
      />
            </div>
            <nav className="navbar">
                {props.links.map((link) => (
                        <Link className="link" to={link.path} key={link.id}>
                            {link.name}
                        </Link>
                ))}
            </nav>
        </header>
         {programs && programs.length > 0 && <SearchResultsList programs={programs} />}
        
        </>
    )

}