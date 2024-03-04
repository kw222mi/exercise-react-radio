export interface IChannel{
    name: string,
    id: string,
    image: string,
    siteurl: string,
    liveaudio: string,
    [key: string]: unknown

}

export interface IRoute {
  id: number;
  name: string;
  path: string;
}