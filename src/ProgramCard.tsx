import "./programCard.css"

interface IProgramCardProps {
    id:string,
    image:string,
    name:string,
    tagline:string

}

const ProgramCard = (props:IProgramCardProps) => {
    return ( 
        <>
        <div key={props.id} className='program-card'>  
            <div>         
                <img src={props.image} className="program-image"/>
                <p className="program-name"> {props.name}</p>
                <p>{props.tagline}</p>
            </div>
           
        </div>
        </>
     );
}
 
export default ProgramCard;