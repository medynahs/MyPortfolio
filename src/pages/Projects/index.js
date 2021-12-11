import React from "react";
import styled from "styled-components";
import Frame from "../../components/Frame";

const ProjectsStyles = styled.div`
  .title {
    font-size: 5rem;
    color: white;
    justify-content: center;
    display: flex;
    margin-top: 3%;
    margin-bottom: 3%;
  }

  .direction {
    flex-direction: row;
    display: flex;
    justify-content: space-evenly;
  }

  
`;

export default function Projects() {
  return (
    <ProjectsStyles>
      <p className="title">Projects</p>
    </ProjectsStyles>
  );
}
