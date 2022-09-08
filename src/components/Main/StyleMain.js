import styled from "styled-components";

export const MainA = styled.main`
    padding: 0 2%;
    margin: 8px 0;
`;

export const Article = styled.article`
    /* max-width: 1280px; */
    display: flex;
    justify-content: center;
    margin: 8px auto;
    padding: 12px 2%;
    border-radius: 18px;
    background-color: rgba(255, 255, 255, 0.089);

    & .cont{
        max-width: 1280px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4% 8px;
        border-radius: 18px;
        background-color: #0000FF;

        & p.LinkP{
            padding: 8px 4px;
            margin: 8px 0;
            & a{
                    text-decoration: none;
            }
        }

        & h1{
            text-align: center;
            margin: 4px 0;
        }

        & p.Report{
            margin: 18px 0;
        }

        & div{
            display: flex;
            text-align: justify;
            align-items: center;
            grid: 18px;
            max-width: 760px;
            gap: 12px;

            & > p{
                text-align: justify;
                font-size: 18px;
                margin-bottom: 12px;
            }
        }

        & img{
            max-width: 440px;
            max-height: 280px;
            border: 0.3px solid rgb(135, 218, 235);
        }
    }

    & .cont1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4% 0;

        & p{
            text-align: center;
            margin-bottom: 12px;
        }

        & div{
            display: flex;
            text-align: justify;
            align-items: center;
            max-width: 760px;
            gap: 12px;

            & p{
                text-align: justify;
                font-size: 18px;
            }
        }

        & img{
            max-width: 440px;
            max-height: 280px;
            border: 0.3px solid rgb(135, 218, 235);
        }
    }
`;