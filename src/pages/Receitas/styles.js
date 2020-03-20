import styled from "styled-components";

export const ContentArea = styled.span`
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
`;

export const CardArea = styled.span`
    width: 330px;
    height: 260px;
    background-color: #FFF;
    display: flex;
    border-radius: 7px;
    margin: 50px 30px 0px 30px;
    position: relative;
    font-family: arial;
    padding: 10px;
`;

export const CardImg = styled.img`

`;

export const CardCategory = styled.span`
    position: absolute;
    left: 18px;
    top: 80px;
    color: black;
    font-weight: bold;

`;

export const CardTitle = styled.span`
    position: absolute;
    left: 19px;
    top: 111px;
    color: #f58328;
    font-weight: bold
`;

export const CardDescription = styled.span`
    position: absolute;
    left: 0;
    top: 149px;
    color: #418da6;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 14px
`;

export const CardLink = styled.span`
position: absolute;
left: 238px;
top: 224px;
color: #f58328;
`;