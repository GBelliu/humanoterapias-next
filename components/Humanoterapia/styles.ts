import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  height: fit-content;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 75px 0;
  gap: 40px;
  h1 {
    color: black;
  }
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 100%;
    height: 400px;
    background-color: #dbdbdb;
  }
`;
export const RightContent = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  h2 {
    color: black;
  }
  p {
    color: black;
  }
`;
