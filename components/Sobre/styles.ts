import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentArea = styled.div`
  max-width: 964px;
  width: 100%;
  height: fit-content;
  padding: 75px 0;
  display: flex;
  flex-flow: column;
  align-items: center;

  span {
    color: #338bff;
    font-weight: 700;
    font-size: 18px;
  }

  h1 {
    color: #000;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 75px;
`;

export const TopContent = styled.div`
  width: 100%;
  p {
    color: #000;
    font-size: 22px;
  }
`;

export const LeftContent = styled.div``;
export const RightContent = styled.div``;
