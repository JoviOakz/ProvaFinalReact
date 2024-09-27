import styled from "styled-components";

export const StyledSelect = styled.select`
    padding: 0.75rem;
    font-size: 1rem;
    border: none; 
    border: 1px solid #ccc; 
    outline: none;
    width: 60%; 
    box-sizing: border-box;
    background-color: transparent;
    color: var(--text-color);

    &:focus {
        border-color: #007bc0; 
    }
`

export const StyledOption = styled.option`
    padding: 0.5rem;
    font-size: 1rem;
    background: #fff; 
    color: #333;
    border-bottom: 1px solid #eee;

    &:nth-child(even) {
    background: #f9f9f9; 
    }

    &:hover {
    background: #eaeaea; 
    }

    &:last-child {
    border-bottom: none;
    }
`