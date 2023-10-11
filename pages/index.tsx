import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MoviesPage from "./movies";
import { getAllMovies } from "@/mock/data/movies";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const movies = getAllMovies();
  return (
    <>
      <section>
        <h1>Välkommen till MovieFlix!</h1>
        <p role="paragraph">Vi erbjuder de senaste filmerna och TV-serierna</p>
      </section>
      <hr />
      <MoviesPage movies={movies}></MoviesPage>
    </>
  );
}
