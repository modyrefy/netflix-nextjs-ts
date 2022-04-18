import React, {FC, useEffect, useState} from "react";
import {NavBarRequestModel} from "../../models";
import styles from "./navbar.module.css";
import Link from 'next/link'
import Image from "next/image";
import {useRouter} from "next/router";
import {magic} from "../../lib/magic-client";
import {isAwaitExpression} from "tsutils";
export const NavBar:FC<{}>=({})=> {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [didToken, setDidToken] = useState<string>("");
    const router = useRouter();
    // @ts-ignore
    useEffect( () => {
        const getData = async () => {
            try {
                // @ts-ignore
                const {email, issuer} = await magic.user.getMetadata();
                console.log('email',email);
                // @ts-ignore
                const didToken = await magic.user.getIdToken();
                if (email) {
                    setUsername(email);
                    setDidToken(didToken);
                }
            } catch (error) {
                console.error("Error retrieving email", error);
            }

        }
        getData();
    }, []);
    const handleSignout =async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        try {
            // @ts-ignore
            await magic.user.logout();
        } catch (error) {
            console.error("Error logging out", error);
            router.push("/login");
        }
    };
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
                            <p className={styles.username}>{username}</p>
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
                                    <a className={styles.linkName} onClick={handleSignout}>Sign out</a>
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