import styled from "styled-components";
import MoonHeader from "../../images/MoonHeader.jpg"

export const HeaderBanner = styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 680px;
    margin-bottom: 92px;
    background-image: url(${MoonHeader});
    background-size: cover;
    background-position: center;
`;

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* border-bottom: 1px solid rgb(255, 255, 255); */
    box-shadow: 0px 0.1px 8px rgba(255, 255, 255, 0.561);
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
        font-family: 'Open Sans', sans-serif;
        height: 20px;

        & a{
            font-size: 16px;
            cursor: pointer;
            color: white;
            font-weight: bold;
            background-color: none;

            :hover{
                border-bottom: 1px solid white;
            }
        }

    }
`;
