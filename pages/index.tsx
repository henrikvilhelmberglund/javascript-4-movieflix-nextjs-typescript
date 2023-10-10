import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section>
        <h1>Välkommen till MovieFlix!</h1>
        <p role="paragraph">Vi erbjuder de senaste filmerna och TV-serierna</p>
      </section>
    </>
  );
}
