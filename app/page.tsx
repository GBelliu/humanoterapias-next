import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { TerapiaHolistica } from "@/components/TerapiaHolistica";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <TerapiaHolistica />
      {/* <Sobre /> */}
      <Footer />
    </main>
  );
}
