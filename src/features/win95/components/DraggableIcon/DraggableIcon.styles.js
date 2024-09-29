import styled from "styled-components";


export const DraggableIconContent = styled.div`
    position: absolute;
    top: ${props => `${props.y}px`};
    left: ${props => `${props.x}px`};
    transform:translate(-50%,-50%);
    cursor:default;

`

export const IconWrapper = styled.div`
    width: 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media (max-width: 450px){
    width: 35px;
    margin-bottom: 12px;
    }
`

export const DraggableIconImg = styled.img`
    height:35px;
    @media (max-width: 450px){
    height: 25px;
    }
`
export const DraggableIconLabel = styled.div`
    font-size: 10px;
    text-align: center;
    font-size: 12px;
    color: white;
    width: 100%;
    line-height: 16px;
    @media (max-width: 450px){
        font-size: 9px;
    }
`