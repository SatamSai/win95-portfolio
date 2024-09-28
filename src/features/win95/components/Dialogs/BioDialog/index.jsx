import React, { useEffect, useRef, useState } from 'react'
import DraggableDialog from '../../DraggableDialog'
import { InstallationImg, InstallationInfo, InfoContent, Paragraph, InstallationBody, InstallationActions, ActionButton, ParagraphLabel, ProgressBar, Progress, ProgressPercentage, ProgressContainer, Label, InstalledItemsContainer, Category, Categories, SubCategories, SubCategoryItem, CheckIcon } from './BioDialog.styles'
import InstallationImgUrl from '../../../assets/installation_img.png'
import CheckIconUrl from '../../../assets/check.png'

const BioDialog = ({ dialog, handleSelectDialog, handleDialogAction, handleCloseDialog }) => {

    const [step, setStep] = useState(0)
    const [progress, setProgress] = useState(100)

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

    const [installedSkills, setInstalledSkills] = useState({
        frontend: [],
        backend: [],
        blockchain: []
    });

    const [extractedResources, setExtractedResources] = useState({
        resume: [],
        projects: [],
        experience: []
    });

    const [extractableResources, setExtractableResources] = useState({
        resume: ["Resume"],
        projects: ["Learnblock", "Moviebase", "Kanban"],
        experience: ["Surreal Events", "Decimal Point Analytics"]
    });

    const containerRef = useRef(null);

    useEffect(() => {
        const allSkills = [...skills.frontend, ...skills.backend, ...skills.blockchain]
        const totalSkills = allSkills.length
        let installedCount = 0
        setProgress(0)

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

        if (step == 2)
            installSkill()
    }, [step, skills]);

    useEffect(() => {
        const allResources = [
            ...extractableResources.resume,
            ...extractableResources.projects,
            ...extractableResources.experience
        ];
        const totalResources = allResources.length;
        let extractedCount = 0;

        setProgress(0);

        const extractResources = () => {
            if (extractedCount < totalResources) {
                const randomTime = Math.random() * 1000;
                setTimeout(() => {
                    const resourceToExtract = allResources[extractedCount];

                    setExtractedResources(prevState => {
                        const newState = { ...prevState };

                        if (extractableResources.resume.includes(resourceToExtract)) {
                            newState.resume = [...prevState.resume, resourceToExtract];
                        } else if (extractableResources.projects.includes(resourceToExtract)) {
                            newState.projects = [...prevState.projects, resourceToExtract];
                        } else if (extractableResources.experience.includes(resourceToExtract)) {
                            newState.experience = [...prevState.experience, resourceToExtract];
                        }

                        return newState;
                    });

                    extractedCount++;

                    const percentage = Math.floor((extractedCount / totalResources) * 100);
                    setProgress(percentage);

                    extractResources();
                }, randomTime);
            }
        };

        if (step === 1) {
            extractResources();
        }
    }, [step, extractableResources]);


    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [installedSkills, extractedResources]);

    const handleSetNextStep = () => {
        if (step < 3) {
            setStep(step + 1)
        }
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
                            </> :
                            step == 1 || step == 2 ?
                                <>
                                    <InstallationImg src={InstallationImgUrl} />
                                    <InstallationInfo>
                                        <InstalledItemsContainer ref={containerRef}>
                                            <Categories>
                                                {
                                                    step == 1 ?
                                                        Object.keys(extractedResources).map(category => {
                                                            if (extractedResources[category].length > 0) {
                                                                return (
                                                                    <Category key={category}>
                                                                        {category.charAt(0).toUpperCase() + category.slice(1)}:
                                                                        <SubCategories>
                                                                            {extractedResources[category].map((resource, index) => (
                                                                                <SubCategoryItem key={index}>
                                                                                    - {resource}<CheckIcon src={CheckIconUrl} />
                                                                                </SubCategoryItem>
                                                                            ))}
                                                                        </SubCategories>
                                                                    </Category>
                                                                );
                                                            }
                                                            return null;
                                                        })
                                                        :
                                                        Object.keys(installedSkills).map(category => {
                                                            if (installedSkills[category].length > 0) {
                                                                return (
                                                                    <Category key={category}>
                                                                        {category.charAt(0).toUpperCase() + category.slice(1)}:
                                                                        <SubCategories>
                                                                            {installedSkills[category].map((skill, index) => (
                                                                                <SubCategoryItem key={index}>
                                                                                    - {skill}<CheckIcon src={CheckIconUrl} />
                                                                                </SubCategoryItem>
                                                                            ))}
                                                                        </SubCategories>
                                                                    </Category>
                                                                );
                                                            }
                                                            return null;
                                                        })
                                                }
                                            </Categories>

                                        </InstalledItemsContainer>
                                        <ProgressContainer>
                                            <Label>{step == 1 ? "Extracting.." : "Progress..."}</Label>
                                            <ProgressBar>
                                                <ProgressPercentage style={{ color: progress > 50 ? "white" : "black" }}>{progress}%</ProgressPercentage>
                                                <Progress style={{ width: `${progress}%` }} />
                                            </ProgressBar>
                                        </ProgressContainer>
                                    </InstallationInfo>
                                </> :
                                <>
                                    <InstallationImg src={InstallationImgUrl} />
                                    <InstallationInfo>
                                        <ParagraphLabel>Setup complete! The Profile Hub has been installed.</ParagraphLabel>
                                        <Paragraph>You are now ready to explore:</Paragraph>
                                        <Paragraph style={{ marginLeft: '10px' }}>- Resume</Paragraph>
                                        <Paragraph style={{ marginLeft: '10px' }}>- Experience</Paragraph>
                                        <Paragraph style={{ marginLeft: '10px' }}>- Projects</Paragraph>
                                        <Paragraph style={{ marginLeft: '10px' }}>- Skills</Paragraph>
                                        <Paragraph>Folders have been created on your desktop for easy access. Feel free to open them to learn more about my work!</Paragraph>
                                    </InstallationInfo>
                                </>
                    }
                </InstallationBody>
                <InstallationActions>
                    <ActionButton
                        onClick={handleSetNextStep}
                        onMouseDown={(e) => {
                            e.target.classList.add('active')
                        }}
                        onMouseUp={(e) => {
                            e.target.classList.remove('active')
                        }}
                        disabled={((step == 1 || step == 2) && progress != 100)}
                    >
                        {step == 3 ? "Finish" : "Next"}
                    </ActionButton>
                </InstallationActions>
            </InfoContent>
        </DraggableDialog>
    )
}

export default BioDialog