import React from "react";
import styled from "styled-components";

const AboutStyles = styled.div`
  .title {
    font-size: 5rem;
    color: white;
    justify-content: center;
    display: flex;
  }
`;

export default function About() {
  return (
    <AboutStyles>
      <p className="title">About</p>
    </AboutStyles>
  );
}
