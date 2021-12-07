import React from "react";
import styled from "styled-components";

const CardStyles = styled.div`
  .frame {
    height: 30vh;
    background-color: #ece9e9;
    margin-left: 5%;
    padding-top: 10px;
    margin-bottom: 10px;
    margin-right: 5%;
  }

  .cardTitle {
    font-size: 2.5rem;
    color: black;
    margin: 20px 0px 0px 20px;
  }

  .date {
    font-size: 1rem;
    margin: 0px 0px 10px 20px;
  }

  .description {
    font-size: 1.5rem;
    margin: 0px 20px 0px 20px;
  }
`;

export default function Card({ cardTitle, date, description }) {
  return (
    <CardStyles>
      <div className="frame">
        <p className="cardTitle">{cardTitle}</p>
        <p className="date">{date}</p>
        <p className="description">{description}</p>
      </div>
    </CardStyles>
  );
}
