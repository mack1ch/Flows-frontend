import Link from 'next/link'
import { hardFormData, simpleFormData } from '../data'
import styles from './ui.module.scss'

export const FlowCreateChoose = () => {
    return (<>
        <div className={styles.layout}>
            <Link className={styles.section} href='/flows/create/small'>
                <h2 className={styles.section__title}>Упрощенный формат</h2>
                <h3 className={styles.section__discription}>Используйте эту форму, если ваша заявка еще не полностью проработана</h3>
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
            <Link className={styles.section} href='/flows/create/full'>
                <h2 className={styles.section__title}>Полный формат</h2>
                <h3 className={styles.section__discription}>Используйте эту форму, если ваша идея продумана до мелочей</h3>
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