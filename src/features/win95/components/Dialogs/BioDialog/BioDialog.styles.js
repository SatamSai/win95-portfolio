import styled from "styled-components";


export const InfoContent = styled.div`
    height: 100%;
    padding: 15px 5px 0px;
`

export const InstallationBody = styled.div`
    height: calc(100% - 70px);
    display: flex;
    padding-bottom: 20px;
    border-bottom:1.5px solid black;
    box-shadow: 0 2px 0px white;
`

export const InstallationImg = styled.img`
`

export const InstallationInfo = styled.div`
    margin-left: 20px;
    font-size: 12.5px;
`

export const Paragraph = styled.p`
    color: #333;
    margin: 5px 0;
    line-height: 1.5;
    display: flex;
`

export const ParagraphLabel = styled.div`
    text-shadow:0.3px 0px 0px black;
    margin-right: 3px;
`

export const InstallationActions = styled.div`
    display: flex;
    height: 70px;
    align-items: center;
    justify-content:end;
`

export const CheckIcon = styled.img`
    height: 15px;
`

export const ActionButton = styled.button`
    width: 90px;
    height: 35px;
    border-top: 1.5px solid white;
    border-left: 1.5px solid white;
    border-right: 1.5px solid black;
    border-bottom: 1.5px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin-right: 10px;
    background: transparent;
    &.active{
        border-top: 1.5px solid black;
        border-left: 1.5px solid black;
        border-right: 1.5px solid white;
        border-bottom: 1.5px solid white;
    }

    &.disabled {
        border-top: 1.5px solid gray;
        border-left: 1.5px solid gray;
        border-right: 1.5px solid darkgray;
        border-bottom: 1.5px solid darkgray;
        color: darkgray;
        background-color: #e0e0e0;
        cursor: not-allowed;
        pointer-events: none;
    }
`

export const InstalledItemsContainer = styled.div`
    background-color: white;
    width: 360px;
    height: calc(100% - 70px);
    margin-bottom: 20px;
    padding: 10px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 16px;
        border: 5px solid white;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #b0b0b0;
        background-clip: padding-box;
        border: 0.05em solid #eeeeee;
    }

    &::-webkit-scrollbar-track {
        background-color: #ddd;
    }
`

export const ProgressBar = styled.div`
    height: 25px;
    width: 360px;
    background-color: white;
    position: relative;
    border: 1px solid black;
`

export const Categories = styled.ul`
    margin-left:10px;
    list-style-type:none;
text-shadow:0.8px 0px 0px black;
`

export const Category = styled.li`
`

export const SubCategories = styled.ul`
    margin-left: 20px;
    margin-bottom: 20px;
    text-shadow:0px 0px 0px black;
    list-style-type:none;
`

export const SubCategoryItem = styled.li`
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
`

export const Progress = styled.div`
    background-color: #14045C;
    height: 100%;
`

export const ProgressPercentage = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProgressContainer = styled.div``

export const Label = styled.label``