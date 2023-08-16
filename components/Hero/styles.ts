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
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 75px 0;
  gap: 25px;
  h1 {
    font-size: 40px;
    color: #000;
  }
  h2 {
    font-size: 20px;
    color: #1a1a1a;
    font-weight: 400;
    max-width: 800px;
  }

  button {
    width: fit-content;
    padding: 15px 20px;
    background-color: #f9f9ff;
    color: #004aad;
    border: 1px solid #338bff;
    border-radius: 40px;
    cursor: pointer;
    transition: 0.4s all ease-in-out;

    &:hover {
      background-color: #338bff;
      border: none;
      color: #fff;
      box-shadow: 0px 10px 15px -3px rgba(51, 139, 255, 0.2);
    }

    p {
      font-size: 18px;
      font-weight: 500;
    }
  }
  img {
    width: 100%;
    border-radius: 10px;
  }
`;
