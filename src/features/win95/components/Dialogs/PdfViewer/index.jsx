import React from 'react'
import DraggableDialog from '../../DraggableDialog'
import { ActionButton, ActionButtonIcon, Actions, PdfWindow } from './PdfViewer.styles'
import InternetExplorer from '../../../assets/internetExplorer.png'
import DownloadIcon from '../../../assets/download.ico'

const PdfViewer = ({ dialog, handleSelectDialog, handleDialogAction, handleCloseDialog }) => {
    return (
        <DraggableDialog
            dialog={dialog}
            dialogTitle={dialog.title}
            handleSelectDialog={handleSelectDialog}
            handleDialogAction={handleDialogAction}
            handleCloseDialog={handleCloseDialog}
            showMenuBar={false}
            dialogDefaultDimensions={{
                width: 550,
                height: 600
            }}
        >
            <Actions>
                <ActionButton href='https://drive.usercontent.google.com/uc?id=17DhPHQXCFXS_RXFId5PDAqn0mvucKrRN&export=download'><ActionButtonIcon src={DownloadIcon} />Download</ActionButton>
                <ActionButton href='https://drive.google.com/file/d/17DhPHQXCFXS_RXFId5PDAqn0mvucKrRN/view?usp=drive_link' target="_blank" rel="noopener noreferrer"><ActionButtonIcon src={InternetExplorer} />Open new window</ActionButton>
            </Actions>
            <PdfWindow src="https://drive.google.com/file/d/17DhPHQXCFXS_RXFId5PDAqn0mvucKrRN/preview" allow="autoplay"></PdfWindow>
        </DraggableDialog>
    )
}

export default PdfViewer