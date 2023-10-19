"use client";

import { ReactNode } from "react";
import { Container, Content } from "./styles";
import { GridContent } from "../../components/elements/GridContent";
import { AltGridContent } from "../../components/elements/AltGridContent";

export default function Reiki() {
  return (
    <Container>
      <h1>Reiki</h1>
      <Content>
        <AltGridContent
          title="O que é"
          description='Reiki é uma terapia holística que utiliza a imposição das mãos para canalizar energia vital para o corpo, mente e espírito de uma pessoa. O objetivo é promover a cura e o bem-estar geral. A palavra "Reiki" é de origem japonesa e significa "energia universal" (rei) e "força vital" (ki). A prática do Reiki foi desenvolvida no início do século XX pelo japonês Mikao Usui.'
          img="./reiki.jpg"
        />
        <GridContent
          title="Como funciona"
          description="Os praticantes de Reiki acreditam que o corpo humano possui um sistema energético que pode ficar bloqueado ou desequilibrado devido a fatores físicos, emocionais ou mentais. O Reiki atua desbloqueando esses bloqueios e reequilibrando a energia do corpo, promovendo a cura e o bem-estar geral. A sessão de Reiki é realizada com o paciente deitado ou sentado, com roupas confortáveis. O praticante de Reiki coloca as mãos sobre o corpo do paciente, em posições específicas, e canaliza a energia vital universal. O paciente pode sentir uma sensação de calor, formigamento ou leveza durante a sessão. Também é comum sentir uma sensação de relaxamento e bem-estar."
          img="./reiki2.jpg"
        />
      </Content>
    </Container>
  );
}
