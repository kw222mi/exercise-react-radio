import "./programCard.css"
import {useNavigate} from 'react-router-dom'

interface IProgramCardProps {
    id:string,
    image:string,
    name:string,
    description:string
    broadcastinfo?:string
    hadpos?:boolean

}

const ProgramCard = (props:IProgramCardProps) => {
    const navigate = useNavigate()


    function handleClick(event: MouseEvent<HTMLImageElement, MouseEvent>): void {
        navigate(`/program/details/${props.id}`)
    }

    return ( 
        <>
        <div key={props.id} className='program-card'>  
            <div>         
                <img src={props.image} className="program-image" onClick={handleClick}/>
                <p className="program-name"> {props.name}</p>
                
                <p>{props.description}</p>
                <p>{props.broadcastinfo}</p>
            </div>
           
        </div>
        </>
     );
}
 
export default ProgramCard;