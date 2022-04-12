import {FC, useState} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import cls from "classnames";
import {CardRequestModel} from "../../models";
import styles from "./card.module.css";
export const Card:FC<{props:CardRequestModel}>=({props})=> {

    const [imgSrc, setImgSrc] = useState(props.imgUrl);
    const handleOnError=()=>{
        setImgSrc(
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
        );
    }
    const scale = props.id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

    const shouldHover = props.shouldScale && {
        whileHover: { ...scale },
    };
    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem,
    };
    // @ts-ignore
    return(
        <div className={styles.container}>
            <motion.div
                className={cls(styles.imgMotionWrapper, classMap[props.size])}
                {...shouldHover}
                //whileHover={{scaleY:1.1}}
            >
            <Image
                src={imgSrc}
                onError={handleOnError}
                alt="image"
                layout="fill"
                className={styles.cardImg}
            />
            </motion.div>
        </div>
    )
}