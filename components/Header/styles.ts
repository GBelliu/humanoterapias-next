import styled from "styled-components";

export const Container = styled.div`
  height: 75px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 964px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
`;
export const ItemsMenu = styled.div`
  max-width: 964px;
  display: flex;
  justify-content: space-between;
  color: #000;
  gap: 40px;
  a {
    font-size: 20px;
  }
`;
