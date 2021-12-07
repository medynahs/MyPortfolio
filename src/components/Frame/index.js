import React from "react";
import styled from "styled-components";

const FrameStyles = styled.div`
  .frame {
    width: 300px;
    height: 300px;
    background-color: aquamarine;
  }
`;

export default function Frame() {
  return (
    <FrameStyles>
      <div className="frame"></div>
    </FrameStyles>
  );
}
