import { InputWrapper, StyledInput, StyledLabel } from "./styled.module"

interface IInputProps {
    label?: string;
    value?: string;
    type?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({ label, type, value, placeholder, onChange }) => {
    return (
        <InputWrapper>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput type={type} value={value} placeholder={placeholder} onChange={onChange} />
        </InputWrapper>
    )
}

export default Input;