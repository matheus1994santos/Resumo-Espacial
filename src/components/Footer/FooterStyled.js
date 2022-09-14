import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
    padding: 22px 0;
    font-family: 'Ubuntu', sans-serif;

    & > div{
        display: flex;
        justify-content: center;
        padding: 20px 0;
        border-bottom: 2px solid;
        & h1{
           font-size: 4em;
        }
    }

    & section{
        display: flex;
        justify-content: space-around;
        padding: 20px 0;

        & div{
            display: flex;
            align-items: center;

            & h1{
            text-align: center;
            background-color: rgb(0, 0, 00);
            }

            & ul{
                list-style-type: none;

                & li{
                    margin: 4px 0;
                    padding: 8px;
                    cursor: pointer;

                    & a{
                        padding: 8px;
                        border-radius: 20px;
                    }
                    
                    & :hover{
                        background-color: rgba(255, 255, 255, 0.2);
                    }
                }
            }
        }

        & h1{
            text-align: center;
        }
    };
`;