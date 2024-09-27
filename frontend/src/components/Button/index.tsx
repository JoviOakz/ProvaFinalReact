import { StyledButton } from "./styled.module";

interface IButtonProps {
    children: string;
    onCLick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ children, onCLick }) => {
    return (
        <StyledButton onClick={onCLick}>{children}</StyledButton>
    )
}

export default Button;