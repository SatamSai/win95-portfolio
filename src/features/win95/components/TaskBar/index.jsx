import React from 'react'
import { DateTime, LeftContent, Speaker, StartButton, Task, TaskBarContainer, TaskIcon, TaskTitle, Tasks, Tools, WindowIcon } from './Toolbar.styles'
import WindowIconUrl from '../../assets/windowIcon.png'
import SpeakerUrl from '../../assets/speaker.png'

const TaskBar = ({ tasks, handleTaskBarItemClicked }) => {
    return (
        <TaskBarContainer>
            <LeftContent>
                <StartButton>
                    <WindowIcon src={WindowIconUrl} />
                    Start
                </StartButton>
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
            </LeftContent>
            <Tools>
                <Speaker src={SpeakerUrl} />
                <DateTime>06:33 PM</DateTime>
            </Tools>
        </TaskBarContainer>
    )
}

export default TaskBar