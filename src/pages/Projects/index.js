import React from 'react';
import styled from 'styled-components';
import Frame from '../../components/Frame';
import HorizontalScroll from 'react-scroll-horizontal';

const ProjectsStyles = styled.div`
  .title {
    font-size: 5rem;
    color: white;
    justify-content: center;
    display: flex;
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
     <p className='title'>Projects</p>
     <div className='direction'>
       <Frame/>
       <Frame/>
       <Frame/>
     </div>
       
     
    </ProjectsStyles>
  );
}