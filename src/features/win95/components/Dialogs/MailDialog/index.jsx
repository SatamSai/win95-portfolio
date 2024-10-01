import React, { useRef } from 'react'
import DraggableDialog from '../../DraggableDialog'
import { Label, EmailInput, Form, InputField, TextArea, Button } from './MailDialog.styles'
import emailjs from '@emailjs/browser'

const MailDialog = ({ dialog, handleSelectDialog, handleDialogAction, handleCloseDialog }) => {

    const form = useRef()

    const handleSubmitForm = (e) => {
        e.preventDefault(); // Fixed typo here

        emailjs.sendForm(
            "service_myid9m7", // Your EmailJS service ID
            "template_aiiin5y", // Your EmailJS template ID
            form.current,       // Your form reference
            "user_CuuCousr83FhJjcKAnbG7" // Your public key or user ID
        ).then(
            (result) => {
                console.log("Email successfully sent:", result.text);
                handleCloseDialog(dialog.id)
            },
            (error) => {
                console.error("Error sending email:", error.text);
            }
        );
    };
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
                height: 500
            }}
        >
            <Form ref={form} onSubmit={handleSubmitForm} action='#'>
                <EmailInput>
                    <Label>To</Label>
                    <InputField disabled name='to' value="sainam7740@gmail.com" />
                </EmailInput>
                <EmailInput>
                    <Label>From</Label>
                    <InputField name='email' />
                </EmailInput>
                <EmailInput>
                    <Label>Name</Label>
                    <InputField name='name' />
                </EmailInput>
                <EmailInput>
                    <Label>Subject</Label>
                    <InputField name='subject' />
                </EmailInput>
                <TextArea name='message' />
                <Button>Send</Button>
            </Form>
        </DraggableDialog>
    )
}

export default MailDialog