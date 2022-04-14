import videoData from '../data/videos.json';
import {VideoRequestModel} from "../models";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUB_API_KEY;
const BASE_URL = "youtube.googleapis.com/youtube/v3";

export const getCommonVideos=async (url:string): Promise<VideoRequestModel[]> => {
    let result: VideoRequestModel[] = [];
    //const url:string=`search?part=snippet&maxResults=25&&q=${searchQuery}&type=video`;
    try {
        const response = await fetch(
            `https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`
        );
        const data = await response.json();
        if (data?.error) {
            console.error("Youtube API error", data.error);
            return [];
        }
        //if(data !=null && data.items!=null && data.items.length!=0) {
        data?.items?.map((row: any, index: number) => {
            console.log(index, row.id);
            result.push(
                {
                   // id: row.id.videoId != null && row.id.videoId != undefined ? row.id.videoId : index.toString(),// row?.id?.videoId,
                    id: row.id?.videoId || row.id,
                    title: row.snippet.title,
                    imgUrl: row.snippet.thumbnails.high.url
                })
        });
        //}
        //console.log('youtube-result', result)
    }catch (error) {
        console.error("Something went wrong with video library", error);
        return [];
    }
    return result;
}
export const getVideos = (searchQuery:string) => {
    const url = `search?part=snippet&q=${searchQuery}&type=video`;
    return getCommonVideos(url);
};
export const getPopularVideos = () => {
    const url = "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US";

    //videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc
    return getCommonVideos(url);
};