import React, { useEffect, useRef, useState } from 'react'
import DraggableDialog from '../../DraggableDialog'
import { InstallationImg, InstallationInfo, InfoContent, Paragraph, InstallationBody, InstallationActions, ActionButton, ParagraphLabel, ProgressBar, Progress, ProgressPercentage, ProgressContainer, Label, InstalledItemsContainer, Category, Categories, SubCategories, SubCategoryItem } from './BioDialog.styles'
import InstallationImgUrl from '../../../assets/installation_img.png'

const BioDialog = ({ dialog, handleSelectDialog, handleDialogAction, handleCloseDialog }) => {

    const [step, setStep] = useState(0)

    const [installedSkills, setInstalledSkills] = useState({
        frontend: [],
        backend: [],
        blockchain: []
    });
    const [progress, setProgress] = useState(0)
    const [skills, setSkills] = useState({
        frontend: [
            "HTML",
            "CSS",
            "Javascript",
            "Typescript",
            "Webpack",
            "React",
            "Redux",
            "WebRTC",
            "SCSS",
            "Git"
        ],
        backend: [
            "NodeJs",
            "ExpressJs",
            "Mongoose",
            "Restful API",
            "JWT",
            "Socket.io",
            "Python",
            "Django"
        ],
        blockchain: [
            "Solidity",
            "Web3.js",
            "Ethers.js",
            "Moralis",
            "Hardhat",
            "Openzeppelin",
            "Metamask"
        ]
    });

    const containerRef = useRef(null);

    useEffect(() => {
        const allSkills = [...skills.frontend, ...skills.backend, ...skills.blockchain]
        const totalSkills = allSkills.length
        let installedCount = 0

        const installSkill = () => {
            if (installedCount < totalSkills) {
                const randomTime = Math.random() * 1000
                setTimeout(() => {
                    const skillToInstall = allSkills[installedCount]

                    setInstalledSkills(prevState => {
                        const newState = { ...prevState }

                        if (skills.frontend.includes(skillToInstall)) {
                            newState.frontend = [...prevState.frontend, skillToInstall]
                        } else if (skills.backend.includes(skillToInstall)) {
                            newState.backend = [...prevState.backend, skillToInstall]
                        } else if (skills.blockchain.includes(skillToInstall)) {
                            newState.blockchain = [...prevState.blockchain, skillToInstall]
                        }

                        return newState
                    });

                    installedCount++

                    const percentage = Math.floor((installedCount / totalSkills) * 100)
                    setProgress(percentage)

                    installSkill()
                }, randomTime)
            }
        };

        if (step == 1)
            installSkill()
    }, [step, skills]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [installedSkills]);

    const handleSetNextStep = () => {
        if (step < 3)
            setStep(step + 1)
        else
            handleCloseDialog(dialog.id)
    }

    return (
        <DraggableDialog
            dialog={dialog}
            dialogTitle={dialog.title}
            resizable={false}
            handleSelectDialog={handleSelectDialog}
            handleDialogAction={handleDialogAction}
            handleCloseDialog={handleCloseDialog}
            showMenuBar={false}
            dialogDefaultDimensions={{
                width: 550,
                height: 400
            }}
        >
            <InfoContent>
                <InstallationBody>
                    {
                        step == 0 ?
                            <>
                                <InstallationImg src={InstallationImgUrl} />
                                <InstallationInfo>
                                    <Paragraph><ParagraphLabel>Name: </ParagraphLabel>Sainam Satam</Paragraph>
                                    <Paragraph><ParagraphLabel>Role: </ParagraphLabel>Frontend Developer</Paragraph>
                                    <Paragraph><ParagraphLabel>Location:</ParagraphLabel> Mumbai, Maharashtra</Paragraph>
                                    <Paragraph><ParagraphLabel>Contact: </ParagraphLabel>sainam7740@gmail.com | +91 9773227740</Paragraph>
                                    <Paragraph><ParagraphLabel>LinkedIn: </ParagraphLabel>linkedin.com/in/sainam-satam</Paragraph>
                                    <Paragraph style={{ marginBottom: '15px' }}><ParagraphLabel>GitHub: </ParagraphLabel>github.com/SatamSai</Paragraph>
                                    <Paragraph>I’m a Frontend Developer from Mumbai with a Bachelor’s degree in Computer Science. Currently, I work at Surreal Events, where I create dynamic user interfaces using ReactJS and Redux. I’m passionate about turning complex challenges into intuitive designs and am always eager to learn new technologies.</Paragraph>
                                </InstallationInfo>
                            </>
                            :
                            step == 1 ?
                                <>
                                    <InstallationImg src={InstallationImgUrl} />
                                    <InstallationInfo>
                                        <Label>Extracting...</Label>
                                        <ProgressBar>
                                            <ProgressPercentage>0%</ProgressPercentage>
                                            <Progress style={{ width: `${progress}%` }} />
                                        </ProgressBar>
                                    </InstallationInfo>
                                </> :
                                step == 2 ?
                                    <>
                                        <InstallationImg src={InstallationImgUrl} />
                                        <InstallationInfo>
                                            <InstalledItemsContainer ref={containerRef}>
                                                <Categories>
                                                    {Object.keys(installedSkills).map(category => {
                                                        if (installedSkills[category].length > 0) {
                                                            return (
                                                                <Category key={category}>
                                                                    {category.charAt(0).toUpperCase() + category.slice(1)}:
                                                                    <SubCategories>
                                                                        {installedSkills[category].map((skill, index) => (
                                                                            <SubCategoryItem key={index}>
                                                                                - {skill} ....DONE!
                                                                            </SubCategoryItem>
                                                                        ))}
                                                                    </SubCategories>
                                                                </Category>
                                                            );
                                                        }
                                                        return null;
                                                    })}
                                                </Categories>

                                            </InstalledItemsContainer>
                                            <ProgressContainer>
                                                <Label>Progress...</Label>
                                                <ProgressBar>
                                                    <ProgressPercentage>0%</ProgressPercentage>
                                                    <Progress style={{ width: `${progress}%` }} />
                                                </ProgressBar>
                                            </ProgressContainer>
                                        </InstallationInfo>
                                    </> : <></>
                    }
                </InstallationBody>
                <InstallationActions>
                    <ActionButton onClick={handleSetNextStep}>
                        {step == 3 ? "Finish" : "Next"}
                    </ActionButton>
                </InstallationActions>
            </InfoContent>
        </DraggableDialog>
    )
}

export default BioDialog