import styled from "styled-components";

export const Container = styled.div`
  height: 75px;
  width: 100%;
  background-color: #040439;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
`;

export const Content = styled.div`
  max-width: 964px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  height: 100%;
  img {
    height: 100%;
  }
`;
export const ItemsMenu = styled.div`
  max-width: 964px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  gap: 20px;
  a {
    font-size: 16px;
  }
`;
