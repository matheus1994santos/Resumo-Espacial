import styled from "styled-components";


export const BanneR = styled.div`
    margin: 0 auto;
    margin-top: 280px;
    padding: 12px 4%;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    background-color: rgba( 0, 0, 0, 1);
    border: 2px solid;
    align-items: center;
    
    & h1{
        text-align: center;
        font-size: 50px;
    }

    & span{
        display: flex;
        font-size: 28px;
        text-align: center;
        max-width: 680px;
    }
`;

