import styled from "styled-components";

export const PropertiesWrapper = styled.div`
    padding: 15px 5px;
    height:100%;
`

export const Tabs = styled.div`
    display: flex;
`
export const Tab = styled.div`
    font-size: 12.5px;
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    height: 26px;
    padding:0px 7px;
    display: flex;
    align-items: center;
    overflow: visible;
    &.selected{
        transform:scaleY(1.06);
        outline: 1px dotted black;
        outline-offset: -5px;
        transform-origin: left;
    }
`
export const TabContent = styled.div`
border-top: 2px solid white;
border-left: 2px solid white;
border-right: 2px solid black;
border-bottom: 2px solid black;
width: 100%;
height: calc(100% - 30px);
`