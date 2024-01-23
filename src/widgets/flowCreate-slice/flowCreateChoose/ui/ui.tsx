import Link from 'next/link'
import { hardFormData, simpleFormData } from '../data'
import styles from './ui.module.scss'

export const FlowCreateChoose = () => {
    return (<>
        <div className={styles.layout}>
            <Link className={styles.section} href='/flows/create'>
                <h2 className={styles.section__title}>Упрощенный формат</h2>
                <h3 className={styles.section__discription}>Если у вас не достаточно времени для подачи заявки или вы не знаете как расписать ее</h3>
                <p className={styles.section_list_title}>Данные для заполнения заявки:</p>
                <ul className={styles.section__list} style={{ listStyle: 'disc' }} itemType='disc'>
                    {
                        simpleFormData.map((item, index) => <li className={styles.section__item} style={{ listStyle: 'disc' }} key={index}>{item}</li>)
                    }
                </ul>
                <h4 className={styles.section_add}>
                    Не забывайте, чем лучше вы распишете свою идею, тем больше вероятность ее реализации
                </h4>
            </Link>
            <Link className={styles.section} href='/flows/create'>
                <h2 className={styles.section__title}>Полный формат</h2>
                <h3 className={styles.section__discription}>Если вы хотите расписать свою идею самым наилучшим образом и продумали все до мелочей</h3>
                <p className={styles.section_list_title}>Данные для заполнения заявки:</p>
                <ul className={styles.section__list} style={{ listStyle: 'disc' }} itemType='disc'>
                    {
                        hardFormData.map((item, index) => <li className={styles.section__item} style={{ listStyle: 'disc' }} key={index}>{item}</li>)
                    }
                </ul>
            </Link>
        </div>
    </>)
}