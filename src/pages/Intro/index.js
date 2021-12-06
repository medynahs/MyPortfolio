import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const IntroStyles = styled.div`
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
    margin-bottom: 0px;
  }
`;

export default function Intro() {
  return (
    <IntroStyles>
      <div className="center">
          <p className="title">Ariane Medina</p>
        <Button buttonTitle={"Enter"} />
      </div>
    </IntroStyles>
  );
}
