import {FC, useState} from "react";
import {NavBarRequestModel} from "../../models";
import styles from "./navbar.module.css";
import Link from 'next/link'
import Image from "next/image";
export const NavBar:FC<{props:NavBarRequestModel}>=({props})=> {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link href="/">
                    <a className={styles.logoLink}>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/static/netflix.svg"
                                alt="Netflix logo"
                                width="128px"
                                height="34px"
                            />
                        </div>
                    </a>
                </Link>

                <ul className={styles.navItems}>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className={styles.navItem2}>
                        <Link href="/browse/myList">
                            <a>My List</a>
                        </Link>
                    </li>
                </ul>

                <nav className={styles.navContainer}>
                    <div>
                        <button className={styles.usernameBtn} onClick={() => setShowDropdown(!showDropdown)}>
                            <p className={styles.username}>{props.userName}</p>
                            <Image
                                src={"/static/expand_more.svg"}
                                alt="Expand dropdown"
                                width="24px"
                                height="24px"
                            />
                        </button>
                        {showDropdown &&
                        <div className={styles.navDropdown}>
                            <div>
                                <Link href="/login">
                                    <a className={styles.linkName}>Sign out</a>
                                </Link>
                                <div className={styles.lineWrapper}></div>
                            </div>

                        </div>
                        }
                    </div>
                </nav>
            </div>
        </div>)
}