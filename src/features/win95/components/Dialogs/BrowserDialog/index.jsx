import React, { useState } from 'react'
import DraggableDialog from '../../DraggableDialog'
import { AddressBar, AddressInput, AddressLabel, BrowserOptions, BrowserWindow, Option, OptionImg, OptionLabel, VerticalLine } from './BrowserDialog.styles'
import StopIcon from '../../../assets/stop.png'

const BrowserDialog = ({ dialog, handleSelectDialog, handleDialogAction, handleCloseDialog }) => {


    const [address, setAddress] = useState(dialog.url)
    return (
        <DraggableDialog
            dialog={dialog}
            dialogTitle={dialog.title}
            handleSelectDialog={handleSelectDialog}
            handleDialogAction={handleDialogAction}
            handleCloseDialog={handleCloseDialog}
            showMenuBar={true}
            isDirectoryDialog={false}
            dialogDefaultDimensions={{
                width: 900,
                height: 700
            }}
        >
            <BrowserOptions>
                <VerticalLine />
                <Option>
                    <OptionImg src={StopIcon} />
                    <OptionLabel>Forward</OptionLabel>
                </Option>
                <Option>
                    <OptionImg src={StopIcon} />
                    <OptionLabel>Back</OptionLabel>
                </Option>
                <Option>
                    <OptionImg src={StopIcon} />
                    <OptionLabel>Stop</OptionLabel>
                </Option>
                <Option>
                    <OptionImg src={StopIcon} />
                    <OptionLabel>Refresh</OptionLabel>
                </Option>
                <Option>
                    <OptionImg src={StopIcon} />
                    <OptionLabel>Home</OptionLabel>
                </Option>
            </BrowserOptions>
            <AddressBar>
                <AddressLabel>
                    Address
                </AddressLabel>
                <AddressInput value={address} disabled />
            </AddressBar>
            <BrowserWindow src={address} frameborder="1" allowfullscreen>

            </BrowserWindow>
        </DraggableDialog>
    )
}

export default BrowserDialog