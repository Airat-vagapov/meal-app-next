import { useState } from 'react'


import Tab from '@/components/TabBlock/Tab/Tab'
import TabContent from '@/components/TabBlock/TabContent/TabContent'
import ContentTable from "@/components/ContentTable/ContentTable"

import { ITabData } from '@/types/global'

import styles from '@/components/TabBlock/TabBlock.module.sass'

const TabBlock = ({ data }: ITabData) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            Tab block
            <div className={styles.tabBlock}>
                <div className={styles.tags}>
                    {data && data.map((item, index) => {
                        return (
                            <div key={index}>
                                <Tab onClick={() => setActiveTab(index)}>{item.name}</Tab>
                            </div>
                        )
                    })}
                </div>

                {data && data.map((item, index) => {
                    return (
                        <div key={index}>
                            {index === activeTab &&
                                <TabContent>
                                    {item.type && item.type === 'table' && <ContentTable data={item.data} />}
                                    {!item.type && 'Content'}
                                </TabContent>}
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default TabBlock;     