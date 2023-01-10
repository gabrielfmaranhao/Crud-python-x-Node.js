import styled from "styled-components";

export const Container = styled.div`
    max-width: 475px;
    position: absolute;
    background-color: var(--white);
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: 'Montserrat';
    gap: 20px;
        h2 {
            border-left: 6px solid var(--yellow1);
            padding-left: 5px;
            font-size: 32px;
            line-height: 39px;
            color: var(--black);
            font-weight: 700;
            
        }
        h3 {
            
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 27px;
        }
        p {
            
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: var(--gray1);
        }
        label {          
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: var(--gray1);
        }
        input {
            color: var(--gray2);
            box-sizing: border-box;
            border: 1px solid var(--gray2);
            min-width: 18.75rem;
            height: 44px;
            padding-left: 10px;
        }
        .error {
            border-color: red
        }
        select {
            
            box-sizing: border-box;
            border: 1px solid var(--gray3);
            min-width: 18.75rem;
            height: 44px;
        }
        button {
            background-color: var(--yellow2);
            border-radius: 4px;
            min-width: 18.75rem;
            height: 44px;
            border-color: var(--yellow2);
            border: none;
            color: var(--white);
            font-family: 'Montserrat';
            font-weight: 500;
            font-size: 14px;
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .password {
            color: var(--gray2);
            box-sizing: border-box;
            border: 1px solid var(--gray2);
            min-width: 18.75rem;
            height: 44px;
            display: flex;
            padding-left: 10px;
            align-items: center;
            justify-content: space-between;
            input {
                border: none;
                padding: 0;
                height: 40px;
                min-width: 200px;
                outline: none;
            }
            button {
                min-width: 50px;
                background-color: var(--white);
                height: 40px;
            }
        }
        .register {
            display: flex;
            gap: 5px;
            justify-content: center;
            a {
                color: var(--yellow1);
            }
            span {
                color: var(--gray1);
            }
        }

`