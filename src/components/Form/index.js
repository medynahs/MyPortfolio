import React from "react";
import styled from "styled-components";
import Button from "../Button";
import emailjs from "emailjs-com";

const FormStyles = styled.div`
  .form {
    height: 50vh;
    width: 90vh;
  }

  .input {
    background-color: #fff;
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
    background-color: #fff;
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
    background-color: #fff;
    border-color: #ece9e9;
    width: 100.2%;
    height: 12rem;
    font-size: 2rem;
    color: black;
    margin-top: 10px;
    margin: 4px;
    padding-left: 4%;
    padding-top: 4%;
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
    margin-left: 20px;
    width: 102.8%;
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
            <Button buttonTitle={"Send"} type="submit"/>
          </div>
        </form>
      </div>
      
    </FormStyles>
  );
}
