import React, { useState } from 'react'
import { DraggableIconContent, DraggableIconImg, DraggableIconLabel } from './DraggableIcon.styles'
import MyComputer from '../../assets/MyComputer.png'
import Draggable from 'react-draggable'

const DraggableIcon = ({ icon, handleOpenDialog }) => {
    const [lastTap, setLastTap] = useState(0);

    const handleDoubleClickOrTap = (key) => {
        const currentTime = new Date().getTime();
        const tapGap = currentTime - lastTap;

        if (tapGap < 300 && tapGap > 0) {
            handleOpenDialog(key);
        }
        setLastTap(currentTime);
    };

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
            <div className='handle' onTouchStart={() => handleDoubleClickOrTap(icon.key)} onDoubleClick={() => handleOpenDialog(icon.key)} style={{ width: "50px", marginBottom: "20px", display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <DraggableIconImg draggable={false} src={icon.iconImg} />
                <DraggableIconLabel>{icon.label}</DraggableIconLabel>
            </div>
        </Draggable>
    )
}

export default DraggableIcon