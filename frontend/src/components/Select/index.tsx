import { StyledOption, StyledSelect } from "./styled.module";

interface ISelectProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<ISelectProps> = ({ label, value, onChange }) => {
    const role = localStorage.getItem("role");

    return (
        <>
            <StyledSelect value={value} onChange={onChange}>
                <StyledOption value="">Select your role</StyledOption>
                {role == "ADMIN" &&
                    <>
                        <StyledOption value="ADMIN">Admin</StyledOption>
                    </>
                } :
                <StyledOption value="READER">Reader</StyledOption>
            </StyledSelect>
        </>
    )
}

export default Select;