import { Page } from "./styled.module";
import LoginForm from "../../components/LoginForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/user/login', {
                email: email,
                password: password,
            });

            const { token } = response.data;

            localStorage.setItem('token', token);

            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            localStorage.setItem('role', decodedToken.role);
            localStorage.setItem('name', decodedToken.name);

            console.log(response)
            navigate('/home')
        } catch (error) {
            console.log('An unexpected error occurred. Please try again later.');
            console.log(error);
            toast.error('Email ou senha inválidos');
        }
    };

    return (
        <Page>
            <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} onSubmit={handleSubmit} />
        </Page>
    )
}

export default LoginPage;