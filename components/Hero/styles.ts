import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #004aad;
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
  grid-template-columns: 1fr 1fr;
  padding: 75px 0;
  gap: 75px;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-flow: column;
  gap: 25px;

  h1 {
    font-size: 40px;
    color: #fff;
  }
  h2 {
    font-size: 20px;
    color: #f0f2ff;
    font-weight: 400;
  }

  button {
    width: fit-content;
    padding: 15px 20px;
    background-color: #f0f2ff;
    color: #004aad;
    border: none;
    border-radius: 8px;

    p {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;
