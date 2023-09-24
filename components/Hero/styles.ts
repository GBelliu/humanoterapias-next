import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: transparent;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 490px;
  /* background-image: url("./fundoheroedit.png");
  background-repeat: no-repeat;
  background-size: cover; */
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(4, 4, 48, 1) 100%
  );
  margin-top: 75px;
`;

export const Content = styled.div`
  max-width: 964px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 75px 0;
  gap: 25px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const LeftContent = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-flow: column;
  gap: 25px;
  h1 {
    font-size: 48px;
    color: #fff;
    font-weight: 700;
    line-height: normal;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }

  button {
    width: fit-content;
    padding: 15px 35px;
    background-color: #fff;
    color: #040439;
    font-size: 18px;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
    box-shadow: 0px 5px 7px -3px rgba(255, 255, 255, 0.2);
    &:hover {
      transform: scale(1.03) translateZ(0);
    }
    &:active {
      transform: scale(0.95) translateZ(0) !important;
    }
  }
`;
export const RightContent = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-flow: column;
  gap: 25px;

  div {
    display: flex;
    flex-flow: column;
    gap: 5px;
    h1 {
      font-size: 36px;
      color: #fff;
      font-weight: 600;
    }
    h2 {
      font-size: 20px;
      color: #fff;
      font-weight: 400;
      max-width: 800px;
    }
  }

  p {
    font-size: 18px;
  }
`;
