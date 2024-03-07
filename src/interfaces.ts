export interface IChannel{
    name: string,
    id: string,
    image: string,
    siteurl: string,
    liveaudio: string,
    tagline:string,
    [key: string]: unknown

}

export interface IRoute {
  id: number;
  name: string;
  path: string;
}

export interface IProgram {
   id:string,
    image:string,
    name:string,
    description:string
    broadcastinfo?:string
    haspod?:boolean
    programurl?:string
}

export interface IEpisode {
  description:string,
  start:string,
  end:string,
  image:string,
  title:string,
  id:string


}