import React, { FC } from 'react';

import styles from './ui.module.scss';
import { Flex } from 'antd';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
import { ITariffData } from '../../data';
import Link from 'next/link';

export const CardTariff: FC<ITariffData> = ({ name, quantity, price }) => {
    const { width, height } = useWindowSize();

    const ButtonBuy: FC = () => {
        return (
            <Link href="#contact">
                <button className={styles.buttonBuy}>Купить</button>
            </Link>
        );
    };

    return (
        <div className={styles.wrapCardTariff}>
            <div className={styles.wrapTopContentCard}>
                <Flex gap="middle" vertical>
                    <h3 className={styles.textName}>{name}</h3>
                    <h3 className={styles.textQuantity}>{quantity} тысяч сотрудников</h3>
                </Flex>
                {width > 820 && <ButtonBuy />}
            </div>
            <div>
                <h3 className={styles.textPrice}>{price} 000₽</h3>
                <h3 className={styles.textMounth}>в месяц</h3>
            </div>
            {width < 820 && <ButtonBuy />}
        </div>
    );
};
