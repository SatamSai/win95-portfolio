import React, { useRef, useState } from 'react'
import { DialogLayer, GlobalStyle, IconsLayer, MainScreen, WinScreen } from './styles'
import DraggableIcon from '../components/DraggableIcon'
import TaskBar from '../components/TaskBar'

import AboutMe from '../assets/MyComputer.png'
import Resume from '../assets/folder.png'
import Projects from '../assets/CloseFolder.png'
import MineSweeper from '../assets/minesweepericon.png'
import InternetExplorer from '../assets/internetExplorer.png'
import Mail from '../assets/mail.png'
import DirectoryDialog from '../components/Dialogs/DirectoryDialog'
import BrowserDialog from '../components/Dialogs/BrowserDialog'
import MailDialog from '../components/Dialogs/MailDialog'
import BioDialog from '../components/Dialogs/BioDialog'
import MineSweeperDialog from '../components/Dialogs/MineSweeperDialog'
import PdfViewer from '../components/Dialogs/PdfViewer'
const Home = () => {

    const [icons, setIcons] = useState([
        {
            id: 1,
            iconImg: AboutMe,
            label: "Profile Setup",
            key: "bio"
        },
        {
            id: 2,
            iconImg: Resume,
            label: "Resume",
            key: "resume"
        },
        {
            id: 3,
            iconImg: Projects,
            label: "Projects",
            key: "projects"
        },
        {
            id: 4,
            iconImg: Projects,
            label: "Experience",
            key: "experience"
        },
        {
            id: 6,
            iconImg: MineSweeper,
            label: "Mine Sweeper",
            key: "minesweeper"
        },
        {
            id: 7,
            iconImg: Mail,
            label: "Contact Me",
            key: "contact"
        }
    ])

    const dialogs = {
        bio: {
            type: "bio",
            title: "Installation Wizard",
            icon: AboutMe,
        },
        projects: {
            type: "dir",
            title: "Projects",
            icon: Projects,
        },
        resumePdf: {
            type: "pdf",
            title: "Resume",
            icon: Resume,
        },
        resume: {
            type: "dir",
            title: "Resume",
            icon: Resume,
        },
        experience: {
            type: "dir",
            title: "Experience",
            icon: Projects,
        },
        kanbanHtml: {
            type: "browser",
            title: "Internet Explorer",
            icon: InternetExplorer,
            url: "https://moviebase22.netlify.app/"
        },
        movieBaseHtml: {
            type: "browser",
            title: "Internet Explorer",
            icon: InternetExplorer,
            url: "https://moviebase22.netlify.app/"
        },
        learnBlockHtml: {
            type: "browser",
            title: "Internet Explorer",
            icon: InternetExplorer,
            url: "https://learnblock.netlify.app/"
        },
        minesweeper: {
            type: "minesweeper",
            title: "Mine Sweeper",
            icon: MineSweeper
        },
        contact: {
            type: "mail",
            title: "Mail",
            icon: Mail
        }
    }

    const [openDialogs, setOpenDialogs] = useState([])


    const handleOpenDialog = (key) => {
        const dialogList = openDialogs.map(dialog => {
            return {
                ...dialog,
                selected: false
            }
        })
        const newDialog = {
            id: dialogList.length,
            key: key,
            ...dialogs[key],
            selected: true,
            minimized: false,
            layerId: dialogList.length + 1
        }

        dialogList.push(newDialog)

        setOpenDialogs(dialogList)
    }

    const handleSelectDialog = (id) => {

        const newlySelectedDialog = openDialogs.find(dialog => dialog.id == id)

        const updatedDialogStates = openDialogs.map(dialog => {
            return {
                ...dialog,
                selected: dialog.id == id ? true : false,
                layerId: dialog.id == id ? openDialogs.length + 1 : newlySelectedDialog.layerId < dialog.layerId ? dialog.layerId - 1 : dialog.layerId
            }
        })

        setOpenDialogs(updatedDialogStates)
    }

    const handleCloseDialog = (id) => {

        const updatedDialogStates = openDialogs.filter(dialog => dialog.id != id).map(dialog => {
            return {
                ...dialog,
                selected: dialog.layerId == openDialogs.length && !dialog.minimized ? true : false,
            }
        })

        setOpenDialogs(updatedDialogStates)
    }

    const handleDialogAction = (id) => {
        const clickedItem = openDialogs.find(dialog => dialog.id == id)

        if (clickedItem.selected) {
            const updatedDialogStates = openDialogs.map(dialog => {
                return {
                    ...dialog,
                    selected: dialog.id == id ? false : dialog.layerId == openDialogs.length && !dialog.minimized ? true : false,
                    layerId: dialog.id == id ? 2 : dialog.layerId + 1,
                    minimized: dialog.id == id ? true : dialog.minimized
                }
            })
            setOpenDialogs(updatedDialogStates)
        }
        else if (clickedItem.minimized) {
            const updatedDialogStates = openDialogs.map(dialog => {
                return {
                    ...dialog,
                    selected: dialog.id == id ? true : false,
                    layerId: dialog.id == id ? openDialogs.length + 1 : dialog.layerId - 1,
                    minimized: dialog.id == id ? false : dialog.minimized
                }
            })
            setOpenDialogs(updatedDialogStates)
        }
        else {
            handleSelectDialog(id)
        }
    }

    return (
        <WinScreen>
            <GlobalStyle />
            <MainScreen>
                {
                    openDialogs.map(dialog => {
                        return (
                            <DialogLayer key={dialog.id} style={{ zIndex: dialog.layerId }}>
                                {
                                    dialog.type == "dir" ?
                                        <DirectoryDialog dialog={dialog} handleSelectDialog={handleSelectDialog} handleDialogAction={handleDialogAction} handleCloseDialog={handleCloseDialog} handleOpenDialog={handleOpenDialog} /> :
                                        dialog.type == "browser" ?
                                            <BrowserDialog dialog={dialog} handleSelectDialog={handleSelectDialog} handleDialogAction={handleDialogAction} handleCloseDialog={handleCloseDialog} /> :
                                            dialog.type == "mail" ?
                                                <MailDialog dialog={dialog} handleSelectDialog={handleSelectDialog} handleDialogAction={handleDialogAction} handleCloseDialog={handleCloseDialog} /> :
                                                dialog.type == "bio" ?
                                                    <BioDialog dialog={dialog} handleSelectDialog={handleSelectDialog} handleDialogAction={handleDialogAction} handleCloseDialog={handleCloseDialog} /> :
                                                    dialog.type == "minesweeper" ?
                                                        <MineSweeperDialog dialog={dialog} handleSelectDialog={handleSelectDialog} handleDialogAction={handleDialogAction} handleCloseDialog={handleCloseDialog} /> :
                                                        dialog.type == "pdf" ?
                                                            <PdfViewer dialog={dialog} handleSelectDialog={handleSelectDialog} handleDialogAction={handleDialogAction} handleCloseDialog={handleCloseDialog} /> : <></>
                                }
                            </DialogLayer>
                        )
                    })
                }
                <IconsLayer>
                    {
                        icons.map(icon => {
                            return (
                                <DraggableIcon key={icon.id} icon={icon} handleOpenDialog={handleOpenDialog} />
                            )
                        })
                    }
                </IconsLayer>
            </MainScreen>
            <TaskBar tasks={openDialogs} handleTaskBarItemClicked={handleDialogAction} />
        </WinScreen>
    )
}

export default Home