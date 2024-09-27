import styled from "styled-components";


export const Dialog = styled.div`
    cursor: default;
    background-color: white;
    width: ${({ maximized, width }) => maximized ? "100vw" : `${width}px`};
    height: ${({ maximized, height }) => maximized ? "100vh" : `${height}px`};
    padding: 2.5px 1px 1px 2.5px;
    box-sizing: border-box;
    z-index: 100000;
`

export const DialogContent = styled.div`
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    height: 100%;
    width: 100%;
`

export const TitleBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 4px;
    background-color: ${({ selected }) => selected ? "#14045C" : "#757579"};
    height: 24px;
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    color: white;
    font-size: 15px;
`

export const TitleIcon = styled.img`
    height: 16px;
    margin-right: 4px;
`

export const WindowOptions = styled.div`
    display: flex;
`

export const WindowOption = styled.div`
    background-color: #C9C9C9;
    height: 17px;
    width:17px;
    margin-left: 4px;
    border-top: 2px solid #ddd;
    border-left: 2px solid #ddd;
    box-shadow: rgb(0, 0, 0) 1px 1px 2px;
    &.active{
        border-top: 2px solid black;
        border-left: 2px solid black;
        box-shadow: rgb(221, 221, 221) 1px 1px 2px;
    }
`
export const WindowMinimize = styled.div`
    height: 12px;
    width:12px;
    border-bottom: 1.5px solid black;
`


export const WindowExpand = styled.div`
    height: 13px;
    width:13px;
    border: 1.5px solid black;
    border-top: 3px solid black;
`
export const WindowClose = styled.div`
    margin-left: 2px;
    line-height: 11px;
    font-family: 'MsSans';
    font-size: 13px;
    height: 17px;
    width:17px;
`

export const MenuBar = styled.div`
    font-size: 15px;
    height: 25px;
    display: flex;
    align-items: center;
`

export const MenuOption = styled.div`
    margin-right: 10px;
    &::before{
        content: "_";
        position: absolute;
    }
`

export const DialogBody = styled.div`
    background-color: #C5C4C4;
    padding: 0px 5px;
    height: calc(100% - 25px);
`
