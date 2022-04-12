import {FC} from "react";
import Link from "next/link";
import clsx from "classnames";
import {Card} from "./card";
import {default as sectionStyles} from "./sectionCards.module.css";
import {default as HomeStyles} from "../../styles/Home.module.css";
import {CardSectionRequestModel} from "../../models";
export const SectionCards:FC<{props:CardSectionRequestModel}>=({props})=> {
    return (
        <section className={sectionStyles.container}>
            <h2 className={sectionStyles.title}>{props.title}</h2>
            <div className={clsx(sectionStyles.cardWrapper, props.shouldWrap && sectionStyles.wrap)}>
                {props.videos && props.videos.map((vid, index) => {
                    return (
                        <Link key={`video${vid.id}`} href={`/video/${vid.id}`}>
                            <a>
                                <Card props={{ size:props.size,  shouldScale: props.shouldScale ,id:index,imgUrl:vid.imgUrl}}/>
                            </a>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}