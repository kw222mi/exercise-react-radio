import "./episodeCard.css"

interface IEpisodeCardProps {
    description:string,
    start:string,
    end:string,
    image:string,
    title:string,
    id:string

}

const EpisodeCard = (props:IEpisodeCardProps) => {

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

let start = new Date(Number(props.start));
let end = new Date(Number(props.end))

let year = start.getFullYear();
let month = addLeadingZero(start.getMonth() + 1); // Månader är nollindexerade, så vi lägger till 1
let date = addLeadingZero(start.getDate());

let hours = addLeadingZero(start.getHours());
let minutes = addLeadingZero(start.getMinutes());
let seconds = addLeadingZero(start.getSeconds());

let endhours = addLeadingZero(end.getHours());
let endminutes = addLeadingZero(end.getMinutes());
let endseconds = addLeadingZero(end.getSeconds());

console.log(`Startdatum: ${year}-${month}-${date}`);
console.log(`Starttid: ${hours}:${minutes}:${seconds}`);

let totalDate = `${year}-${month}-${date}`
let startTime = `${hours}:${minutes}`
let endTime = `${endhours}:${endminutes}`



    function handleClick(event: MouseEvent<HTMLImageElement, MouseEvent>): void {
        console.log(`Episode: ${props.id}`)
    }

    return ( 
        <>
        <div key={props.id} className='episode-card'>  
            <div>         
                <img src={props.image} className="episode-image" onClick={handleClick}/>
                <p className="episode-name"> {props.title}</p>
                  <div>
                    <span>Sändningstid: {startTime} - </span><span>{endTime}</span>
                </div>
                
                <p>{props.description}</p>
                
            </div>
          
            
           
        </div>
        </>
     );
}
 
export default EpisodeCard;