import { useEffect, useState } from "react";
import "./Program.css"
import ProgramCard from "../ProgramCard";

interface IProgram {
    description:string,
    programurl:string,
    programimage:string,
    name:string,
    id:string
}

interface ICategory {
    name:string,
    id:string
}

const Program = () => {
    const [programs, setPrograms] = useState<IProgram[]>([])
    const [categories, setCategories] = useState<ICategory[]>([])
     const [category, setCategory] = useState<ICategory>({})

    async function fetchPrograms (url) {

        const response = await fetch(url);
        const data = await response.json();

        const programInfo:IProgram[] = data.programs.map( program => ({
            description:program.description,
            programurl:program.programurl,
            programimage:program.programimage,
            name:program.name,
            id:program.id
        }))
        
        return programInfo
    }
    

     async function fetchCategory () {

        const response = await fetch("http://api.sr.se/api/v2/programcategories?format=json&size=15");
        const data = await response.json();

        console.log(data.programcategories)
        const categoryInfo:ICategory[] = data.programcategories.map( category => ({
        
            name:category.name,
            id:category.id
        }))
        
        return categoryInfo
    }

    useEffect (() => {
       
        
    async function fetchData() {
        try {
            const programInfo = await fetchPrograms("http://api.sr.se/api/v2/programs?format=json");
            setPrograms(programInfo);
            const categoryInfo = await fetchCategory();
            setCategories(categoryInfo);

        } catch (error) {
            console.error('Error fetching programs:', error);
        }
    }

    fetchData();
}, []);


    useEffect (() => {

        async function fetchData() {
        try {

            const url = `http://api.sr.se/api/v2/programs/index?format=json&programcategoryid=${category}`
            const programInfo = await fetchPrograms(url);
            setPrograms(programInfo);

        } catch (error) {
            console.error('Error fetching programs:', error);
        }
    }

    fetchData();

    },[category])


    const onOptionChangeHandler = async (event) => {
        setCategory(event.target.value);
      
    };

    return ( 
        <>

            <div>
                <label for="category" >Kategori</label>
                <select id="category" name="category" onChange={onOptionChangeHandler}>
                    <option selected disabled >Välj kategori</option>

                    {categories && categories.map((category, index) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ) )}
                    
                </select>
            </div>
            <div className='program-container'>
                {/* Loopa genom den nya arrayen av objekt */}
                {programs && programs.map((program, index) => (
                    <ProgramCard  key={program.id} id={program.id} image={program.programimage} name={program.name} description={program.description}/>
                  
                ))}
            </div>
        </>
     );
}
 
export default Program;