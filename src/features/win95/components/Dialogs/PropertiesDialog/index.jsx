import React, { useState } from 'react'
import DraggableDialog from '../../DraggableDialog'
import { PropertiesWrapper, Tab, TabContent, Tabs } from './PropertiesDialog.styles'

const PropertiesDialog = ({ dialog, handleSelectDialog, handleDialogAction, handleCloseDialog }) => {

    const [selectedTab, setSelectedTab] = useState(0)
    return (
        <DraggableDialog
            dialog={dialog}
            dialogTitle={dialog.title}
            handleSelectDialog={handleSelectDialog}
            handleDialogAction={handleDialogAction}
            handleCloseDialog={handleCloseDialog}
            showMenuBar={false}
            dialogDefaultDimensions={{
                width: 400,
                height: 450
            }}
        >
            <PropertiesWrapper>
                <Tabs>
                    <Tab className={selectedTab == 0 && "selected"} onClick={() => setSelectedTab(0)}>Employment Details</Tab>
                    <Tab className={selectedTab == 1 && "selected"} onClick={() => setSelectedTab(1)}>Work</Tab>
                    <Tab className={selectedTab == 2 && "selected"} onClick={() => setSelectedTab(2)}>Tech Stack</Tab>
                </Tabs>
                <TabContent>
                    {
                        selectedTab == 0 && "Under development"
                    }
                </TabContent>
            </PropertiesWrapper>
        </DraggableDialog>
    )
}

export default PropertiesDialog