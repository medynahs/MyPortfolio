import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin-logo.png";
import emailjs from "emailjs-com";

const FormStyles = styled.div`
  .form {
    height: 50vh;
    width: 90vh;
  }

  .input {
    background-color: #ece9e9;
    border-color: #ece9e9;
    width: 100%;
    height: 80px;
    font-size: 2rem;
    color: black;
    margin-top: 10px;
    margin: 4px;
    padding-left: 4%;
  }

  .subject {
    background-color: #ece9e9;
    border-color: #ece9e9;
    width: 100%;
    height: 80px;
    font-size: 2rem;
    color: black;
    margin-top: 10px;
    margin: 4px;
    padding-left: 4%;
  }

  .message {
    background-color: #ece9e9;
    border-color: #ece9e9;
    width: 100%;
    height: 15rem;
    font-size: 2rem;
    color: black;
    margin-top: 10px;
    margin: 4px;
    padding-left: 4%;
  }

  .sideBySide {
    display: flex;
    justify-content: space-between;
    width: 95vh;
  }

  .buttonDiv {
    display: flex;
    justify-content: flex-end;
    height: 4vh;
  }

  .images {
    display: flex;
    flex-direction: row;
    margin-bottom: 12%;
  }

  .git {
    background-color: #ece9e9;
    width: 7rem;
    height: 7.2rem;
    display: flex;
    justify-content: center;
  }

  .linkedin {
    background-color: #ece9e9;
    width: 7rem;
    height: 7.5rem;
    display: flex;
    justify-content: center;
    border-radius: 20px;
  }

`;

// Tenta usar GRID dps

export default function Form() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_8tcaenh",
        e.target,
        "user_lc7iXVOXd0paSyzciC47S"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <FormStyles>
      <div className="form">
        <form onSubmit={sendEmail}>
          <div className="sideBySide">
            <input
              type={"text"}
              className="input"
              placeholder="Name"
              name="name"
            />
            <input
              type={"email"}
              className="input"
              placeholder="Email"
              name="email"
            />
          </div>
          <input
            type={"text"}
            className="subject"
            placeholder="Subject"
            name="subject"
          />
          <textarea className="message" placeholder="Message" name="message" />
          <div className="buttonDiv">
            <Button buttonTitle={"Send"} type="submit" />
          </div>
        </form>
      </div>

      <div className="images">
        <a href="https://github.com/medynahs">
          <div className="git">
            <img src={Github} alt="Github" width={120} />
          </div>
        </a>

        <a href="https://www.linkedin.com/in/ariane-medina/">
          <div className="linkedin">
            <img src={Linkedin} alt="Linkedin" width={120} />
          </div>
        </a>
      
      </div>

      
    </FormStyles>
  );
}
