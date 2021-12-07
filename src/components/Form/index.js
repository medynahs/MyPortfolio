import React from "react";
import styled from "styled-components";
import InputText from '../Input';

const FormStyles = styled.div`
  .form {
    background-color: aquamarine;
    height: 50vh;
    width: 90vh;
  }

  /* .input {
    background-color: #ece9e9;
    border-color: #ece9e9;
    width: 50%;
    height: 80px;
    font-size: 2rem;
    color: black;
    margin-top: 10px;
    margin: 4px;
  } */

  .sideBySide {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`;

// Tenta usar GRID dps

export default function Form() {
  return (
    <FormStyles>
      <div className="form">
        <div className="sideBySide">
          <InputText placeholder="Name"  />
          <InputText placeholder="Email" />
        </div>

        <InputText placeholder="Subject" />
        <InputText placeholder="Message" />
      </div>
    </FormStyles>
  );
}
