import {FC} from "react";
import Image from "next/image";
import {useRouter}  from "next/router";
import {BannerRequestModel} from "../../models";
import styles from './banner.module.css';
 export const Banner:FC<{props:BannerRequestModel}>=({props})=> {
    const router=useRouter();
     const handlePlay=()=>{
         router.push(`video/${props.videoId}`);
     }
     return (<div className={styles.container}>
         <div className={styles.leftWrapper}>
             <div className={styles.left}>
                 <h3 className={styles.title}>{props.title}</h3>
                 <h3 className={styles.subTitle}>{props.subTitle}</h3>
                 <div className={styles.playBtnWrapper}>
                     <button className={styles.btnWithIcon} onClick={handlePlay}>
                         <Image
                             src="/static/play_arrow.svg"
                             alt="Play icon"
                             width="32px"
                             height="32px"
                         />
                         <span className={styles.playText}>Play</span>
                     </button>
                 </div>
             </div>
         </div>
         <div className={styles.bannerImg} style={{
             backgroundImage: `url(${props.imgUrl})`,
             width: '100%',
             height: '100%',
             position: 'absolute',
             backgroundSize: 'cover',
             backgroundPosition: "50% 50%"
         }}></div>
     </div>)
 };