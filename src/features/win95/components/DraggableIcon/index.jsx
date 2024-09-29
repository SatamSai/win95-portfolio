import React, { useState } from 'react'
import { DraggableIconContent, DraggableIconImg, DraggableIconLabel, IconWrapper } from './DraggableIcon.styles'
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
            <IconWrapper className='handle' onTouchStart={() => handleDoubleClickOrTap(icon.key)} onDoubleClick={() => handleOpenDialog(icon.key)}>
                <DraggableIconImg draggable={false} src={icon.iconImg} />
                <DraggableIconLabel>{icon.label}</DraggableIconLabel>
            </IconWrapper>
        </Draggable>
    )
}

export default DraggableIcon