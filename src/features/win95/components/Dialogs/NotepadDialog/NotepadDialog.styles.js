import styled from "styled-components";


export const NotepadInput = styled.textarea`
    width: 100%;
    height: calc(100% - 30px);
    resize: none;
    border: 0px;
    &:focus{
        outline: none;
    }
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