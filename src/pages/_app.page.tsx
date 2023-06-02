import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Roboto_Mono } from "next/font/google";
const robotoMono = Roboto_Mono({ subsets: ["latin"] });


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Barbershop Reviews | Home </title>
      </Head>
      <main className={robotoMono.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
