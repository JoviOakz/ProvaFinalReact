import { useNavigate } from "react-router-dom";
import { StyledLogo, NavbarIdentity, StyledNavbar, StyledTitle, NavbarButtons, StyledButton } from "./styled.module";
import Logo from "/Logo.svg";

const Navbar = () => {
    const navigate = useNavigate();

    const handleChangeEmail = () => {
        localStorage.clear();
        navigate('/');
    };
    
    const handleChangePassword = () => {
        navigate('/');
    };
    
    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <StyledNavbar>
            <NavbarIdentity>
                <StyledLogo src={Logo} />
                <StyledTitle>BookStore</StyledTitle>
            </NavbarIdentity>

            <NavbarButtons>
                <StyledButton onClick={handleChangeEmail}>Update email</StyledButton>
                <StyledButton onClick={handleChangePassword}>Update password</StyledButton>
                <StyledButton onClick={handleLogout}>Log out</StyledButton>
            </NavbarButtons>
        </StyledNavbar>
    )
}

export default Navbar;