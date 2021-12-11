import React from 'react';
import styled from 'styled-components';
import Form from '../../components/Form';
import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin-logo.png";

const ContactStyles = styled.div`
  .title {
    font-size: 5rem;
    color: white;
    text-align: center;
    margin-bottom: 0px;
  }

  .center {
    display: flex;
    justify-content: center;
  }

  .subtitle {
    font-size: 2rem;
    color: white;
    text-align: center;
    margin-top: 0px;
  }


  .images {
    display: flex;
    flex-direction: row;
    margin-bottom: 12%;
    width: 15%;
    margin-left: 25%;
  }

  .git {
    background-color: #ece9e9;
    width: 7rem;
    height: 6.7rem;
  }

  .git:hover{
    background-color: #fff;
  }

  .linkedin {
    background-color: #ece9e9;
    width: 7rem;
    height: 7.8rem;
    border-radius: 20px;
  }

  .linkedin:hover{
    background-color: #fff;
  }
  
`;

export default function Contact() {
  return (
    <ContactStyles>
     <p className='title'>Contact Me</p>
     <p className='subtitle'>I am always eageared to be a part of new projects and i would also appreciate a feedback</p>
     <div className='center'>
       <Form/>
     </div>

     <div className="images">
        <a href="https://github.com/medynahs">
          <div className="git center">
            <img src={Github} alt="Github" width={120} />
          </div>
        </a>

        <a href="https://www.linkedin.com/in/ariane-medina/">
          <div className="linkedin center">
            <img src={Linkedin} alt="Linkedin" width={120} />
          </div>
        </a>
      
      </div>
     
    </ContactStyles>
  );
}