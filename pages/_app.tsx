import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Loading} from "../components/loading";
import MainLayout from "./layout/mainlayout";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
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

  // @ts-ignore
  // const getLayout = Component.getLayout || ((page: any) => page)
  //
  // if (Component.getLayout) {
  //   return isLoading ? <Loading/> : getLayout(<Component {...pageProps} />)
  // } else {
  //   return isLoading ? <Loading/> :
  //       <MainLayout   >
  //         <Component {...pageProps} />
  //       </MainLayout>
  //
  // }
  return isLoading ? <Loading/> : <Component {...pageProps} />
}

export default MyApp
