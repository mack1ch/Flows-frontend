import Link from 'next/link';
import { hardFormData, simpleFormData } from '../data';
import styles from './ui.module.scss';

export const FlowCreateChoose = () => {
    return (
        <>
            <div className={styles.layout}>
                <Link className={styles.section} href="/flows/create/commerce">
                    <h2 className={styles.section__title}>Форма для некоммерческого отдела</h2>
                    <h3 className={styles.section__discription}>
                        Используйте эту форму, если ваша идея не затрагивает добавление товаров на
                        полки магазина
                    </h3>
                    <p className={styles.section_list_title}>Данные для заполнения заявки:</p>
                    <ul
                        className={styles.section__list}
                        style={{ listStyle: 'disc' }}
                        itemType="disc">
                        {hardFormData.map((item, index) => (
                            <li
                                className={styles.section__item}
                                style={{ listStyle: 'disc' }}
                                key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <h4 className={styles.section_add}>
                        Здесь ты можешь оставить любое предложение для нашего формата магазинов, не
                        относящегося к коммерческому отделу (для КО другая форма)
                    </h4>
                </Link>
                <Link className={styles.section} href="/flows/create/nocommerce">
                    <h2 className={styles.section__title}>Форма для коммерческого отдела</h2>
                    <h3 className={styles.section__discription}>
                        Используйте эту форму, если ваша заявка еще не полностью проработана
                    </h3>
                    <p className={styles.section_list_title}>Данные для заполнения заявки:</p>
                    <ul
                        className={styles.section__list}
                        style={{ listStyle: 'disc' }}
                        itemType="disc">
                        {simpleFormData.map((item, index) => (
                            <li
                                className={styles.section__item}
                                style={{ listStyle: 'disc' }}
                                key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <h4 className={styles.section_add}>
                        Если ты хочешь добавить новый товар на полки Жизньмарта, то эта форма для
                        этого
                    </h4>
                </Link>
            </div>
        </>
    );
};
