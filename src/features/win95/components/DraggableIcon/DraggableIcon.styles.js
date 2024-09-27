import styled from "styled-components";


export const DraggableIconContent = styled.div`
    position: absolute;
    top: ${props => `${props.y}px`};
    left: ${props => `${props.x}px`};
    transform:translate(-50%,-50%);
    cursor:default
`
export const DraggableIconImg = styled.img`
    height:35px;
`
export const DraggableIconLabel = styled.div`
    font-size: 10px;
    text-align: center;
    font-size: 12px;
    color: white;
    width: 100%;
    line-height: 16px;
`