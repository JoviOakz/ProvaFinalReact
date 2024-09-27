import styled from "styled-components";

export const StyledNavbar = styled.div`
    width: 100%;
    height: 8vh;
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const NavbarIdentity = styled.div`
    padding-left: 50px;
    display: flex;
    align-items: center;
`

export const StyledLogo = styled.img`
    width: 75px;
    height: 75px;
`

export const StyledTitle = styled.p`
    font-size: larger;
    font-weight: 600;
`

export const NavbarButtons = styled.div`
    width: 22%;
    display: flex;
    gap: 40px;
`

export const StyledButton = styled.a`
    font-size: medium;
    font-weight: 600;
    text-decoration: none;
    color: black;
    cursor: pointer;

    &:hover {
        color: gray;
    }
`