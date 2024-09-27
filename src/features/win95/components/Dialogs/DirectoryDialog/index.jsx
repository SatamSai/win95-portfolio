import React, { useEffect, useState } from 'react'
import DraggableDialog from '../../DraggableDialog'
import Folder from '../../../assets/folder.png'
import ResumeIcon from '../../../assets/resume.png'
import CaretDown from '../../../assets/caret-down.svg'
import BackIcon from '../../../assets/back.png'
import InternetExplorer from '../../../assets/internetExplorer.png'
import { BackButton, CaretIcon, DropdownFolder, DropdownOptions, FolderContent, FolderDepthDropdown, FolderDepthDropdownContainer, FolderFooter, FolderIcon, FolderItem, FolderOptions, FolderViewOptions, Folders, ItemIcon, ItemLabel, ObjectsSize, SelectedObjects, SelectedOption } from './DirectoryDialog.styles'

const DirectoryDialog = ({ dialog, handleSelectDialog, handleDialogAction, handleCloseDialog, handleOpenDialog }) => {

    const [folderDepth, setFolderDepth] = useState([
        {
            key: dialog.key,
            title: dialog.title,
            icon: dialog.icon
        }
    ])

    const [showDropdownOptions, setShowDropdownOptions] = useState(false)

    const [directories, setDirectories] = useState({
        projects: {
            title: "Projects",
            icon: Folder,
            size: "80.05 MB",
            subDirectories: {
                kanban: {
                    title: "KanBan Board",
                    icon: Folder,
                    size: "50.05 MB",
                    subDirectories: {
                        kanbanHtml: {
                            title: "Kanban",
                            icon: InternetExplorer,
                            size: "50.05 MB",
                            action: () => handleOpenDialog("kanbanHtml"),
                            subDirectories: {}
                        }
                    }
                },
                movieBase: {
                    title: "MovieBase",
                    icon: Folder,
                    size: "30 MB",
                    subDirectories: {
                        movieBaseHtml: {
                            title: "MovieBase",
                            icon: InternetExplorer,
                            size: "50.05 MB",
                            action: () => {
                                handleOpenDialog("movieBaseHtml")
                            },
                            subDirectories: {}
                        }
                    }
                },
                learnBlock: {
                    title: "LearnBlock",
                    icon: Folder,
                    size: "30 MB",
                    subDirectories: {
                        movieBaseHtml: {
                            title: "LearnBlock",
                            icon: InternetExplorer,
                            size: "50.05 MB",
                            action: () => handleOpenDialog("learnBlockHtml"),
                            subDirectories: {}
                        }
                    }
                }
            }
        },
        resume: {
            title: "Resume",
            icon: Folder,
            size: "21 MB",
            subDirectories: {
                resume: {
                    title: "Resume",
                    icon: ResumeIcon,
                    size: "50.05 MB",
                    action: () => handleOpenDialog("resumePdf"),
                    subDirectories: {}
                },
            }
        },
        experience: {
            title: "Experience",
            icon: Folder,
            size: "80.05 MB",
            subDirectories: {
                surreal: {
                    title: "Surreal Events",
                    icon: Folder,
                    size: "50.05 MB",
                    subDirectories: {}
                },
                decimal: {
                    title: "DPA",
                    icon: Folder,
                    size: "30 MB",
                    subDirectories: {}
                }
            }
        }
    })

    const [currentDir, setCurrentDir] = useState(directories[dialog.key])

    const handleSelectSubFolder = (key, title, icon) => {
        const path = [...folderDepth]
        path.push({
            key: key,
            title: title,
            icon: icon
        })
        setFolderDepth(path)
    }

    const handleMoveBackFolder = () => {
        if (folderDepth.length > 1) {
            const path = [...folderDepth]
            path.pop()
            setFolderDepth(path)
        }
    }

    useEffect(() => {
        const currDir = folderDepth.reduce((dirInfo, folder, index) => {
            if (index == 0) return dirInfo
            return dirInfo.subDirectories[folder.key]
        }, directories[dialog.key])
        setCurrentDir(currDir)
    }, [folderDepth])

    const handleFolderItemClick = (key, value) => {
        if (value.action) {
            value.action()
            return
        }
        handleSelectSubFolder(key, value.title, value.icon);
    };

    return (
        <DraggableDialog
            dialog={dialog}
            dialogTitle={currentDir.title}
            handleSelectDialog={handleSelectDialog}
            handleDialogAction={handleDialogAction}
            handleCloseDialog={handleCloseDialog}
            showMenuBar={true}
            dialogDefaultDimensions={{
                width: 400,
                height: 300
            }}
        >
            <FolderOptions>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FolderDepthDropdownContainer>
                        <FolderDepthDropdown onClick={() => setShowDropdownOptions(!showDropdownOptions)}>
                            <SelectedOption>
                                <FolderIcon src={currentDir?.icon} />{currentDir?.title}
                            </SelectedOption>
                            <CaretIcon src={CaretDown} />
                        </FolderDepthDropdown>
                        <DropdownOptions style={{ display: showDropdownOptions ? "block" : "none" }}>
                            {
                                folderDepth.map(folder => {
                                    return <DropdownFolder><FolderIcon src={folder.icon} />{folder.title}</DropdownFolder>
                                })
                            }
                        </DropdownOptions>
                    </FolderDepthDropdownContainer>
                    <BackButton src={BackIcon} onClick={handleMoveBackFolder} />
                </div>
                <FolderViewOptions></FolderViewOptions>
            </FolderOptions>
            <FolderContent>
                <Folders>
                    {
                        currentDir.subDirectories && Object.entries(currentDir.subDirectories).map(([key, value]) => {
                            return (
                                <FolderItem onDoubleClick={() => handleFolderItemClick(key, value)}
                                >
                                    <ItemIcon src={value.icon} />
                                    <ItemLabel>{value.title}</ItemLabel>
                                </FolderItem>
                            )
                        })
                    }
                </Folders>
            </FolderContent>
            <FolderFooter>
                <SelectedObjects>2 object(s)</SelectedObjects>
                <ObjectsSize>80.05</ObjectsSize>
            </FolderFooter>
        </DraggableDialog>
    )
}

export default DirectoryDialog