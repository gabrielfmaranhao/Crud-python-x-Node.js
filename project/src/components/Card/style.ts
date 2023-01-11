import styled from "styled-components";


export const Container = styled.li`
    background-color: var(--white);
    width: 25rem;
    display: flex;
    height: 4rem;
    border-radius: 8px;
    justify-content: space-around;
    align-items: center;
    font-family: 'Montserrat';
    .boxInfo {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 14px;
        p {
            color: var(--gray2);
        }
    }
    .boxFunction {
        display: flex;
        gap: 5px;

    }
    button {
        background-color: var(--white);
        border: none;
        display: flex;
        align-items: center;
        height: max-content;
        cursor: pointer;
        height: 20px;
        width: 30px;
        justify-content: center;
    }
    #buttonUpdate:hover {
        background-color: var(--yellow1);
        border-radius: 2px;
        border: 1px solid black;
    }
    #buttonDelete:hover {
        background-color: #e91e63;
        border-radius: 2px;
        border: 1px solid black;
    }
`