import React from 'react'
import DraggableDialog from '../../DraggableDialog'
import { Button, EmailInput, InputField, TextArea } from './MailDialog.styles'

const MailDialog = ({ dialog, handleSelectDialog, handleDialogAction, handleCloseDialog }) => {
    return (
        <DraggableDialog
            dialog={dialog}
            dialogTitle={dialog.title}
            handleSelectDialog={handleSelectDialog}
            handleDialogAction={handleDialogAction}
            handleCloseDialog={handleCloseDialog}
            showMenuBar={true}
            dialogDefaultDimensions={{
                width: 450,
                height: 400
            }}
        >
            <EmailInput>
                <Button>Send</Button>
                <InputField disabled />
            </EmailInput>
            <EmailInput>
                <Button>Name</Button>
                <InputField />
            </EmailInput>
            <EmailInput>
                <Button>Email</Button>
                <InputField />
            </EmailInput>
            <TextArea />
        </DraggableDialog>
    )
}

export default MailDialog