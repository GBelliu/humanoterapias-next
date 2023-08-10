"use client";
import { ReactNode } from "react";

import { Container } from "./styles";

interface DuvidasProps {
  children: ReactNode;
}

export function Duvidas({ children }: DuvidasProps) {
  return (
    <Container>
      <h1>Duvidas</h1>
      {children}
    </Container>
  );
}
