'use client';

import { Button, ConfigProvider, StepProps, Steps, ThemeConfig } from 'antd';
import styles from './ui.module.scss';
import { ShowHistory } from '@/shared/ui/icons/showHistory';
import { stepItemsData } from '../date';
import { useEffect, useState } from 'react';
import { getLastTwoElementsArray } from '../model';

export const FlowHistoryGraph = () => {
    const [isShowFullGraph, setShowFullGraph] = useState<boolean>(false);
    const [graphItems, setGraphItems] = useState<StepProps[]>(stepItemsData);
    const [missedGraphItemsArray, setMissedGraphItemsArray] = useState<number>(0);
    useEffect(() => {
        if (isShowFullGraph) {
            const newArray = getLastTwoElementsArray(stepItemsData, isShowFullGraph).newArray;
            const missedItems = getLastTwoElementsArray(stepItemsData, isShowFullGraph).missed;
            setGraphItems(newArray);
            setMissedGraphItemsArray(missedItems);
        } else {
            const newArray = getLastTwoElementsArray(stepItemsData, isShowFullGraph);
            const missedItems = getLastTwoElementsArray(stepItemsData, isShowFullGraph).missed;
            setGraphItems(newArray.newArray);
            setMissedGraphItemsArray(missedItems);
        }
    }, [isShowFullGraph]);
    return (
        <>
            <ConfigProvider theme={flowGraphTheme}>
                <section className={styles.layout}>
                    <Button
                        onClick={() => setShowFullGraph(!isShowFullGraph)}
                        size="middle"
                        icon={<ShowHistory />}
                        type="text">
                        Показать историю ({missedGraphItemsArray})
                    </Button>
                    <Steps
                        status="process"
                        direction="vertical"
                        current={graphItems.length - 1}
                        items={graphItems}
                    />
                </section>
            </ConfigProvider>
        </>
    );
};
const flowGraphTheme: ThemeConfig = {
    components: {
        Button: {
            colorText: '#74757A',
        },
        Steps: {
            iconSize: 32,
            controlHeight: 48,
            colorPrimary: '#449429',
            fontSize: 16,
        },
    },
};
