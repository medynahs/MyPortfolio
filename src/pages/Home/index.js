import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const HomeStyles = styled.div`
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
  }

  .title {
    font-size: 5rem;
    color: white;
  }
`;

export default function Home() {
  return (
    <HomeStyles>
      <div className="center">
        <p className="title">Welcome to my portfolio</p>
        <Button buttonTitle="About" />
        <Button buttonTitle="Resume" />
        <Button buttonTitle="Projects" />
        <Button buttonTitle="Contact" />
      </div>
    </HomeStyles>
  );
}