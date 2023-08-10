"use client";

import { Container, Content, LeftContent } from "./styles";

export function Hero() {
  return (
    <Container>
      <Content>
        <LeftContent>
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            praesentium minima numquam explicabo id, ex voluptate et quia
            doloribus architecto fugit ullam excepturi illum, repellendus
          </h2>
          <button>
            <p>Marcar consulta</p>
          </button>
        </LeftContent>
        <img src="./mesa.jpg" alt="" />
      </Content>
    </Container>
  );
}
