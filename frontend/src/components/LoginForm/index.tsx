import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Input from "../Input";
import { StyledForm, StyledTitle } from "./styled.module";

interface ILoginForm {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
}

const LoginForm: React.FC<ILoginForm> = ({ onSubmit, email, setEmail, password, setPassword }) => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/register");
    };

    return (
        <StyledForm onSubmit={onSubmit}>
            <StyledTitle>Login</StyledTitle>
            <Input label="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button>Enter</Button>
            <Button onCLick={handleRegisterClick}>Register</Button>
        </StyledForm>
    )
}

export default LoginForm;