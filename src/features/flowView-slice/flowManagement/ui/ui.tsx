'use client';


import { IFlowStatus } from '@/shared/interface/flow';
import { getButtonsArrayByType } from '../model';
import styles from './ui.module.scss';
export const FlowManagement = ({ flowStatus }: { flowStatus?: IFlowStatus }) => {

    const itemsArray = getButtonsArrayByType(flowStatus ? flowStatus.status_type : 'proposal_created').buttonsArray;
    return (
        <>
            <section className={styles.layout}>
                {itemsArray && itemsArray.map((Item, index) => <Item key={index} />)}
            </section>
        </>
    );
};
