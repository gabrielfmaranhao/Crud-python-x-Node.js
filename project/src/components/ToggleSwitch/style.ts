import styled from "styled-components";


export const ToggleSwitchLabel = styled.label`
    background: var(--white);
    width: 4rem;
    height: 2rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 0px;
    top: 330px;
    cursor: pointer;
    input {
        height: 100%;
        width: 100%;
        opacity: 0;
        cursor: pointer;
    }
    span {
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        background: var(--black);
        position: absolute;
        left: 0;
        box-shadow: 2px 2px 4px var(--gray1);
        cursor: pointer;
        transition: 0.25s;
    }
    input:checked + span {
        left: 50%;
        background: var(--gray2);
    }

`