"use client";

import { ReactNode } from "react";

import { Container, Content, ItemsMenu } from "./styles";
import Link from "next/link";

export function Header() {
  return (
    <Container>
      <Content>
        <h1>Logo</h1>
        <ItemsMenu>
          <Link href={""}>Sobre mim</Link>
          <Link href={""}>Psicoterapias Holísticas</Link>
          <Link href={""}>Radiestesia Radiônica</Link>
          <Link href={""}>Humanoterapia</Link>
          <Link href={""}>Reiki</Link>
          <Link href={""}>Contato</Link>
          {/* Agendar uma consult CTA */}
        </ItemsMenu>
      </Content>
    </Container>
  );
}
