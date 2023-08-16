import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: transparent;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  max-width: 964px;
  width: 100%;
  height: fit-content;
  display: grid;
  gap: 50px;
  align-items: center;
  grid-template-columns: 1fr 1fr;
`;
export const LeftContent = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  h1 {
    color: black;
  }
  p {
    color: black;
  }
`;
export const RightContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
    border-radius: 40px;
  }
`;
