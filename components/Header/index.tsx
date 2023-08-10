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
          <Link href={""}>Home</Link>
          <Link href={""}>Sobre</Link>
          <Link href={""}>Método</Link>
          <Link href={""}>Dúvidas</Link>
        </ItemsMenu>
      </Content>
    </Container>
  );
}
