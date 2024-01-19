'use client';


import { IFlowStatus } from '@/shared/interface/flow';
import { getButtonsArrayByType } from '../model';
import styles from './ui.module.scss';
export const FlowManagement = ({ props }: { props: IFlowStatus }) => {
    const itemsArray = getButtonsArrayByType(props.status_type).buttonsArray;
    return (
        <>
            <section className={styles.layout}>
                {itemsArray && itemsArray.map((Item, index) => <Item key={index} />)}
            </section>
        </>
    );
};
