import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Kaushan_Script, Kodchasan } from "next/font/google";


const kaushan = Kaushan_Script({ subsets: ['latin'], variable: '--font-kaushan', weight: ['400'] })
const kodchasan = Kodchasan({ subsets: ['latin'], variable: '--font-kodchasan', weight: ['200', '300', '400', '500', '600'] })

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${kaushan.variable} ${kodchasan.variable}`}>
    <Component {...pageProps} />
  </main>;
}
