import React, { useState, useEffect } from 'react';
import DraggableDialog from '../../DraggableDialog';
import { NotepadInput } from './NotepadDialog.styles';
import data from '../../../data.json'

const NotepadDialog = ({ dialog, handleSelectDialog, handleDialogAction, handleCloseDialog }) => {
    const [textContent, setTextContent] = useState('');

    useEffect(() => {
        if (dialog.key === "packageJson") {
            const skillsTemplate = data.packageJson;
            setTextContent(skillsTemplate.replace(/\\n/g, '\n'));;
        }
        else {
            const project = data.projects.find(proj => proj.key === dialog.key);
            if (project) {
                const projectText = `
============================================================
                    ${project.name.toUpperCase()} ${project.version} README
============================================================

Product: ${project.name}
Version: ${project.version}
Release Date: ${project.release_date}

------------------------------------------------------------
DESCRIPTION:
${project.description}

------------------------------------------------------------
SYSTEM REQUIREMENTS:
${project.requirements.join('\n')}

------------------------------------------------------------
INSTALLATION INSTRUCTIONS:
${project.installation.join('\n')}

------------------------------------------------------------
SUPPORT:
${project.support}
============================================================
            `;
                setTextContent(projectText);
            }
        }
    }, [dialog]);

    return (
        <DraggableDialog
            dialog={dialog}
            dialogTitle={dialog.title}
            handleSelectDialog={handleSelectDialog}
            handleDialogAction={handleDialogAction}
            handleCloseDialog={handleCloseDialog}
            showMenuBar={true}
            dialogDefaultDimensions={{
                width: 550,
                height: 400
            }}
        >
            <NotepadInput value={textContent} onChange={(e) => setTextContent(e.target.value)} />
        </DraggableDialog>
    );
};

export default NotepadDialog;
