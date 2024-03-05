import "./channelCard.css"

interface IChannelCardProps {
    index:string,
    image:string,
    name:string,
    tagline:string,
    live:string,

}

const ChannelCard = (props:IChannelCardProps) => {

    console.log(props.live)
    return ( 
        <>
        <div key={props.index} className='channel-card'>  
            <div>         
                <img src={props.image} className="channel-image"/>
                <p className="channel-name"> {props.name}</p>
                <p>{props.tagline}</p>
            </div>
            <div >

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