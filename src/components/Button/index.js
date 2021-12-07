import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.div`

  .custom-btn {
    width: 180px;
    height: 40px;
    color: #fff;
    padding: 10px 25px;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    outline: none;
    margin-bottom: 40%;
    font-size: 1.2rem;
  }

  .btn-16 {
    border: none;
    color: #000;
    background-color: #FFF;
  }
  .btn-16:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    transition: all 0.3s ease;
  }
  .btn-16:hover {
    color: #000;
  }
  .btn-16:hover:after {
    left: auto;
    right: 0;
    width: 100%;
  }
  .btn-16:active {
    top: 2px;
  }

  .button:focus {
    outline: none;
  }

`;

export default function Button({ buttonTitle }) {
  return (
    <ButtonStyles>
      <button className="custom-btn btn-16">{buttonTitle}</button>
    </ButtonStyles>
  );
}
