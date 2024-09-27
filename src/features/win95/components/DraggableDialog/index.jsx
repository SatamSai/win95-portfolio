import React, { useRef, useState } from 'react'
import Draggable from 'react-draggable'
import { DialogBody, Dialog, DialogContent, MenuBar, Title, TitleBar, TitleIcon, WindowOptions, WindowOption, WindowMinimize, WindowExpand, WindowClose, MenuOption } from './DraggableDialog.styles'
import { ResizableBox } from 'react-resizable'
import 'react-resizable/css/styles.css'

const DraggableDialog = (
    {
        dialog,
        dialogTitle,
        resizable = true,
        handleSelectDialog,
        handleDialogAction,
        handleCloseDialog,
        showMenuBar,
        dialogDefaultDimensions,
        children
    }) => {

    const [isMaximized, setIsMaximized] = useState(false)
    const [dimensions, setDimensions] = useState({
        width: dialogDefaultDimensions.width,
        height: dialogDefaultDimensions.height
    })

    const bounds = { left: 0, top: 0, right: Infinity, bottom: Infinity };

    const handleMouseDown = (e) => {
        e.currentTarget.classList.add('active')
    }

    const handleMouseUp = (e) => {
        e.currentTarget.classList.remove('active')
    }

    const onResize = (event, { size }) => {
        setDimensions({
            width: size.width,
            height: size.height
        })
    }


    return (
        <Draggable
            defaultPosition={{ x: 0, y: 0 }}
            handle='.titlebar'
            bounds={bounds}
        >
            <ResizableBox
                width={dimensions.width}
                height={dimensions.height}
                minConstraints={[dialogDefaultDimensions.width, dialogDefaultDimensions.height]}
                onResize={onResize}
                resizeHandles={resizable ? ['se'] : []}
            >
                <Dialog style={{ width: dimensions.width, height: dimensions.height, display: dialog.minimized ? 'none' : 'block' }} onMouseDownCapture={() => handleSelectDialog(dialog.id)} maximized={isMaximized} >
                    <DialogContent>
                        <TitleBar className='titlebar' selected={dialog.selected}>
                            <Title>
                                <TitleIcon src={dialog.icon} />
                                {dialogTitle}
                            </Title>
                            <WindowOptions>
                                <WindowOption onClick={() => { dialog.selected && handleDialogAction(dialog.id) }} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                                    <WindowMinimize />
                                </WindowOption>
                                <WindowOption onClick={() => setIsMaximized(!isMaximized)} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                                    <WindowExpand />
                                </WindowOption>
                                <WindowOption onClick={() => handleCloseDialog(dialog.id)} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                                    <WindowClose >X</WindowClose>
                                </WindowOption>
                            </WindowOptions>
                        </TitleBar>
                        <DialogBody>
                            {
                                showMenuBar &&
                                <MenuBar>
                                    <MenuOption>File</MenuOption>
                                    <MenuOption>Edit</MenuOption>
                                    <MenuOption>View</MenuOption>
                                    <MenuOption>Help</MenuOption>
                                </MenuBar>
                            }
                            {children}
                        </DialogBody>
                    </DialogContent>
                </Dialog>
            </ResizableBox>
        </Draggable>
    )
}

export default DraggableDialog