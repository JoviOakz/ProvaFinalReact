import { useState } from "react";
import RegisterForm from "../../components/RegisterForm";
import { Page } from "./styled.module"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/user/register', {
                name,
                email,
                phone,
                role,
                password,
                confirmPassword
            });

            toast.success('Usuário Criado');
            console.log(response.data);
            navigate('/');
        } catch (error) {
            console.log(error)
            toast.error('Usuário não foi criado');
        }
    }

    return (
        <Page>
            <RegisterForm onSubmit={handleSubmit} name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} role={role} setRole={setRole} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} />
        </Page>
    )
}

export default RegisterPage;