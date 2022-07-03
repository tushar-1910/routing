import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
display: flex;
justify-content: space-evenly;
background: black;
color: white;
padding: 15px;
`;

const StyledLink = styled(Link)`
color: white;
font-weight:400;
text-decoration: none;
`

const Navbar = () => {
    return (
        <NavbarWrapper>
            <StyledLink to="/">HOME</StyledLink>
            <StyledLink to="/products">PRODUCTS</StyledLink>
        </NavbarWrapper>
    );
};

export default Navbar;