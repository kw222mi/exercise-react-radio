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
            <img src={props.image} height={"60px"} width={"60px"}/>
            <p> {props.name}</p>
            <p>{props.tagline}</p>
            <button>Live</button>

        </div>
        </>
     );
}
 
export default ChannelCard;