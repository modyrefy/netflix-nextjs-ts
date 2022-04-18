import {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Login.module.css";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {magic} from "../lib/magic-client";
const Login: NextPage = (props) => {
    const [email, setEmail] = useState<string>("");
    const [userMsg, setUserMsg] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const handleComplete = () => {
            setIsLoading(false);
        };
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [router]);

    const handleOnChangeEmail = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUserMsg("");
        const email = event.target.value;
        setEmail(email);
    };

    const handleLoginWithEmail=async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (email) {
            // log in a user by their email
            try {
                setIsLoading(true);
                // @ts-ignore
                const dldToken = await magic.auth.loginWithMagicLink({email: email});

                if(dldToken) {
                    //console.log('dldToken', dldToken)
                    setIsLoading(false);
                }
            } catch (error) {
                // Handle errors if required!
                console.error("Something went wrong logging in", error);
                setIsLoading(false);
            }
        } else {
            // show user message
            setIsLoading(false);
            setUserMsg("Enter a valid email address");
        }
    };

    return(
        <div className={styles.container}>
            <Head>
                <title>Netflix SignIn</title>
            </Head>

            <header className={styles.header}>
                <div className={styles.headerWrapper}>
                    <Link href="/">
                        <a className={styles.logoLink} >
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

                </div>
            </header>
            <main className={styles.main}>
                <div className={styles.mainWrapper}>
                    <h1 className={styles.signinHeader}>Sign In</h1>
                    <input
                        type="text"
                        placeholder="Email address"
                        className={styles.emailInput}
                        onChange={handleOnChangeEmail}
                    />
                    <p className={styles.userMsg}>{userMsg}</p>
                    <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
                        {isLoading ? "Loading..." : "Sign In"}
                    </button>
                </div>
            </main>
        </div>

    )
}
export default Login;