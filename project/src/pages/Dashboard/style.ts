import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`
export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const ButtonLogout = styled.button`
    background: var(--white);
    border-radius: 8px;
    width: 25rem;
    height: 3rem;
    border: none;
    cursor: pointer;
    :hover {
        background: #e91e63;
        color: var(--white);
    }
`