'use client';

import { IFlowStatus } from '@/shared/interface/flowStatus';
import { getButtonsArrayByType } from '../model';
import styles from './ui.module.scss';
export const FlowManagement = ({ props }: { props: IFlowStatus }) => {
    const itemsArray = getButtonsArrayByType(props.statusCode).buttonsArray;
    return (
        <>
            <section className={styles.layout}>
                {itemsArray && itemsArray.map((Item, index) => <Item key={index} />)}
            </section>
        </>
    );
};
