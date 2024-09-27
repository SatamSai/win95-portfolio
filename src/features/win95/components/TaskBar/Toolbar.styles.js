import styled from "styled-components";


export const TaskBarContainer = styled.div`
    height: 40px;
    background-color: #b3b2b2;
    border-top: 2px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 8px;
`
export const LeftContent = styled.div`
    display: flex;
`

export const StartButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 30px;
    border-top: 2px solid #ddd;
    border-left: 2px solid #ddd;
    box-shadow: rgba(0, 0, 0, 1) 1px 1px 2px;
    cursor: default;
    margin-right: 30px;
`

export const WindowIcon = styled.img`
    height: 15px;
    margin-right: 4px;
`

export const Tasks = styled.div`
    display: flex;
`

export const Task = styled.div`
    cursor: default;
    width: 140px;
    display: flex;
    align-items: center;
    height: 30px;
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    padding: 0px 8px ;
    margin-right: 3px;
    white-space: nowrap;
    overflow: hidden;    
    text-overflow: ellipsis; 
    &.selected{
        text-shadow:0.5px 0px 0px black;
        background-color: #DDDCDC;
        border-top: 1px solid black;
        border-left: 1px solid black;
        border-right: 1px solid white;
        border-bottom: 1px solid white;
    }
`

export const TaskIcon = styled.img`
    height: 15px;
    width: 15px;
    margin-right: 4px;
`

export const TaskTitle = styled.div`
font-size:13px;
`

export const Tools = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 1) 1px 1px 1px 0px inset,rgba(255, 255, 255, 1) 0px 0px 1px 1px inset;
`

export const Speaker = styled.img`
    height: 15px;
    margin-right: 5px;
`

export const DateTime = styled.div`
    font-size: 12px;
`