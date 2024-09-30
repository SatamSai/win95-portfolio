import styled from "styled-components";


export const Actions = styled.div`
display:flex;
align-items: center;
padding: 10px 0px;
`

export const ActionButtonIcon = styled.img`
height: 13px;
margin-right: 5px;
`

export const ActionButton = styled.a`
border-top: 2px solid #ddd;
border-left: 2px solid #ddd;
box-shadow: rgba(0, 0, 0, 1) 2px 2px 1.5px;
font-size: 12px;
padding: 5px;
margin-right: 10px;
color: blue;
text-decoration: underline;
cursor: pointer;
display: flex;
align-items: center;
`

export const PdfWindow = styled.iframe`
width:100%;
height: calc(100% - 60px);
`