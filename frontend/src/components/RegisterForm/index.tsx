import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import { StyledForm, StyledTitle } from "./styled.module";

interface IRegisterFormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    name: string;
    setName: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    confirmPassword: string;
    setConfirmPassword: (value: string) => void;
    phone: string;
    setPhone: (value: string) => void;
    role: string;
    setRole: (value: string) => void;
}

const RegisterForm: React.FC<IRegisterFormProps> = ({ onSubmit, name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, phone, setPhone, role, setRole }) => {
    return (
        <StyledForm onSubmit={onSubmit}>
            <StyledTitle>Register</StyledTitle>
            <Input label="Full name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <Input label="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input label="Phone number" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <Select label="Role" value={role} onChange={(e) => setRole(e.target.value)} />
            <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Input label="Confirm password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <Button>Create</Button>
        </StyledForm>
    )
}

export default RegisterForm;