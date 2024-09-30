import React, { useState } from 'react'
import { DateTime, LeftContent, LogoWrapper, Option, OptionImg, OptionsGroup, Speaker, StartButton, StartOptions, StartOptionsContainer, Task, TaskBarContainer, TaskIcon, TaskTitle, Tasks, TasksContainer, Tools, WindowIcon, WindowsLogo } from './Toolbar.styles'
import WindowIconUrl from '../../assets/windowIcon.png'
import SpeakerUrl from '../../assets/speaker.png'
import WindowsLogoUrl from '../../assets/win95.png'
import ShutDownIconUrl from '../../assets/shutdownicon.png'
import InstagramIconUrl from '../../assets/instagram.png'
import LinkedinIconUrl from '../../assets/linkedin.png'
import GitHubIconUrl from '../../assets/github.png'
import Resume from '../../assets/folder.png'
import Projects from '../../assets/CloseFolder.png'

const TaskBar = ({ tasks, handleTaskBarItemClicked }) => {
    const [showStartOptions, setShowStartOptions] = useState(false)
    return (
        <TaskBarContainer>
            <LeftContent>
                <StartButton onClick={() => setShowStartOptions(!showStartOptions)} className={showStartOptions && "pressed"}>
                    <WindowIcon src={WindowIconUrl} />
                    Start
                </StartButton>
                {
                    showStartOptions &&
                    <StartOptionsContainer>
                        <LogoWrapper>
                            <WindowsLogo src={WindowsLogoUrl} />
                        </LogoWrapper>
                        <StartOptions>
                            <OptionsGroup>
                                <Option href='https://www.instagram.com/sainam_satam/'><OptionImg src={InstagramIconUrl} />Instagram</Option>
                                <Option href='https://github.com/SatamSai' target="_blank" rel="noopener noreferrer"><OptionImg src={GitHubIconUrl} />Github</Option>
                                <Option href='https://www.linkedin.com/in/sainam-satam-9722671b6/' target="_blank" rel="noopener noreferrer"><OptionImg src={LinkedinIconUrl} />LinkedIn</Option>
                                <Option><OptionImg src={Resume} />Projects</Option>
                                <Option><OptionImg src={Projects} />Resume</Option>
                            </OptionsGroup>
                            <Option><OptionImg src={ShutDownIconUrl} />Shut down...</Option>
                        </StartOptions>
                    </StartOptionsContainer>
                }
                <TasksContainer>
                    <Tasks>
                        {
                            tasks.map(task => {
                                return (
                                    <Task key={task.id} className={task.selected && "selected"} onClick={() => {
                                        handleTaskBarItemClicked(task.id)
                                    }}>
                                        <TaskIcon src={task.icon} />
                                        <TaskTitle>{task.title}</TaskTitle>
                                    </Task>
                                )
                            })
                        }
                    </Tasks>
                </TasksContainer>
            </LeftContent>
            <Tools>
                <Speaker src={SpeakerUrl} />
                <DateTime>06:33 PM</DateTime>
            </Tools>
        </TaskBarContainer>
    )
}

export default TaskBar