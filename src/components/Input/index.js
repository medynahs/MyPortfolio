import React from "react";
import styled from "styled-components";

const InputStyles = styled.div`
  .input {
    background-color: #ece9e9;
    border-color: #ece9e9;
    width: 100%;
    height: 80px;
    font-size: 2rem;
    color: black;
    margin-top: 10px;
    padding-left: 20px;
  }
`;

export default function InputText({ inputWidht, placeholder }) {
  return (
    <InputStyles>
      <input className="input" placeholder={placeholder} />
    </InputStyles>
  );
}
