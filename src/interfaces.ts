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