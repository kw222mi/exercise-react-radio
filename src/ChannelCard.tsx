import "./channelCard.css"

interface IChannelCardProps {
    index:string,
    image:string,
    name:string,
    tagline:string

}

const ChannelCard = (props:IChannelCardProps) => {
    return ( 
        <>
        <div key={props.index} className='channel-card'>  
            <div>         
                <img src={props.image} className="channel-image"/>
                <p className="channel-name"> {props.name}</p>
                <p>{props.tagline}</p>
            </div>
            <div >
                
                <button>Live</button>
            </div>
        </div>
        </>
     );
}
 
export default ChannelCard;