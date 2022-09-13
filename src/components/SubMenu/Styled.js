import styled from "styled-components";

export const Submenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 76px;
    background-color: rgba( 0, 0, 0, 1);
    border-top: 4px solid;
    border-bottom: 4px solid;

    & nav{
        max-width: 680px;
        width: 100%;
        padding: 4px 0;
        display: flex;
        justify-content: space-around;
        border: 1px solid;

        & a{
            font-size: 21px;
        }
    }
`;