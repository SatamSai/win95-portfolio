import styled from "styled-components";



export const EmailInput = styled.div`
    display: flex;
    margin: 7px 0px;
`

export const Label = styled.div`
    width: 70px;
    height: 25px;
    border-top: 1.5px solid white;
    border-left: 1.5px solid white;
    border-right: 1.5px solid black;
    border-bottom: 1.5px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin-right: 10px;
`

export const Button = styled.button`
    width: 70px;
    height: 25px;
    border-top: 1.5px solid white;
    border-left: 1.5px solid white;
    border-right: 1.5px solid black;
    border-bottom: 1.5px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin-right: 10px;
`

export const InputField = styled.input`
    width: 100%;
    border-left: 1.5px solid black;
    border-top: 1.5px solid black;
    border-right: 1.5px solid white;
    border-bottom: 1.5px solid white;
    padding: 0px 5px;
    &:focus{
        outline: none;
    }
`

export const Form = styled.form`
    height: 100%;
`

export const TextArea = styled.textarea`
resize: none;
    height: calc(100% - 200px);
    width: 100%;
    border-left: 1.5px solid black;
    border-top: 1.5px solid black;
    border-right: 1.5px solid white;
    border-bottom: 1.5px solid white;
    padding: 5px;
    &:focus{
        outline: none;
    }
`