import {FC} from "react";
import styles from "./loading.module.css";

export const Loading:FC<{}>=({})=> {
    return <p className={styles.loader}>Loading...</p>;
}