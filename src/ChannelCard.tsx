import "./channelCard.css"
import { useNavigate } from "react-router-dom";

interface IChannelCardProps {
    index:string,
    image:string,
    name:string,
    tagline:string,
    live:string,
    id:string,

}

const ChannelCard = (props:IChannelCardProps) => {
     const navigate = useNavigate();


    function handleClick(event: MouseEvent<HTMLImageElement, MouseEvent>): void {
        console.log(props.id)
        navigate(`/channel/details/${props.id}`);
       
    }

    return ( 
        <>
        <div key={props.index} className='channel-card'>  
            <div>         
                <img src={props.image} className="channel-image" onClick={handleClick}/>
                <p className="channel-name"> {props.name}</p>
                <p>{props.tagline}</p>
            </div>
            <div >
                <h3>Lyssna live</h3>
                 <audio controls>
                    <source src={props.live} type="audio/mpeg" />
                    
                    Your browser does not support the audio tag.
                </audio> 
                
                
            </div>
        </div>
        </>
     );
}
 
export default ChannelCard;