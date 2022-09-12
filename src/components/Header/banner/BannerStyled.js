import styled from "styled-components";

export const BanneR = styled.div`
    position: absolute;
    top: 580px;
    left: 350px;
    padding: 12px 4%;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    background-color: rgba( 0, 0, 0, 1);
    border: 2px solid;
    align-items: center;

    & h1{
        font-size: 50px;
    }

    & span{
        display: flex;
        font-size: 28px;
        text-align: center;
        max-width: 680px;
    }
`;