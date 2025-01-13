import { useState } from 'react'


import Tab from '@/components/TabBlock/Tab/Tab'
import TabContent from '@/components/TabBlock/TabContent/TabContent'
import ContentTable from "@/components/ContentTable/ContentTable"
import IngredientList from '@/components/Ingredient/IngredientList/IngredientList'
import Cooking from '@/components/Cooking/Cooking'

import { ITabData } from '@/types/global'

import styles from '@/components/TabBlock/TabBlock.module.sass'


const TabBlock = ({ data }: ITabData) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={styles.tabBlock}>
            <div className={styles.tags}>
                {data && data.map((item, index) => {
                    return (
                        <div key={index}>
                            <Tab onClick={() => setActiveTab(index)} index={index} activeTab={activeTab}>{item.name}</Tab>
                        </div>
                    )
                })}
            </div>

            {data && data.map((item, index) => {
                return (
                    <>
                        {index === activeTab &&
                            <TabContent key={index}>
                                {item.type && item.type === 'table' && <ContentTable data={item.data} />}
                                {item.type && item.type === 'card' && item.name === 'Ingredients' &&
                                    <IngredientList data={item.data}></IngredientList>
                                }
                                {item.type && item.type === 'steps' && item.name === 'Instructions' &&
                                    <Cooking data={item.data} />}
                                {!item.type && 'Content'}
                            </TabContent>
                        }
                    </>
                )
            })}
        </div>
    )
}

export default TabBlock;     