'use client';

import { Button, ConfigProvider, StepProps, Steps, ThemeConfig } from 'antd';
import styles from './ui.module.scss';
import { ShowHistory } from '@/shared/ui/icons/showHistory';
import { useEffect, useState } from 'react';
import { getLastTwoElementsArray } from '../model';
import { IFlow, IFlowHistory } from '@/shared/interface/flow';
import { convertHistoryToStepProps } from '@/shared/lib/parse/flowGraph';

export const FlowHistoryGraph = ({ flowData }: { flowData: IFlow }) => {
    const [isShowFullGraph, setShowFullGraph] = useState<boolean>(false);
    const [graphItems, setGraphItems] = useState<StepProps[]>([] as StepProps[]);
    const [missedGraphItemsArray, setMissedGraphItemsArray] = useState<number>(0);
    const historyItems: IFlowHistory[] = flowData.history || [];
    const stepPropsArray: StepProps[] = convertHistoryToStepProps(historyItems);

    useEffect(() => {
        if (isShowFullGraph) {
            const { newArray, missed } = getLastTwoElementsArray(stepPropsArray, isShowFullGraph);
            setGraphItems(newArray);
            setMissedGraphItemsArray(missed);
        } else {
            const { newArray, missed } = getLastTwoElementsArray(stepPropsArray, isShowFullGraph);

            setGraphItems(newArray);
            setMissedGraphItemsArray(missed);
        }
    }, [isShowFullGraph, flowData]);
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
