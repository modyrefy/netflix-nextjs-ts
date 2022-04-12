export interface CardSectionRequestModel{
    title:string,
    videos:VideoRequestModel[],
    size:string,
    shouldWrap:boolean,
    shouldScale:boolean
}
export  interface VideoRequestModel{
    id:string,
    imgUrl:string,

}