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
  width: 300px;
  height: 100%;
  div {
    height: 400px;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export const RightContent = styled.div`
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

  button {
    width: fit-content;
    padding: 15px 20px;
    background-color: #040439;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 40px;
    cursor: pointer;
    transition: 0.4s all ease-in-out;

    &:hover {
      background-color: #fff;
      border: none;
      color: #3f5efb;
      box-shadow: 0px 10px 15px -3px rgba(51, 139, 255, 0.2);
    }

    p {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;
