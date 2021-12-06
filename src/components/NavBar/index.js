import React, { useState } from 'react';
import styled from 'styled-components';

const NavStyles = styled.nav`
  
    .nav {
        background-color: black;
        height: 100px;
        width: 100%;
    }
`;

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
     <div className='nav'>

     </div>
    </NavStyles>
  );
}
