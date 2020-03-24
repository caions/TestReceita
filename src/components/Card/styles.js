import styled from 'styled-components'

export const CardArea = styled.span`
    width: 330px;
    display: flex;
    border-radius: 7px;
    margin: 50px 30px 0px 30px;
    position: relative;
    font-family: arial;
    background: url(${props => props.img});
    background: url(/static/media/pizza.ca2aba6d.jpg);
    height: 260px;
    background-repeat: no-repeat;
    background-size: contain;
`;

export const TextArea = styled.span`
    background-color: #FFF;
    width: 100%;
    align-self: flex-end;
    border: none;
    height: 156px;
`;

export const CardImg = styled.span`

`;

export const CardCategory = styled.span`
    position: absolute;
    left: 18px;
    top: 80px;
    color: #FFF;
    font-weight: bold;

`;

export const CardTitle = styled.span`
    position: absolute;
    left: 19px;
    top: 120px;
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