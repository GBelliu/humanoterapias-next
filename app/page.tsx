import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

import { Footer } from "@/components/Footer";
import { MetodologiaHumanoterapeuta } from "@/components/MetodologiaHumanoterapeuta";
import { Humanoterapia } from "@/components/Humanoterapia";
import { Sobre } from "@/components/Sobre";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      {/* <Sobre /> */}
      <Humanoterapia />
      <MetodologiaHumanoterapeuta />

      <Footer />
    </main>
  );
}
