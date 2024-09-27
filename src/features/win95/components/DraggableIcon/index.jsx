import React from 'react'
import { DraggableIconContent, DraggableIconImg, DraggableIconLabel } from './DraggableIcon.styles'
import MyComputer from '../../assets/MyComputer.png'
import Draggable from 'react-draggable'

const DraggableIcon = ({ icon, handleOpenDialog }) => {
    return (
        <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            grid={[10, 10]}
            scale={1}
            bounds="parent"
        >
            <div className='handle' onDoubleClick={() => handleOpenDialog(icon.key)} style={{ width: "50px", marginBottom: "20px", display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <DraggableIconImg draggable={false} src={icon.iconImg} />
                <DraggableIconLabel>{icon.label}</DraggableIconLabel>
            </div>
        </Draggable>
    )
}

export default DraggableIcon