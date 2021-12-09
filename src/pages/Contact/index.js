import React from 'react';
import styled from 'styled-components';
import Form from '../../components/Form';

const ContactStyles = styled.div`
  .title {
    font-size: 5rem;
    color: white;
    text-align: center;
    margin-bottom: 0px;
  }

  .subtitle {
    font-size: 2rem;
    color: white;
    text-align: center;
    margin-top: 0px;
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
     <p className='subtitle'>I am always eageared to be a part of new projects</p>
     <div className='formDiv'>
       <Form/>
     </div>
     
    </ContactStyles>
  );
}