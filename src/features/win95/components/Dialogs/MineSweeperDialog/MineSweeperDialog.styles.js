import styled from "styled-components";

export const GameContent = styled.div`
    border-top: 1.5px solid #3c3b3b;
    border-left: 1.5px solid #3c3b3b;
    border-bottom: 1.5px solid #fff;
    border-right: 1.5px solid #fff;
    padding: 10px;
`

export const GameBoard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    border-top: 3px solid #777;
    border-left: 3px solid #777;
    border-right: 3px solid white;
    border-bottom: 3px solid white;
    .opened{
        border: 1px solid #777;
    }
    .explode {
        border: 1px solid #777;
        background-color: red;
    }
`

export const TileRow = styled.div`
    display: flex;
`

export const MineSweeperSquare = styled.div`
    border-top: 3px solid white;
    border-left: 3px solid white;
    border-right: 3px solid #777;
    border-bottom: 3px solid #777;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TileImg = styled.img`
    height: 17px;
`

export const GameControls = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-top: 3px solid #3c3b3b;
    border-left: 3px solid #3c3b3b;
    border-bottom: 3px solid #fff;
    border-right: 3px solid #fff;
    margin-bottom: 10px;
`

export const ResetButton = styled.img`
    border-top: 3px solid white;
    border-left: 3px solid white;
    border-right: 3px solid #777;
    border-bottom: 3px solid #777;
    width: 30px;
    height: 30px;
`

export const NumDisplay = styled.div`
    font-family: 'DigitalDismay';
    background-color: black;
    color: rgba(255,0,0,0.8);
    font-size: 35px;
    line-height: 0;
    display: flex;
    align-items: center;
    padding: 2px 3px 0px 5px;  
    &::before{
        content: '888';
        position: absolute;
        color: rgba(255,0,0,0.25);
    }
`