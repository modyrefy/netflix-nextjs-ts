export interface CardSectionRequestModel{
    title:string,
    videos:VideoRequestModel[],
    size:string,
    shouldWrap:boolean,
    shouldScale:boolean
}
export  interface VideoRequestModel{
    id:string,
    title?:string,
    imgUrl:string,

}