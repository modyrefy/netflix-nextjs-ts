import {FC} from "react";
import {BannerRequestModel} from "../../models";
 export const Banner:FC<{props:BannerRequestModel}>=({props})=> {
//export const Banner:FC<{}>=(props)=>{
     console.log('props', props)
     //const{request}=props;
     return (<>
         <button onClick={()=>{}}>Play</button>
         <h3>{props.title}</h3>
         <h3>{props.subTitle}</h3>
         <div style={{
             backgroundImage: `url(${props.imgUrl})`,
             width:'100%',
             height:'100%',
             position:'absolute',
             backgroundSize:'cover',
             backgroundPosition:"50% 50%"
         }}></div>
     </>)
 };