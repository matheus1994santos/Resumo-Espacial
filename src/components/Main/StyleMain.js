import styled from "styled-components";

export const MainA = styled.main`
    padding: 0 2%;
    margin: 18px 0;
`;

export const Article = styled.article`
    /* max-width: 1280px; */
    display: flex;
    justify-content: center;
    margin: 14px auto;
    padding: 12px 2%;
    border-radius: 18px;
    background-color: rgba(255, 255, 255, 0.059);
    /* border: 1px solid rgba(255, 192, 203, 0.422); */
    border-radius: 18px;
    box-shadow: -1px 1px 4px rgba(255, 255, 255, 0.622);
    font-family: 'Ubuntu', sans-serif;

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
        border: 1px solid rgba(255, 255, 255, 0.622);

        & p.LinkP{
            padding: 8px 4px;
            margin: 8px 0;
            & a{
                    text-decoration: none;
            }
        }

        & h1{
            font-weight: bold;
            text-align: center;
            padding: 2px 4%;
            margin: 4px 0;
            border: 2px solid rgba(255, 255, 255, 0.322);
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
                padding: 4px;
                border-left: 2px solid rgba(255, 255, 255, 0.522);
                border-bottom: 2px solid rgba(255, 255, 255, 0.522);
                box-shadow: -0px 2px 4px rgba(255, 255, 255, 0.622);
            }
        }

        & img{
            max-width: 440px;
            max-height: 280px;
            border: 0.3px solid rgb(135, 218, 235);
        }
    }

    & .NASASpaceflight{
        background-color: #d15e60;
    }

    & .SpaceNews{
        background-color: #EB1D24;
    }

    & .Teslarati{
        background-color: #23d100;
    }

    & .Arstechnica{
        background-color: #ff4e00;
    }
`;