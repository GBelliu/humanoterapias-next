import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";

import { Footer } from "@/components/Footer";
import { MetodologiaHumanoterapeuta } from "@/components/MetodologiaHumanoterapeuta";
import { Humanoterapia } from "@/components/Humanoterapia";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Humanoterapia />
      <MetodologiaHumanoterapeuta />
      {/* <Sobre /> */}
      <Footer />
    </main>
  );
}
