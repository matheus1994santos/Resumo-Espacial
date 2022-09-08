import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #00006D;
    border: 1px solid rgba(255, 192, 203, 0.422);
    border-radius: 18px;
    box-shadow: -2px 2px 5px rgba(255, 192, 203, 0.622);
    margin-bottom: 8px;

    & img{
        width: 150px;
        height: 80px;
    }

    & nav{
        display: flex;
        flex-direction: row;
        gap: 8px;
        justify-content: space-around;
        background-color: none;

        & a{
            font-size: 18px;
            cursor: pointer;
            color: white;
            background-color: none;

            :hover{
                border-bottom: 1px solid white;
            }
        }

    }
`;