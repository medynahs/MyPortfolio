import React from 'react';
import styled from 'styled-components';
import Form from '../../components/Form';

const ContactStyles = styled.div`
  .title {
    font-size: 5rem;
    color: white;
    justify-content: center;
    display: flex;
  }

  .formDiv {
    display: flex;
    justify-content: center;
  }
  
`;

export default function Contact() {
  return (
    <ContactStyles>
     <p className='title'>Contact Me</p>
     <div className='formDiv'>
       <Form/>
     </div>
     
    </ContactStyles>
  );
}