import styled from "styled-components";


export const TaskBarContainer = styled.div`
    height: 40px;
    background-color: #b3b2b2;
    border-top: 2px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 8px;
    width: 100vw;
    @media (max-width: 450px){
        height: 35px;
    }
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
    box-shadow: black 1px 1px 2px;
    cursor: default;
    margin-right: 30px;

    &.pressed{
        border-top: 2px solid black;
        border-left: 2px solid black;
        box-shadow: #ddd 1px 1px 2px;
    }
    @media (max-width: 450px){
        transform: scale(0.7);
        transform-origin: left;
    }

`

export const StartOptionsContainer = styled.div`
    position: absolute;
    bottom: 36px;
    left: 2px;
    display: flex;
    border-bottom:1px solid black;
    border-right:1px solid black;
    box-shadow: 0 0 0 1.5px white;
    background-color:#7B7D7B;
    @media (max-width: 450px){
        transform: scale(0.7);
        transform-origin: bottom left;
    }
`

export const LogoWrapper = styled.div`
    display: flex;
    align-items: stretch;
    height: 100%;
    width: 25px;
`

export const WindowsLogo = styled.img`
    position: absolute;
    bottom: 0px;
    width:25px;
`

export const StartOptions = styled.div`
`

export const OptionsGroup = styled.div`
    border-bottom: 1px solid black;
`

export const Option = styled.a`
    padding: 10px;
    font-size: 12px;
    background-color: #C5C2C2;
    display: flex;
    align-items: center;
    width: 150px;
    text-decoration: none;
    color: black;
    &:hover{
        cursor: pointer;
        background-color: #040D91;
        color: white;
    }
    &::before{
        position: absolute;
        content: "_";
        margin-left: 30px;
    }
`

export const OptionImg = styled.img`
    height: 25px;
    margin-right: 5px;
    border-radius:4px;
`

export const WindowIcon = styled.img`
    height: 15px;
    margin-right: 4px;
`

export const TasksContainer = styled.div`
width: calc(100vw - 200px);
overflow: auto;
`

export const Tasks = styled.div`
    display: flex;
    @media (max-width: 450px){
        margin-left: -45px;
        flex-grow: 1;
        :first-child{
            margin-left: 0px !important;
        }
    }
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
    @media (max-width: 450px){
        margin-left: -45px;
        transform: scale(0.7);
        transform-origin: left;
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
    @media (max-width: 450px){
        transform: scale(0.7);
        transform-origin: right;
    }
`

export const Speaker = styled.img`
    height: 15px;
    margin-right: 5px;
`

export const DateTime = styled.div`
    font-size: 12px;
`