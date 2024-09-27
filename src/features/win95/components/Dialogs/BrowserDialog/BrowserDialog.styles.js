import styled from "styled-components";


export const BrowserWindow = styled.iframe`
    height: calc(100% - 130px);
    width: 100%;
`

export const BrowserOptions = styled.div`
    height: 55px;
    border-right: 1.5px solid white;
    border-bottom: 1.5px solid white;
    box-shadow: inset 0 0 0 1px black;
    display: flex;
    align-items: center;
`

export const VerticalLine = styled.div`
    height: 80%;
    margin:0px  10px;
    border-right: 2px solid white;
    border-left: 2px solid #888;
    box-shadow: inset -2px 0 0 0 #888, inset 2px 0 0 0 white;
    width: 8px;
`

export const Option = styled.div`
    width: 50px;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    filter: grayscale(100%);
    &:hover{
        filter: grayscale(0%);
        border-right: 1.5px solid black;
        border-bottom: 1.5px solid black;
        border-left: 1.5px solid white;
        border-top: 1.5px solid white;
    }
`

export const OptionImg = styled.img`
    height: 23px;
`

export const OptionLabel = styled.label`
font-size: 12px;
`

export const AddressBar = styled.div`
    font-size: 15px;
    padding: 8px;
    border-right: 1.5px solid white;
    border-bottom: 1.5px solid white;
    box-shadow: inset 0 0 0 1px black;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`

export const AddressLabel = styled.label`
    margin: 0px 15px;
    line-height: 0px;
`

export const AddressInput = styled.input`
    width: 100%;
    border-left: 1.5px solid black;
    border-top: 1.5px solid black;
    border-right: 1.5px solid white;
    border-bottom: 1.5px solid white;
    padding: 4px;
    &:focus{
        outline: none;
    }
`