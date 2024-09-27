import styled from "styled-components";

export const StyledLabel = styled.label`
    font-size: larger;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 60%;
`
export const StyledInput = styled.input`
    padding: 0.75rem;
    font-size: 1rem;
    border: none; 
    border: 1px solid #ccc; 
    outline: none;
    width: 100%; 
    box-sizing: border-box;
    background-color: transparent;
    color: var(--text-color);

    &:focus {
        border-color: #007bc0; 
    }
`